<template>
  <router-view></router-view>
</template>

<script>
import axios from 'axios';
// import Vconsole from 'vconsole';
import wx from 'weixin-js-sdk';

// new Vconsole();

export default {
  name: 'xieqiao',
  data() {
    return {};
  },
  methods: {
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
            const url = 'https://www.sjzch.vip/xieqiao';

            wx.updateAppMessageShareData({
              title: '海宁市斜桥镇农业特色型美丽城镇省级样板镇创建工作', // 分享标题
              desc: '农业特色型浙江省美丽城镇建设', // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_xieqiao.png', // 分享图标
              success() {
                // 设置成功
                console.log('配置验证成功');
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: '斜桥美镇会务系统', // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_xieqiao.png', // 分享图标
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
    this.wxConfig();
  },
};
</script>
