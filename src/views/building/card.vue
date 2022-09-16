<template>
  <div style="text-align: center; height: 100vh; width: 100vw">
    <div
      class="flex-v"
      :style="{
        width: '100%',
        height: '100%',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="padding-left: 10%; padding-right: 10%; padding-top: 10%;">
        <div>
          <van-row>
            <van-col span="1"> </van-col>

            <van-col span="22">
              <div
                :style="{
                  width: '100%',
                  padding: '4px 10px',
                  'background-image': 'url(' + card_bg + ')',
                  'background-repeat': 'no-repeat',
                  'background-size': '100% 100%',
                  '-moz-background-size': '100% 100%',
                }"
              >
                <div style="height: 50vh"></div>
              </div>
            </van-col>

            <van-col span="1"> </van-col>
          </van-row>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.buttonStyle {
  -webkit-animation-name: scaleDraw;
  /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out;
  /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite;
  /*动画播放的次数*/
  -webkit-animation-duration: 5s;
}
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1);
    /*开始为原始大小*/
  }
  25% {
    transform: scale(0.9);
    /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
  }
}
</style>
<script>
import { Toast, Notify } from 'vant';
import axios from 'axios';
// import Vconsole from 'vconsole';
import wx from 'weixin-js-sdk';
import picUrl from '../../assets/building/bg.jpg';
import button from '../../assets/building/button.png';
import card_bg from '../../assets/building/card_bg.png';
import rule from '../../assets/building/rule.png';

// new Vconsole();

export default {
  name: 'building',
  data() {
    return {
      picUrl,
      button,
      card_bg,
      rule,
    };
  },
  methods: {
    go() {
      //   Toast('活动已结束');
      this.$router.push({
        name: 'buildingCard',
      });
    },
    getOpenId(string) {
      axios({
        method: 'get',
        url: this.ports.newyear.getOpenId,
        params: {
          code: string,
        },
      })
        .then((res) => {
          console.log('open_id拿到了，记录一下');
          if (res.data.openid) {
            window.localStorage.setItem('building_openid', res.data.openid);
          } else {
            Notify({ type: 'warning', message: '授权失败' });
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.fail('授权失败');
        });
    },

    wxConfig() {
      axios({
        method: 'get',
        url: this.ports.business.getWechatSign,
        params: {
          url: window.location.href.split('#')[0],
        },
      })
        .then((res) => {
          console.log(res.data);

          wx.config({
            // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            debug: false,
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
          });
          wx.error((result) => {
            // config 信息验证失败会执行error函数,如签名过期导致验证失败
            // 具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
            console.log(`配置验证失败: ${result.errMsg}`);
          });

          wx.ready(() => {
            let url = 'https://www.sjzch.vip/building';
            if (window.localStorage.getItem('building_openid')) {
              url = `${url}?share_id=${window.localStorage.getItem('building_openid')}`;
            }

            wx.updateAppMessageShareData({
              title: '“星级楼宇” 集卡活动', // 分享标题
              desc: '“星级楼宇” 集卡活动', // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_newyear.png', // 分享图标
              success() {
                // 设置成功
                console.log('配置验证成功');
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: '“星级楼宇” 集卡活动', // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_newyear.png', // 分享图标
              success() {
                // 设置成功
                console.log('配置验证成功');
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (window.localStorage.getItem('building_openid')) {
      // 判断是否登录
      console.log('登录了');
      this.wxConfig();
    } else {
      // 没登录则跳转到登录界面
      console.log('没登录');
      console.log(this.$route.query);
      if (this.$route.query.code) {
        console.log('是回掉来的，现在用code去换openid');
        this.getOpenId(this.$route.query.code);
        this.wxConfig();
      } else {
        const state = 'STATE';
        console.log('不是回掉来的，现在去拿code');
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_BUILDING_URL}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
      }
    }
  },
};
</script>
