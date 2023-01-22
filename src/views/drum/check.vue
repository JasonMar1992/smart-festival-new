<template>
    <div style="text-align: center;">
        <van-overlay :show="loading" @click.stop>
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="60" />
            </div>
        </van-overlay>

        <van-image width="100%" :src="picUrl" style="position: absolute;left: 0" />

        <van-image width="30%" :src="logo" style="left: 20px;top: 20px;position: absolute;" />

        <div style="padding-top: 20vw">
            <van-image width="90%" :src="title" />
        </div>

        <div style="padding-top: 50vw">
            <van-button icon="scan" type="warning" @click="scan">扫一扫</van-button>
        </div>


        <div v-if="!loading">
            <div style="padding-top: 5vw;position: absolute;color:#FAEACD;width: 100%;line-height: 30px;">
                <div>微信名：{{ user.nickname }}</div>
                <!-- <div>电话：{{ user.mobile }}</div> -->
                <div>预约点：{{ address(user.offline) }}</div>
                <div v-if="user.offline">状态：{{ user.offline_check ? `已核销(${timeFormat(user.check_time)})` : "未核销" }}
                </div>

                <div v-if="user.offline && !user.offline_check">
                    <div style="padding-top: 3vw;" @click="check">
                        <van-image width="50%" height="50px" :src="button" style="position: absolute;left: 25%" />
                        <div
                            style="position: absolute;left: 20%;width: 60%;text-align: center;padding-top: 9px;color: #A52216;font-size: 20px;font-weight: 300;">
                            现场核销
                        </div>
                    </div>
                    <div style="padding-top: 14vw;width: 100%;color:#FAEACD;font-size: 12px;font-weight: 300;">
                        *请交由现场工作人员谨慎操作
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { Toast, Dialog } from 'vant';
import wx from 'weixin-js-sdk';
import axios from 'axios';
import picUrl from '../../assets/drum/bg.jpg';
import button from '../../assets/drum/btn1.png';
import logo from '../../assets/drum/pic0.png';
import title from '../../assets/drum/pic1.png';
import redbag from '../../assets/drum/redbag.png';
import moment from "moment";

export default {
    name: 'drumCheck',
    data() {
        return {
            moment,
            picUrl,
            button,
            title,
            logo,
            redbag,

            loading: false,

            user: {},

        };
    },
    methods: {
        scan() {

            let self = this;
            wx.ready(function () {
                wx.scanQRCode({
                    needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                    scanType: ["qrCode"], // 可以指定扫二维码还是一维码，默认二者都有
                    success: function (res) {
                        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        console.log("code:" + result);

                        self.findData(result.slice(12));
                    }
                });
            });
        },
        address(number) {
            if (number) {
                if (number == 1) {
                    return "华运仕府 映运蝶府 展示中心";
                } else if (number == 2) {
                    return "静悦府 展示中心";
                } else if (number == 3) {
                    return "梓运锦府 展示中心";
                }
            } else {
                return "未预约"
            }
        },
        check() {
            Dialog.confirm({
                title: '操作提示',
                message: '确定要核销吗？',
            })
                .then(() => {
                    // on confirm
                    console.log("confirm");
                    this.loading = true;
                    axios({
                        method: 'post',
                        url: this.ports.drum.offlineCheck,
                        data: {
                            id: this.user.id,
                        },
                    })
                        .then((res) => {
                            this.loading = false;
                            Toast.success(res.data.msg);
                            this.findData(this.user.id);
                        })
                        .catch((error) => {
                            this.loading = false;
                            console.log(error);
                            Toast.fail(error.response.data.msg);
                        });
                })
                .catch(() => {
                    // on cancel
                    console.log("cancel");
                });
        },
        timeFormat(time) {
            return moment(time).format('YYYY-MM-DD hh:mm');
        },
        findData(id) {
            this.loading = true;
            axios({
                method: 'get',
                url: this.ports.drum.getUserInfo,
                params: {
                    id: id,
                },
            })
                .then((res) => {
                    console.log(res);
                    this.user = res.data
                    this.loading = false;
                })
                .catch((error) => {
                    this.loading = false;
                    console.log(error);
                    Toast.fail(error.response.data.msg);
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
                        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData', "scanQRCode"], // 必填，需要使用的JS接口列表
                    });
                    wx.error((result) => {
                        // config 信息验证失败会执行error函数,如签名过期导致验证失败
                        // 具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
                        console.log(`配置验证失败: ${result.errMsg}`);
                    });

                    wx.ready(() => {
                        const url = location.origin + '/zjhyCheck';

                        wx.updateAppMessageShareData({
                            title: '轨交工联线下预约核销', // 分享标题
                            desc: '', // 分享描述
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_zjhy.png', // 分享图标
                            success() {
                                // 设置成功
                                console.log('配置验证成功');
                            },
                        });
                        // 需在用户可能点击分享按钮前就先调用
                        wx.updateTimelineShareData({
                            title: '轨交工联线下预约核销', // 分享标题
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_zjhy.png', // 分享图标
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
        // this.findData();
        this.wxConfig();
    },
};
</script>
