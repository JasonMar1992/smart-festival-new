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
import sha1 from 'js-sha1';

import Vconsole from 'vconsole';

new Vconsole();

export default {
  methods: {
    test() {
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

          let url = 'https://www.sjzch.vip/';
          if (window.localStorage.getItem('open_id')) {
            url = `${url}?share_id=${window.localStorage.getItem('open_id')}`;
          }
          wx.ready(() => {
            wx.updateAppMessageShareData({
              title: '快参与｜和海宁一起“智造”', // 分享标题
              desc: '“科技+·智造未来”2021海宁“智造”生活节', // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic.png', // 分享图标
              success() {
                // 设置成功
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: '快参与｜和海宁一起“智造”', // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic.png', // 分享图标
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
    // axios({
    //   method: 'get',
    //   url: this.ports.wx.getToken,
    //   params: {
    //     appid: 'wx18c63ccad9649329',
    //     secret: 'e183e61f0253182a05350f453b423b34',
    //     grant_type: 'client_credential',
    //   },
    // })
    //   .then((res) => {
    //     console.log(res.data.access_token);

    //     axios({
    //       method: 'get',
    //       url: this.ports.wx.getTicket,
    //       params: {
    //         access_token: res.data.access_token,
    //         type: 'jsapi',
    //       },
    //     })
    //       .then((result) => {
    //         console.log(result.data.ticket);

    //         const time = parseInt(new Date().getTime() / 1000);
    //         const signature = sha1(
    //           `jsapi_ticket=${result.data.ticket}&noncestr=113322&timestamp=${time}&url=${window.location.href}`,
    //         );
    //         wx.config({
    //           debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    //           appId: 'wx18c63ccad9649329', // 必填，公众号的唯一标识
    //           timestamp: time, // 必填，生成签名的时间戳
    //           nonceStr: '113322', // 必填，生成签名的随机串
    //           signature, // 必填，签名
    //           jsApiList: [
    //             'updateAppMessageShareData',
    //             'updateTimelineShareData',
    //           ], // 必填，需要使用的JS接口列表
    //         });
    //         wx.ready(() => {
    //           // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
    //           console.log('success');

    //           let url = 'https://www.sjzch.vip';
    //           if (window.localStorage.getItem('open_id')) {
    //             url = `${url}?share_id=${window.localStorage.getItem(
    //               'open_id',
    //             )}`;
    //           }
    //           wx.onMenuShareTimeline({
    //             title: '和我一起“智造”', // 分享标题
    //             link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //             imgUrl: 'https://www.sjzch.vip/img/sharepic.png', // 分享图标
    //             success() {
    //               // 用户点击了分享后执行的回调函数
    //             },
    //           });
    //           wx.onMenuShareAppMessage({
    //             title: '和我一起“智造”', // 分享标题
    //             desc: '2021海宁“智造”生活节', // 分享描述
    //             link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    //             imgUrl: 'https://www.sjzch.vip/img/sharepic.png', // 分享图标
    //             type: 'link', // 分享类型,music、video或link，不填默认为link
    //             success() {
    //               // 用户点击了分享后执行的回调函数
    //             },
    //           });
    //         });
    //         wx.error((result) => {
    //           // config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
    //           console.log(`配置验证失败: ${result.errMsg}`);
    //         });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    this.test();
  },
};
</script>
