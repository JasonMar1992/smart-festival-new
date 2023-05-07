<template>
    <div :style="{
        width: '100vw',
        height: '100vh',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
        'text-align': 'center'
    }">
        <div style="padding-top: 28vh">
            <van-image width="90%" :src="title" />
        </div>

        <div style="position: absolute;top: 52vh;width: 100vw;">
            <van-image class="buttonStyle" width="48%" :src="button" @click="go" />
        </div>

        <div style="position: absolute;bottom: 10px;right: 30px;width: 20vw;">
            <van-image width="100%" :src="rule" @click="showRule" />
        </div>


        <van-dialog v-model="ruleDialog" width="90%">
            <template slot="title">
                <div style="font-size: 22px;padding-bottom: 10px;">
                    游戏介绍
                </div>
            </template>
            <div style="height: 60vh;overflow:scroll;padding:2vw 4vw;text-align: start;">
                <div class="rule-tag">1、“捕虾达人”游戏规则</div>
                <div class="rule-title">玩法介绍</div>
                <div class="rule-detail">
                    ①手指点击屏幕中海洋区域内任意位置，炮筒即可向该位置方向发射炮弹
                </div>
                <div class="rule-detail">
                    ②每次游戏开始拥有50发炮弹，打完则游戏结束
                </div>
                <div class="rule-detail">
                    ③炮弹击中目标并成功捕捉，可累计相应分值
                </div>
                <div class="rule-detail">
                    ④游戏结束后，分数超过800方可参与抽奖
                </div>
                <div class="rule-title">分值介绍</div>
                <div class="rule-detail">
                    <div class="rule-detail">
                        ①蓝色小鱼。分值：10分；捕捉：击中1次
                    </div>
                    <div class="rule-detail">
                        ②红色小鱼。分值：10分；捕捉：击中1次
                    </div>
                    <div class="rule-detail">
                        ③小龙虾。分值：40分；捕捉：击中1次
                    </div>
                    <div class="rule-detail">
                        ④大龙虾。分值：80分；捕捉：击中2次
                    </div>

                    <div class="rule-tag">2、活动礼品</div>
                    <div>
                        <div class="rule-title">龙虾提货券（5斤）</div>
                        <div class="rule-title">大米提货券（10斤）</div>
                        <div class="rule-title">龙虾垂钓券（20元）</div>
                        <div class="rule-title">野饭券（50元）</div>
                        <div class="rule-title">集市消费券（5元、10元、20元）</div>
                    </div>
                    <div class="rule-tag">
                        3、活动时间</div>
                    <div class="rule-detail">2023年5月9日</div>
                </div>
            </div>
        </van-dialog>
    </div>
</template>
<script>
import picUrl from '../../assets/lobster/hbg.jpg';
import button from '../../assets/lobster/btn.png';
import rule from '../../assets/lobster/rule.png';
import title from '../../assets/lobster/title.png';
export default {
    name: 'lobster',
    data() {
        return {
            picUrl,
            button,
            rule,
            title,

            ruleDialog: false,
        };
    },
    methods: {
        go() {

            let old = localStorage.getItem("fishGamePlayed");

            if (old) {
                window.location.href = "https://www.sjzch.vip/fish";
            } else {
                localStorage.setItem("fishGamePlayed", "true");
                this.showRule();
            }

        },
        showRule() {
            this.ruleDialog = true;
        }
    }

}
</script>
<style scoped>
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

.rule-tag {
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
}

.rule-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
}

.rule-detail {
    font-size: 13px;
    line-height: 20px;
    color: gray;
}
</style>