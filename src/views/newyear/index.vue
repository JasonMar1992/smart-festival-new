<template>
  <div style="text-align: center">
    <div
      class="flex-v"
      :style="{
        'padding-top': '6vh',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="height: 680px">
        <div style="height: 200px">
          <van-image
            class="buttonStyle"
            style="margin-top: 476px"
            width="180"
            height="60"
            :src="button"
            @click="go"
          />
        </div>
      </div>
    </div>
    <div style="height: 120px; width: 100%; background: #940a10"></div>
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
import picUrl from '../../assets/newyear/newyear_bg.png';
import button from '../../assets/newyear/button.png';

// new Vconsole();

export default {
  name: 'newyear',
  data() {
    return {
      picUrl,
      button,
    };
  },
  methods: {
    go() {
      Toast('活动已结束');
      // this.$router.push({
      //   name: 'newyearcard',
      // });
    },
    addShare(id) {
      axios({
        method: 'post',
        url: this.ports.newyear.addShare,
        data: {
          own_openid: id,
          openid: window.localStorage.getItem('newyear_openid'),
        },
      })
        .then((res) => {
          console.log('成功被别人邀请');
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getOpenId(string, share) {
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
            window.localStorage.setItem('newyear_openid', res.data.openid);

            if (share) {
              this.addShare(share);
            }
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
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
          });
          wx.error((result) => {
            // config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
            console.log(`配置验证失败: ${result.errMsg}`);
          });

          wx.ready(() => {
            let url = 'https://www.sjzch.vip/newyear';
            if (window.localStorage.getItem('newyear_openid')) {
              url = `${url}?share_id=${window.localStorage.getItem(
                'newyear_openid',
              )}`;
            }

            wx.updateAppMessageShareData({
              title: '快参与｜和我一起集年俗卡', // 分享标题
              desc: '马桥街道“寻找新年味”集卡活动', // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_newyear.png', // 分享图标
              success() {
                // 设置成功
                console.log('配置验证成功');
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: '快参与｜和我一起集年俗卡', // 分享标题
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
    if (window.localStorage.getItem('newyear_openid')) {
      // 判断是否登录
      console.log('登录了');

      // 如果只允许拉新，不允许拉老，就注释掉
      if (this.$route.query.share_id) {
        this.addShare(this.$route.query.share_id);
      }
      //   this.wxConfig();
    } else {
      // 没登录则跳转到登录界面
      console.log('没登录');
      console.log(this.$route.query);

      let state = 'STATE';
      if (this.$route.query.share_id) {
        console.log('带了分享id');
        state = this.$route.query.share_id;
      }
      if (this.$route.query.code) {
        console.log('是回掉来的，现在用code去换openid');
        let share_id = null;
        if (this.$route.query.state && this.$route.query.state !== 'STATE') {
          console.log('带了分享state');
          share_id = this.$route.query.state;
        }
        this.getOpenId(this.$route.query.code, share_id);
        this.wxConfig();
      } else {
        console.log('不是回掉来的，现在去拿code');
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_NEWYEAR_URL}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
      }
    }
  },
};
</script>
