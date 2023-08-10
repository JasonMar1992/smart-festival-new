<template>
    <div :style="{
        width: '100vw',
        height: '240vw',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
    }">

        <div>
            <van-image class="elementMove" width="30vw" :src="leader" />
        </div>

        <div style="position: absolute;top: 152vw;left: 2vw">
            <van-image width="60vw" class="buttonStyle" :src="station1" @click="go('yg')" />
        </div>
    </div>
</template>
<script>
import picUrl from '../../assets/sourceRoad/bg.jpg';
import leader from '../../assets/sourceRoad/leader2.gif';
import station1 from '../../assets/sourceRoad/station1.png';
export default {
    name: 'sourceRoad',
    data() {
        return {
            picUrl,
            leader,
            station1,
        };
    },
    methods: {
        go(id) {
            this.$router.push({
                path: "/sourceDetail/" + id
            })
        },
    },
    mounted() {
    },
};
</script>
<style scoped>
/* 指定轨迹路径 */
@keyframes move {
    0% {
        transform: translate(2vw, 104vw) scale(0.5);
    }

    80% {
        transform: translate(68vw, 110vw) scale(0.86);
    }

    100% {
        transform: translate(72vw, 122vw) scale(0.92);
    }
}

/* 应用轨迹动画 */
.elementMove {
    animation: move 8s linear;
    animation-fill-mode: forwards;
}


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