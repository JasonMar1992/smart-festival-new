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
import wx from 'weixin-js-sdk';
import axios from 'axios';

export default {
  methods: {
    // test() {
    //   axios({
    //     method: 'get',
    //     url: this.ports.business.getWechatSign,
    //     params: {
    //       url: window.location.href.split('#')[0],
    //     },
    //   })
    //     .then((res) => {
    //       console.log(res.data);

    //       wx.config({
    //         debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //         appId: res.data.appId, // 必填，公众号的唯一标识
    //         timestamp: res.data.timestamp, // 必填，生成签名的时间戳
    //         nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
    //         signature: res.data.signature, // 必填，签名
    //         jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
    //       });
    //       wx.error((result) => {
    //         // config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
    //         console.log(`配置验证失败: ${result.errMsg}`);
    //       });

    //       let url = 'https://www.sjzch.vip/';
    //       if (window.localStorage.getItem('open_id')) {
    //         url = `${url}?share_id=${window.localStorage.getItem('open_id')}`;
    //       }
    //       wx.ready(() => {
    //         wx.updateAppMessageShareData({
    //           title: '快参与｜和海宁一起“智造”', // 分享标题
    //           desc: '“科技+·智造未来”2021海宁“智造”生活节', // 分享描述
    //           link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //           imgUrl: 'https://www.sjzch.vip/img/sharepic.png', // 分享图标
    //           success() {
    //             // 设置成功
    //           },
    //         });
    //         // 需在用户可能点击分享按钮前就先调用
    //         wx.updateTimelineShareData({
    //           title: '快参与｜和海宁一起“智造”', // 分享标题
    //           link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //           imgUrl: 'https://www.sjzch.vip/img/sharepic.png', // 分享图标
    //           success() {
    //             // 设置成功
    //           },
    //         });
    //       });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

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

          let url = 'https://www.sjzch.vip/newyear';
          if (window.localStorage.getItem('newyear_openid')) {
            url = `${url}?share_id=${window.localStorage.getItem(
              'newyear_openid',
            )}`;
          }
          wx.ready(() => {
            wx.updateAppMessageShareData({
              title: '快参与｜和我一起集年俗卡', // 分享标题
              desc: '马桥街道“寻找新年味”集卡活动', // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_newyear.png', // 分享图标
              success() {
                // 设置成功
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: '快参与｜和我一起集年俗卡', // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_newyear.png', // 分享图标
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
  },
  mounted() {
    // this.test()
    if (window.localStorage.getItem('newyear_openid')) {
      this.wxConfig();
    }
  },
};
</script>
