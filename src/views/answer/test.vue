
<template>
    <div style="text-align: center; height: 100vh; width: 100vw">
        <wx-open-subscribe id="subscribe-btn" template="Yf6vs0zVvXQtlPPHRdBLW-2BC69aP9deMgv8-OgXa-I">
            <script type="text/wxtag-template" slot="style">
                <style>
      .subscribe-btn {
        border: none;
        background: transparent;
        background-image: url('https://www.sjzch.vip/img/zjhy_btn.png');
        width: 50%;
        height: 56px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        color: #A52216;
        padding-top: 0px;
        font-weight: 300;
        font-size: 18px;
      }
    </style>
  </script>
            <component is="script" type="text/wxtag-template">
                <button class="subscribe-btn">开始合成</button>
            </component>
        </wx-open-subscribe>
    </div>
</template> 
<script>
import { Toast, Notify, Dialog } from "vant";
// import Vconsole from 'vconsole';
import wx from "weixin-js-sdk";

import button from '../../assets/drum/btn1.png';
import axios from "axios";
// new Vconsole();

export default {
    name: "answer",
    data() {
        return {
            button,
        };
    },
    methods: {
        wxConfig() {
            axios({
                method: "get",
                url: this.ports.business.getWechatSign,
                params: {
                    url: window.location.href.split("#")[0],
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
                        jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的JS接口列表
                        openTagList: ["wx-open-subscribe"]
                    });
                    wx.error((result) => {
                        // config 信息验证失败会执行error函数,如签名过期导致验证失败
                        // 具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
                        console.log(`配置验证失败: ${result.errMsg}`);
                    });

                    wx.ready(() => {

                        var btn = document.getElementById('subscribe-btn');
                        btn.addEventListener('success', function (e) {
                            console.log('success', e.detail);
                        });
                        btn.addEventListener('error', function (e) {
                            console.log('fail', e.detail);
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
