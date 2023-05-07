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
            title
        };
    },
    methods: {
        go() {
            window.location.href = "https://www.sjzch.vip/fish";
        },
        showRule() {

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
</style>