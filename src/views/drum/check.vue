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

        <div v-if="!loading">
            <div style="padding-top: 50vw;position: absolute;color:#FAEACD;width: 100%;line-height: 30px;">
                <div>姓名：{{ user.realname }}</div>
                <div>电话：{{ user.mobile }}</div>
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
                            this.findData();
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
        findData() {
            this.loading = true;
            axios({
                method: 'get',
                url: this.ports.drum.getUserInfo,
                params: {
                    id: this.$route.params.id,
                    mobile: this.$route.params.mobile,
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
        }
    },
    mounted() {
        this.findData();
    },
};
</script>
