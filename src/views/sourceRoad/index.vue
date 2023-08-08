<template>
    <div :style="{
        width: '100vw',
        height: '240vw',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
    }">

        <div style="position: absolute;top: 133vw;left: 26vw">
            <van-image width="24vw" :src="yanguan1" />
        </div>

        <div style="position: absolute;top: 122vw;left: 2vw">
            <van-image width="28vw" :src="yanguan2" />
        </div>

        <div style="position: absolute;top: 122vw;left: 50vw">
            <van-image width="14vw" :src="yanguan3" />
        </div>

        <div style="position: absolute;top: 142vw;left: 24vw">
            <van-image width="20vw" :src="yanguan" @click="go('yg')" />
        </div>

        <div style="position: absolute;top: 138vw;left: 1vw">
            <van-image width="30vw" :src="leader" @click="go('yg')" />
        </div>
    </div>
</template>
<script>
import picUrl from '../../assets/sourceRoad/bg.jpg';
import leader from '../../assets/sourceRoad/leader.gif';
import yanguan1 from '../../assets/sourceRoad/yanguan1.png';
import yanguan2 from '../../assets/sourceRoad/yanguan2.png';
import yanguan3 from '../../assets/sourceRoad/yanguan3.png';
import yanguan from '../../assets/sourceRoad/yanguan.png';
export default {
    name: 'sourceRoad',
    data() {
        return {
            picUrl,
            leader,
            yanguan1,
            yanguan2,
            yanguan3,
            yanguan,
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