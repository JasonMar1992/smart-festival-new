<template>
    <div :style="{
        width: '100vw',
        height: '400vw',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
    }">


        <div style="position: absolute;top: 128vw;left: 18vw">
            <van-image width="26vw" class="buttonStyle" :src="np" @click="go('np')" />
        </div>

        <div style="position: absolute;top: 160vw;left: 64vw">
            <van-image width="20vw" class="buttonStyle" :src="tt" @click="go('tt')" />
        </div>

        <div style="position: absolute;top: 226vw;left: 70vw">
            <van-image width="26vw" class="buttonStyle" :src="wgw" @click="go('wgw')" />
        </div>

        <div style="position: absolute;top: 272vw;left: 6vw">
            <van-image width="32vw" class="buttonStyle" :src="cd" @click="go('cd')" />
        </div>

        <div style="position: absolute;top: 292vw;left: 64vw">
            <van-image width="32vw" class="buttonStyle" :src="hclc" @click="go('hclc')" />
        </div>

        <div style="position: absolute;top: 350vw;left: 7vw">
            <van-image width="34vw" class="buttonStyle" :src="qjt" @click="go('qjt')" />
        </div>

        <div>
            <van-image class="elementMove" width="28vw" :src="leader" />
        </div>
    </div>
</template>
<script>
import picUrl from '../../assets/sourceRoad/bgbgbg.jpg';
import leader from '../../assets/sourceRoad/gif1.gif';
import np from '../../assets/sourceRoad/np.png';
import tt from '../../assets/sourceRoad/tt.png';
import wgw from '../../assets/sourceRoad/wgw.png';
import cd from '../../assets/sourceRoad/cd.png';
import hclc from '../../assets/sourceRoad/pgc.png';
import qjt from '../../assets/sourceRoad/qjt.png';
export default {
    name: 'sourceRoad',
    data() {
        return {
            picUrl,
            leader,
            np,
            tt,
            wgw,
            cd,
            hclc,
            qjt
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

    16% {
        transform: translate(68vw, 110vw) scale(0.86);
    }

    20% {
        transform: translate(72vw, 128vw) scale(0.92);
    }

    36% {
        transform: translate(7vw, 152vw) scale(0.72);
    }

    40% {
        transform: translate(10vw, 168vw) scale(0.68);
    }

    56% {
        transform: translate(66vw, 202vw) scale(0.84);
    }

    60% {
        transform: translate(68vw, 212vw) scale(0.90);
    }

    76% {
        transform: translate(7vw, 256vw) scale(0.70);
    }

    80% {
        transform: translate(11vw, 278vw) scale(0.68);
    }

    100% {
        transform: translate(72vw, 306vw) scale(0.92);
    }
}

/* 应用轨迹动画 */
.elementMove {
    animation: move 24s linear;
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