<template>
    <div style="text-align: center;">
        <van-image width="100%" :src="picUrl" style="position: absolute;left: 0" />

        <van-row style="padding: 90vw 15% 0 15%;">
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(0)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">领导视察</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(1)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">荣誉奖章</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="24">
                <div style="height: 4vw"></div>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(2)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">党建引领</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(3)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">经济发展</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="24">
                <div style="height: 4vw"></div>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(4)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">共同富裕</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(5)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">生态环保</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="24">
                <div style="height: 4vw"></div>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(6)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">民生事业</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(7)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">城镇管理</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="24">
                <div style="height: 4vw"></div>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(8)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">清廉黄湾</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(9)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">平安法治</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="24">
                <div style="height: 4vw"></div>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(10)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">五彩群团</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(11)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">人大之声</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="24">
                <div style="height: 4vw"></div>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(12)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">人武风采</div>
                    </template>
                </van-button>
            </van-col>
            <van-col span="12">
                <van-button round size="small" color="#F5C254" @click="tab(13)">
                    <template slot="default">
                        <div style="color: #7E1A22;padding:0 20px">感人瞬间</div>
                    </template>
                </van-button>
            </van-col>
        </van-row>
    </div>
</template>
<script>
import axios from 'axios';
import wx from 'weixin-js-sdk';
import picUrl from '../../assets/huangwan/bg1.jpg';
export default {
    name: 'huangwan',
    data() {
        return {
            picUrl,
        }
    },
    methods: {
        tab(number) {
            console.log(number);
            this.$router.push({
                path: "/huangwanDetail/" + number,
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
                        const url = location.origin + '/huangwan';

                        wx.updateAppMessageShareData({
                            title: '黄湾镇2022年工作回眸', // 分享标题
                            desc: '砥砺奋进新征程 跨越发展冲千亿', // 分享描述
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_huangwan.jpg', // 分享图标
                            success() {
                                // 设置成功
                                console.log('配置验证成功');
                            },
                        });
                        // 需在用户可能点击分享按钮前就先调用
                        wx.updateTimelineShareData({
                            title: '黄湾镇2022年工作回眸', // 分享标题
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_huangwan.jpg', // 分享图标
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
}
</script>