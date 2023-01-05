<template>
    <div style="text-align: center;">
        <van-overlay :show="loading" @click.stop z-index="2">
            <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
                <van-loading size="60" />
            </div>
        </van-overlay>

        <van-image width="100%" :src="picUrl" style="position: absolute;left: 0" />

        <div @click="rule"
            style="z-index: 1;;right: 8vw;top: 28vw;position: fixed;color: #F7E6C3;font-size: 13px;border: #F7E6C3 1px solid;line-height: 24px;border-radius: 12px;padding: 0 8px;">
            规则
        </div>

        <van-image width="30%" :src="logo" style="left: 20px;top: 20px;position: absolute;" />

        <div style="padding-top: 20vw">
            <van-image width="90%" :src="title" />
        </div>

        <div v-if="!loading">
            <div style="padding-top: 50vw;" @click="go">
                <van-image width="60%" height="80px" :src="button" style="position: absolute;left: 20%" />
                <div
                    style="position: absolute;left: 20%;width: 60%;text-align: center;padding-top: 10px;color: #A52216;font-size: 24px;font-weight: 300;">
                    {{ getAll?(userInfo.offline ? "预约成功" : "预约领奖"): "开始游戏" }}
                </div>
                <div
                    style="position: absolute;left: 20%;width: 60%;text-align: center;padding-top: 40px;color: #A52216;font-size: 14px;font-weight: 300;">
                    {{ getAll?(userInfo.offline ? "查看我的预约码" : "仅限600个名额"): "新年集五运" }}
                </div>
            </div>

            <div v-if="info">

                <div v-if="!userInfo.subscribe">
                    <div
                        style="padding-top: 24vw;padding-left: 5vw;padding-right: 5vw;display: flex;flex-direction: row;">
                        <div v-for="(item, i) in cardList" :key="i">
                            <div style="padding:0 1vw">
                                <div style="position: absolute;width: 14vw;padding-top: 1vw;z-index: 100;">
                                    <div
                                        style="border-radius:42%;color:#A52216;background:#F8DEBA;float: right;padding: 0 3px;font-size: 13px;min-width:10px">
                                        {{ has[i].ids.length > 10 ? "···" : has[i].ids.length }}
                                    </div>
                                </div>
                                <div style="width: 100%;">
                                    <van-image width="16vw" :src="item.picMini" />
                                    <div
                                        style="font-size: 12px;color: #F8DEBA;position: absolute;width: 16vw;text-align: center;">
                                        {{ item.name }}
                                    </div>
                                </div>
                                <!-- <div v-else style="width: 100%">
                      <van-image width="16vw" :src="item.picMiniShadow" />
                      <div style="font-size: 12px;">{{ item.name }}</div>
                  </div> -->
                            </div>
                        </div>
                    </div>
                </div>

                <div style="padding-top: 10vw;" v-if="getAll && !userInfo.subscribe">
                    <div class="buttonStyle">

                        <wx-open-subscribe id="subscribe-btn" template="Yf6vs0zVvXQtlPPHRdBLW-2BC69aP9deMgv8-OgXa-I">
                            <script type="text/wxtag-template" slot="style">
                                <style>
                                   .subscribe-btn {
                                     border: none;
                                     background: transparent;
                                     background-image: url('https://www.sjzch.vip/img/zjhy_btn.png');
                                     width: 180px;
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
                        <!-- <van-image width="50%" height="50px" :src="button" style="position: absolute;left: 25%" />
                        <div
                            style="position: absolute;left: 20%;width: 60%;text-align: center;color: #A52216;font-size: 20px;font-weight: 300;line-height: 46px;">
                            开始合成
                        </div> -->
                    </div>
                </div>

            </div>

            <div v-if="getAll && userInfo.subscribe">
                <div style="padding-top: 16vw">
                    <van-image width="56%" :src="redbag" style="position: absolute;left: 22%" />
                    <div
                        style="position: absolute;left: 20%;width: 60%;text-align: center;padding-top: 49vw;color: white;font-size: 12px;font-weight: 300;">
                        2023年2月5日12:00<br />准时开奖
                    </div>
                </div>
            </div>
        </div>

        <van-popup v-model="appointment" round style="width: 90vw;background-color: #DE3035;padding:12px">
            <van-row gutter="10">
                <van-col span="19">
                    <div style="background-color: #FAEACD; border-radius: 6px;padding: 12px 0;">
                        <div style="color: #9E0000;font-size: 16px;line-height: 24px;">
                            华运仕府 映运蝶府 展示中心
                        </div>
                        <div style="color: #9E0000;font-size: 10px;font-weight: 200;line-height: 24px;">
                            海昌南路332号（海昌路西侧、学林街北侧）
                        </div>
                    </div>
                </van-col>
                <van-col span="5">
                    <div v-if="limit[0] == 0"
                        style="background-color: #ECEDEC; border-radius: 6px;padding: 12px 0;color: #A1A2A2;font-size: 18px;line-height: 24px;">
                        <div>
                            预约
                        </div>
                        <div>
                            已满
                        </div>
                    </div>

                    <div v-else @click="order(1)" style="background-color: #F6E070; border-radius: 6px;padding: 6px 0;">
                        <div style="color: #9E0000;font-size: 18px;line-height: 22px;">
                            <div>
                                点击
                            </div>
                            <div>
                                预约
                            </div>
                        </div>
                        <div style="font-size: 10px;color: #9E0000;font-weight: 300;line-height: 16px;">
                            剩余：{{ limit[0]}}
                        </div>
                    </div>
                </van-col>
            </van-row>
            <van-row gutter="10" style="margin-top: 10px">
                <van-col span="19">
                    <div style="background-color: #FAEACD; border-radius: 6px;padding: 12px 0;">
                        <div style="color: #9E0000;font-size: 16px;line-height: 24px;">
                            静悦府 展示中心
                        </div>
                        <div style="color: #9E0000;font-size: 10px;font-weight: 200;line-height: 24px;">
                            海昌南路650号
                        </div>
                    </div>
                </van-col>
                <van-col span="5">
                    <div v-if="limit[1] == 0"
                        style="background-color: #ECEDEC; border-radius: 6px;padding: 12px 0;color: #A1A2A2;font-size: 18px;line-height: 24px;">
                        <div>
                            预约
                        </div>
                        <div>
                            已满
                        </div>
                    </div>

                    <div v-else @click="order(2)" style="background-color: #F6E070; border-radius: 6px;padding: 6px 0;">
                        <div style="color: #9E0000;font-size: 18px;line-height: 22px;">
                            <div>
                                点击
                            </div>
                            <div>
                                预约
                            </div>
                        </div>
                        <div style="font-size: 10px;color: #9E0000;font-weight: 300;line-height: 16px;">
                            剩余：{{ limit[1]}}
                        </div>
                    </div>
                </van-col>
            </van-row>
            <van-row gutter="10" style="margin-top: 10px">
                <van-col span="19">
                    <div style="background-color: #FAEACD; border-radius: 6px;padding: 6px 0;">
                        <div style="color: #9E0000;font-size: 16px;line-height: 28px;">
                            梓运锦府 展示中心
                        </div>
                        <div style="color: #9E0000;font-size: 10px;font-weight: 200;line-height: 16px;">
                            周王庙镇桑梓中路与
                        </div>
                        <div style="color: #9E0000;font-size: 10px;font-weight: 200;line-height: 16px;">
                            周长路交汇处杭海城铁周王庙站
                        </div>
                    </div>
                </van-col>
                <van-col span="5">
                    <div v-if="limit[2] == 0"
                        style="background-color: #ECEDEC; border-radius: 6px;padding: 12px 0;color: #A1A2A2;font-size: 18px;line-height: 24px;">
                        <div>
                            预约
                        </div>
                        <div>
                            已满
                        </div>
                    </div>

                    <div v-else @click="order(3)" style="background-color: #F6E070; border-radius: 6px;padding: 6px 0;">
                        <div style="color: #9E0000;font-size: 18px;line-height: 22px;">
                            <div>
                                点击
                            </div>
                            <div>
                                预约
                            </div>
                        </div>
                        <div style="font-size: 10px;color: #9E0000;font-weight: 300;line-height: 16px;">
                            剩余：{{ limit[2]}}
                        </div>
                    </div>
                </van-col>
            </van-row>
        </van-popup>

        <van-dialog theme="round-button" title="完善个人信息" v-model="infoModal" @confirm="submitInfo"
            :before-close="onBeforeInfoClose">
            <van-form ref="form" validate-first style="padding:0 10px">
                <!-- 输入任意文本 -->
                <van-field v-model="infoData.realname" label="姓名" maxlength="10" required
                    :rules="[{ required: true, message: '请填写姓名' }]" placeholder="点击输入姓名" />
                <!-- 输入手机号，调起手机号键盘 -->
                <van-field v-model="infoData.mobile" type="tel" label="手机号" maxlength="11" required
                    :rules="[{ pattern, message: '手机号格式不对' }]" placeholder="点击输入手机号" />
                <div style="font-size: 12px;color: #c5c8ce;text-align: right;margin: 4px 18px;">
                    *个人信息一经确认不得修改
                </div>
            </van-form>
        </van-dialog>

        <van-popup v-model="showQrcode" style="width: 70%;background-color: #DE3035;padding:12px" round>
            <div class="qrcode" style="padding: 10px">
                <div style="margin: 0 auto; width: 200px; height: 200px; display: none" ref="qrCodeUrl" id="qrCodeDiv">
                </div>
                <div style="margin: 0 auto; width: 200px; height: 200px">
                    <img :src="QRUrl" style="width: 100%; height: 100%" />
                </div>
            </div>
            <div style="color: #FADFC0;line-height: 30px;">
                {{ addressFormat(userInfo.offline) }}
            </div>
            <div style="color: #FADFC0;font-size: 11px;">
                {{ addresDetailFormat(userInfo.offline) }}
            </div>
        </van-popup>

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
import { Toast, Notify, Dialog } from 'vant';
import QRCode from "qrcodejs2";
import axios from 'axios';
import wx from 'weixin-js-sdk';
import picUrl from '../../assets/drum/bg.jpg';
import button from '../../assets/drum/btn1.png';
import logo from '../../assets/drum/pic0.png';
import title from '../../assets/drum/pic1.png';
import redbag from '../../assets/drum/redbag.png';

import prize1 from '../../assets/drum/prize1.png';
import prize1Shadow from '../../assets/drum/prize1_shadow.png';
import prize2 from '../../assets/drum/prize2.png';
import prize2Shadow from '../../assets/drum/prize2_shadow.png';
import prize3 from '../../assets/drum/prize3.png';
import prize3Shadow from '../../assets/drum/prize3_shadow.png';
import prize4 from '../../assets/drum/prize4.png';
import prize4Shadow from '../../assets/drum/prize4_shadow.png';
import prize5 from '../../assets/drum/prize5.png';
import prize5Shadow from '../../assets/drum/prize5_shadow.png';

// import Vconsole from 'vconsole';
// new Vconsole();

export default {
    name: 'drum',
    data() {
        return {
            picUrl,
            button,
            title,
            logo,
            redbag,

            pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,

            loading: false,


            cardList: [
                {
                    name: '鸿运',
                    picMini: prize1,
                    picMiniShadow: prize1Shadow,
                },
                {
                    name: '福运',
                    picMini: prize2,
                    picMiniShadow: prize2Shadow,
                },
                {
                    name: '财运',
                    picMini: prize3,
                    picMiniShadow: prize3Shadow,
                },
                {
                    name: '禄运',
                    picMini: prize4,
                    picMiniShadow: prize4Shadow,
                },
                {
                    name: '气运',
                    picMini: prize5,
                    picMiniShadow: prize5Shadow,
                },
            ],

            userInfo: {},

            has: [
                {
                    card: 1,
                    ids: [],
                },
                {
                    card: 2,
                    ids: [],
                },
                {
                    card: 3,
                    ids: [],
                },
                {
                    card: 4,
                    ids: [],
                },
                {
                    card: 5,
                    ids: [],
                },
            ],


            info: false,
            infoData: {
                realname: '',
                mobile: '',
            },
            infoModal: false,

            getAll: false,

            appointment: false,

            showQrcode: false,
            QRUrl: null,

            limit: [0, 0, 0],

            ruleText: "1、参与规则\n①扫码或点击微信链接打开小程序，进入活动首页，点击开启活动，进入游戏页面；\n②每人每天无限次参与机会，直至集齐，集齐即可预约展示中心的翻翻墙活动，还可参与元宵节抽大奖活动；\n\n2、游戏规则\n①参与者通过双手敲击屏幕“打鼓”，点击掉落下来的图标；\n②成功敲击20次即掉落下一个锦囊，点击锦囊可开出“好运卡”；\n\n3、兑奖规则\n①集齐“五运”后可合成“好运卡”一张，并弹出线下预约框，客户需在三大展示中心中选择一个，获得核销码；\n②完成线下活动预约，每个展示中心名额有限，约满即止，活动仅限预约客户，每个账号仅限参与一次；\n③来访还有机会参与抓娃娃活动，来访的每组客户可以领取5个游戏币，娃娃数量有限，抓完即止。\n\n4、元宵抽大奖规则\n①集齐“五运”并合成“好运卡”后，客户完成线下预约即跳转“等待开奖页面”；\n②奖品于元宵节准点开出，并小程序与推文同时公布获奖名单及领奖地址；\n\n注：集齐“好运卡”后仅预约翻翻墙活动，元宵大奖礼品领取地点视官方公布为准。",
        };
    },
    methods: {

        rule() {
            Dialog.alert({
                title: '活动规则',
                message: this.ruleText,
                messageAlign: "left",
                confirmButtonText: '我知道了',
            }).then(() => {
                // on close
            });
        },

        onBeforeInfoClose(action, done) {
            if (action === 'confirm') {
                return done(false);
            }
            // 重置表单校验
            this.$refs.form.resetFields();
            this.infoData = {
                realname: '',
                mobile: '',
            };
            return done();
        },
        submitInfo() {
            this.$refs.form
                .validate()
                .then(() => {
                    // 验证通过
                    console.log('验证通过');
                    axios({
                        method: 'post',
                        url: this.ports.drum.updateUserInfo,
                        data: {
                            ...this.infoData,
                            openid: window.localStorage.getItem('drum_openid'),
                        },
                    })
                        .then((res) => {
                            console.log(res.data);
                            if (res.data.success) {
                                Toast.success(res.data.msg);
                                this.info = true;
                                this.infoModal = false;
                                this.rule();
                            } else {
                                Toast.fail(res.data.msg);
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                            Toast.fail('操作失败');
                        });
                })
                .catch(() => {
                    // 验证失败
                    console.log('验证失败');
                    this.infoModal = true;
                });
        },

        addressFormat(number) {
            let name = "";
            if (number == 1) {
                name = "华运仕府 映运蝶府 展示中心";
            } else if (number == 2) {
                name = "静悦府 展示中心";
            } else if (number == 3) {
                name = "梓运锦府 展示中心";
            }
            return name;
        },
        addresDetailFormat(number) {
            let name = "";
            if (number == 1) {
                name = "海昌南路332号（海昌路西侧、学林街北侧）";
            } else if (number == 2) {
                name = "海昌南路650号";
            } else if (number == 3) {
                name = "周王庙镇桑梓中路与周长路交汇处杭海城铁周王庙站";
            }
            return name;
        },

        order(number) {
            let name = this.addressFormat(number);

            Dialog.confirm({
                title: '预约提示',
                message: '确定要选择 ' + name + "吗？",
            })
                .then(() => {
                    // on confirm
                    console.log("confirm");
                    this.loading = true;
                    axios({
                        method: 'post',
                        url: this.ports.drum.offline,
                        data: {
                            offline: number,
                            openid: window.localStorage.getItem('drum_openid'),
                        },
                    })
                        .then((res) => {
                            this.loading = false;
                            Toast.success(res.data.msg);
                            this.appointment = false;
                            this.userInfo.offline = number;
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
        go() {
            //   Toast('活动已结束');
            if (!this.info) {
                console.log('请完善信息');
                this.infoModal = true;
                return;
            } else {

                if (this.getAll) {
                    //集齐了
                    if (this.userInfo.offline) {
                        this.showQrcode = true;
                        const url = `https://www.sjzch.vip/zjhyCheck/${this.userInfo.id}/${this.userInfo.mobile}`;
                        const self = this;
                        setTimeout(() => {
                            self.$refs.qrCodeUrl.innerHTML = "";
                            const qrcode = new QRCode(self.$refs.qrCodeUrl, {
                                text: url, // 需要转换为二维码的内容
                                width: 200,
                                height: 200,
                                colorLight: "#DE3035",
                                colorDark: "#FADFC0"
                            });

                            const canvas = document.getElementsByTagName("canvas")[0];
                            const imgSrc = canvas.toDataURL("image/png");
                            self.QRUrl = imgSrc;
                        }, 100);
                    } else {
                        this.loading = true;
                        axios({
                            method: 'get',
                            url: this.ports.drum.getOffline,
                        })
                            .then((res) => {
                                this.loading = false;
                                this.appointment = true;
                                console.log(res.data);

                                this.limit = [280 - res.data[0] > 0 ? 280 - res.data[0] : 0, 200 - res.data[1] > 0 ? 200 - res.data[1] : 0, 120 - res.data[2] > 0 ? 120 - res.data[2] : 0,];

                                console.log(this.limit);
                            })
                            .catch((error) => {
                                this.loading = false;
                                console.log(error);
                                Toast.fail('网络错误');
                            });
                    }

                } else {
                    //没集齐
                    location.replace(location.origin + "/drum/index.html");
                }

            }
        },
        getOpenId(string) {
            axios({
                method: 'get',
                url: this.ports.drum.getOpenId,
                params: {
                    code: string,
                },
            })
                .then((res) => {
                    console.log('open_id拿到了，记录一下');
                    if (res.data.openid) {
                        window.localStorage.setItem('drum_openid', res.data.openid);
                        this.getSelfInfo(res.data.openid);
                    } else {
                        Notify({ type: 'warning', message: '授权失败' });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    Toast.fail('授权失败');
                });
        },

        getSelfInfo(openid) {
            this.loading = true;
            axios({
                method: "get",
                url: this.ports.drum.getSelfInfo,
                params: {
                    openid: openid,
                },
            })
                .then((res) => {
                    console.log(res);
                    this.userInfo = res.data;
                    if (res.data.realname && res.data.mobile) {
                        this.info = true;
                    }
                    this.getCards();
                })
                .catch((error) => {
                    this.loading = false;
                    console.log(error);
                    Toast.fail("查询失败");
                });
        },
        getCards() {
            axios({
                method: 'get',
                url: this.ports.drum.getCards,
                params: {
                    openid: window.localStorage.getItem('drum_openid'),
                },
            })
                .then((result) => {
                    console.log(result);
                    const res = result.data;
                    this.has = [
                        {
                            card: 1,
                            ids: [],
                        },
                        {
                            card: 2,
                            ids: [],
                        },
                        {
                            card: 3,
                            ids: [],
                        },
                        {
                            card: 4,
                            ids: [],
                        },
                        {
                            card: 5,
                            ids: [],
                        },
                        {
                            card: 6,
                            ids: [],
                        },
                        {
                            card: 7,
                            ids: [],
                        },
                        {
                            card: 8,
                            ids: [],
                        },
                        {
                            card: 9,
                            ids: [],
                        },
                    ];
                    for (let i = 0; i < res.length; i++) {
                        for (let j = 0; j < this.has.length; j++) {
                            if (res[i].card === this.has[j].card) {
                                this.has[j].ids.push(res[i].id);
                            }
                        }
                    }
                    console.log(this.has);

                    this.checkCards();
                    this.loading = false;
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false;
                    Toast.fail('查询失败');
                });
        },
        checkCards() {
            let card = 0;
            for (let i = 0; i < this.has.length; i++) {
                if (this.has[i].ids.length > 0) {
                    card++;
                }
            }
            if (card >= 5) {
                // Toast.success('集齐了');
                this.getAll = true;
            }
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

                    const self = this;

                    wx.config({
                        // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        debug: false,
                        appId: res.data.appId, // 必填，公众号的唯一标识
                        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                        signature: res.data.signature, // 必填，签名
                        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
                        openTagList: ["wx-open-subscribe"]
                    });
                    wx.error((result) => {
                        // config 信息验证失败会执行error函数,如签名过期导致验证失败
                        // 具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
                        console.log(`配置验证失败: ${result.errMsg}`);
                    });

                    wx.ready(() => {
                        const url = 'https://www.sjzch.vip/zjhy';

                        wx.updateAppMessageShareData({
                            title: '“梓静华映·好运新年”击鼓集好运', // 分享标题
                            desc: '快来跟我一起收集“运”吧~', // 分享描述
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_zjhy.png', // 分享图标
                            success() {
                                // 设置成功
                                console.log('配置验证成功');
                            },
                        });
                        // 需在用户可能点击分享按钮前就先调用
                        wx.updateTimelineShareData({
                            title: '“梓静华映·好运新年”击鼓集好运', // 分享标题
                            link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                            imgUrl: 'https://www.sjzch.vip/img/sharepic_zjhy.png', // 分享图标
                            success() {
                                // 设置成功
                                console.log('配置验证成功');
                            },
                        });


                        var btn = document.getElementById('subscribe-btn');
                        btn.addEventListener('success', function (e) {
                            console.log('success', e.detail);
                            let flag = false
                            let data = JSON.parse(e.detail.subscribeDetails)
                            for (let a in data) {
                                let status = JSON.parse(data[a]).status
                                if (status == 'accept') {
                                    flag = true
                                }
                            }
                            if (flag) {
                                console.log('用户点击确定');

                                self.loading = true;
                                axios({
                                    method: 'post',
                                    url: self.ports.drum.subscribe,
                                    data: {
                                        openid: window.localStorage.getItem('drum_openid'),
                                    },
                                })
                                    .then((res) => {
                                        self.loading = false;
                                        Toast.success(res.data.msg);
                                        self.userInfo.subscribe = 1;
                                    })
                                    .catch((error) => {
                                        self.loading = false;
                                        console.log(error);
                                        Toast.fail(error.response.data.msg);
                                    });

                            } else {
                                Toast('请订阅后开启');
                            }
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
        window.onpageshow = (event) => {
            if (event.persisted) window.location.reload();
        };

        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
        if (isWeixin) {
            if (window.localStorage.getItem("drum_openid")) {
                // 判断是否登录
                console.log("登录了");
                this.wxConfig();
                this.getSelfInfo(window.localStorage.getItem("drum_openid"));
            } else {
                // 没登录则跳转到登录界面
                console.log("没登录");
                console.log(this.$route.query);
                if (this.$route.query.code) {
                    console.log("是回掉来的，现在用code去换openid");
                    if (this.$route.query.state && this.$route.query.state !== "STATE") {
                        console.log("带了分享state");
                    }
                    this.getOpenId(this.$route.query.code);
                    this.wxConfig();
                } else {
                    const state = "STATE";
                    console.log("不是回掉来的，现在去拿code");
                    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_DRUM_URL}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
                }
            }
        } else {
            console.log("当前不在微信浏览器中");
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_DRUM_URL}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
        };
    },
};
</script>
