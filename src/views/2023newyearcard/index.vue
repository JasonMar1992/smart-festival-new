<template>
    <div style="text-align: center;line-height: 0;">
        <div style="position: absolute;background-color: #911716;width: 100vw">
            <van-image width="100%" :src="picUrl" />
            <div style="height: 120px; width: 100%;"></div>
        </div>
        <div style="position: absolute;padding: 20vw 10vw;z-index: 9;">
            <div style="font-size: 24px;line-height: 28px;color: #FDF399;letter-spacing: 1.5px;font-weight: 500;">
                尊敬的<span @click="infoModal = true;"
                    style="margin-left: 4px;padding-left:2px;border-bottom: 2px #FDF399 solid;">{{ name }}
                    <van-icon name="edit" size="22" @click="infoModal = true;" />
                </span>
            </div>

        </div>
        <div
            style="font-weight: 500;position: absolute;font-size: 18px;line-height: 24px;opacity: 0.8;color: #FDF399;text-align: center;width: 100%;padding-top: 40vw;">
            新岁启封，同跨新年，2023祝您</div>

        <div
            style="font-weight: 500;position: absolute;font-size: 18px;line-height: 24px;opacity: 0.8;color: #FDF399;text-align: center;width: 100%;padding-top: 160vw;">
            —— 海宁驻沪工作部{{ from? `·${from}`: '' }} ——</div>


        <van-dialog theme="round-button" title="我要送祝福" v-model="infoModal" @confirm="submitInfo"
            :before-close="onBeforeInfoClose" show-cancel-button>
            <van-form ref="form" validate-first style="padding:0 10px">
                <!-- 输入任意文本 -->
                <van-field v-model="infoData.realname" label="姓名" maxlength="6" required clearable
                    :rules="[{ required: true, message: '请填写姓名' }]" placeholder="点击输入姓名" />
                <van-field v-model="infoData.from" label="署名" maxlength="10" placeholder="点击输入署名" />
            </van-form>
        </van-dialog>
    </div>
</template>
<script>
import axios from 'axios';
import wx from 'weixin-js-sdk';
import picUrl from '../../assets/2023newyearcard/card-bg.jpg';
export default {
    name: 'shanghaicard',
    data() {
        return {
            picUrl,

            name: "请填写",
            from: "",

            infoModal: false,
            infoData: {
                realname: '',
                from: "",
            },
        }
    },
    methods: {
        urlencode(str) {
            str = (str + '').toString();
            return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
        },
        onBeforeInfoClose(action, done) {
            if (action === 'confirm') {
                return done(false);
            }
            // 重置表单校验
            this.$refs.form.resetValidation();
            this.infoData = {
                realname: '',
                from: this.from,
            };
            return done();
        },
        submitInfo() {
            this.$refs.form
                .validate()
                .then(() => {
                    // 验证通过
                    console.log('验证通过');
                    this.name = this.infoData.realname;
                    this.from = this.infoData.from;
                    this.infoModal = false;
                    this.wxConfig();
                })
                .catch(() => {
                    // 验证失败
                    console.log('验证失败');
                    this.infoModal = true;
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
                        const url = location.origin + '/2023card/' + this.urlencode(this.name) + '/' + this.urlencode(this.from);

                        wx.updateAppMessageShareData({
                            title: '海宁驻沪工作部给您拜年啦！', // 分享标题
                            desc: '新岁启封，同跨新年', // 分享描述
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_2023card.jpg', // 分享图标
                            success() {
                                // 设置成功
                                console.log('配置验证成功');
                            },
                        });
                        // 需在用户可能点击分享按钮前就先调用
                        wx.updateTimelineShareData({
                            title: '海宁驻沪工作部给您拜年啦！', // 分享标题
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_2023card.jpg', // 分享图标
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
        this.name = decodeURI(this.$route.params.name);
        this.from = decodeURI(this.$route.params.from);
        this.infoData.from = this.from;
        this.wxConfig();
    },
}
</script>