<template>
  <div style="text-align: center">
    <div
      class="flex-v"
      :style="{
        'padding-top': '6vh',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="height: 800px">
        <van-image width="70%" height="60" :src="image1" />
        <van-image width="70%" height="130" :src="image2" />
        <van-image width="70%" height="6" :src="image3" />
        <div style="height: 200px" v-if="layout1">
          <van-image
            class="buttonStyle"
            style="margin-top: 40px"
            width="70%"
            height="90"
            :src="button"
            @click="go"
          />
        </div>
        <div style="height: 200px" v-else-if="layout2">
          <van-image
            width="60%"
            height="60"
            :src="image5"
            @click="showRule = true"
          />
          <van-image width="60%" height="60" :src="image6" @click="goTo" />
          <van-image width="60%" height="60" :src="image7" />
        </div>
        <div style="height: 200px" v-else-if="layout3">
          <van-row>
            <van-col span="2" />
            <van-col span="10">
              <van-image
                width="100%"
                height="100"
                :src="tab1"
                @click="goList(0)"
            /></van-col>
            <van-col span="10">
              <van-image
                width="100%"
                height="100"
                :src="tab2"
                @click="goList(1)"
            /></van-col>
            <van-col span="2" />
          </van-row>
          <van-row>
            <van-col span="2" />
            <van-col span="10">
              <van-image
                width="100%"
                height="100"
                :src="tab3"
                @click="goList(2)"
            /></van-col>
            <van-col span="10">
              <van-image
                width="100%"
                height="100"
                :src="tab4"
                @click="goList(3)"
            /></van-col>
            <van-col span="2" />
          </van-row>
        </div>
        <van-image width="50%" height="70" :src="image4" />
      </div>
    </div>
    <van-popup
      v-model="showRule"
      closeable
      round
      close-icon="close"
      :style="{ height: '70%', width: '70%' }"
    >
      <div style="padding: 40px 20px; font-size: 12px">
        Vant 是有赞前端团队开源的移动端组件库，于 2017 年开源，已持续维护 4
        年时间。Vant
        对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。Vant
        是有赞前端团队开源的移动端组件库，于 2017 年开源，已持续维护 4
        年时间。Vant
        对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。Vant
        是有赞前端团队开源的移动端组件库，于 2017 年开源，已持续维护 4
        年时间。Vant
        对内承载了有赞所有核心业务，对外服务十多万开发者，是业界主流的移动端组件库之一。
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
import picUrl from '../assets/images/bg.jpg';
import image1 from '../assets/images/1-0.png';
import image2 from '../assets/images/2-0.png';
import image3 from '../assets/images/3-0.png';
import button from '../assets/images/4-0.png';
import image4 from '../assets/images/5-0.jpg';
import image5 from '../assets/images/2-1.png';
import image6 from '../assets/images/2-2.png';
import image7 from '../assets/images/2-3.png';
import tab1 from '../assets/images/3-1.png';
import tab2 from '../assets/images/3-2.png';
import tab3 from '../assets/images/3-3.png';
import tab4 from '../assets/images/3-4.png';

export default {
  name: '',
  data() {
    return {
      picUrl,
      image1,
      image2,
      image3,
      button,
      image4,
      image5,
      image6,
      image7,
      tab1,
      tab2,
      tab3,
      tab4,

      layout1: true,
      layout2: false,
      layout3: false,
      showRule: false,
    };
  },
  methods: {
    go() {
      this.layout1 = false;
      this.layout2 = true;
      this.layout3 = false;
    },
    goTo() {
      this.layout1 = false;
      this.layout2 = false;
      this.layout3 = true;
    },
    goList(index) {
      this.$router.push({
        name: 'List',
        query: {
          number: index,
        },
      });
    },
  },
  mounted() {},
};
</script>
