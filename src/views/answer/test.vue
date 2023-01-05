
<template>
    <div style="text-align: center; height: 100vh; width: 100vw">
        <van-button @click="show = true;">显示
        </van-button>

        <div v-if="show">
            <wx-open-subscribe id="launch-btn" template="y3yGAjjq3dWPEKVxthW9JJTEES9y9dzQSdJQtOgBRo0">
                <component is="script" type="text/wxtag-template">
                    <button>微信H5唤起App</button>
                </component>
            </wx-open-subscribe>
        </div>
    </div>
</template> 
<script>
import { Toast, Notify, Dialog } from "vant";
// import Vconsole from 'vconsole';
import wx from "weixin-js-sdk";

import axios from "axios";
// new Vconsole();

export default {
    name: "answer",
    data() {
        return {
            show: false,

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
    