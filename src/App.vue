<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import wx from 'weixin-jsapi';
import axios from 'axios';

export default {
  mounted() {
    axios({
      method: 'get',
      url: this.ports.business.getWechatSign,
      params: {
        url: window.location.host,
      },
    })
      .then((res) => {
        console.log(res.data);

        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: res.data.appId, // 必填，公众号的唯一标识
          timestamp: res.data.timestamp, // 必填，生成签名的时间戳
          nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
          signature: res.data.signature, // 必填，签名
          jsApiList: [
            'checkJsApi',
            'updateAppMessageShareData',
            'updateTimelineShareData',
          ], // 必填，需要使用的JS接口列表
        });

        wx.ready(() => {
          wx.updateAppMessageShareData({
            title: '', // 分享标题
            desc: '', // 分享描述
            link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: '', // 分享图标
            success() {
              // 设置成功
            },
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
