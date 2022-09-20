<template>
  <div style="text-align: center; height: 100vh; width: 100vw">
    <div
      class="flex-v"
      :style="{
        width: '100%',
        height: '100%',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="padding-top: 30px">
        <van-image width="40%" :src="b1"></van-image>
      </div>
      <div style="padding-top: 20px">
        <van-image width="60%" :src="b2"></van-image>
      </div>
      <div style="padding-top: 10px">
        <van-image width="50%" :src="b3"></van-image>
      </div>
      <div style="padding: 20vh 15vw 0 15vw">
        <van-row>
          <van-col span="12">
            <van-button
              round
              color="#396CA3"
              size="small"
              style="width: 90%"
              @click="go('fengcai')"
            >
              <template #default
                ><div style="font-size: 16px; font-weight: 600">斜桥风采</div>
              </template>
            </van-button>
          </van-col>
          <van-col span="12">
            <van-button round color="#396CA3" size="small" style="width: 90%" @click="go('huiwu')">
              <template #default
                ><div style="font-size: 16px; font-weight: 600">会务安排</div></template
              >
            </van-button>
          </van-col>
        </van-row>
        <van-row style="padding-top: 10px">
          <van-col span="12">
            <van-button round color="#396CA3" size="small" style="width: 90%" @click="go('kaohe')">
              <template #default
                ><div style="font-size: 16px; font-weight: 600">考核线路</div></template
              >
            </van-button>
          </van-col>
          <van-col span="12">
            <van-button
              round
              color="#396CA3"
              size="small"
              style="width: 90%"
              @click="go('jieshao')"
            >
              <template #default
                ><div style="font-size: 16px; font-weight: 600">10+X介绍</div></template
              >
            </van-button>
          </van-col>
        </van-row>
        <van-row style="padding-top: 10px">
          <van-col span="12">
            <van-button
              round
              color="#396CA3"
              size="small"
              style="width: 90%"
              @click="go('gongxing')"
            >
              <template #default
                ><div style="font-size: 16px; font-weight: 600">共性台账</div></template
              >
            </van-button>
          </van-col>
          <van-col span="12">
            <van-button round color="#396CA3" size="small" style="width: 90%" @click="go('gexing')">
              <template #default
                ><div style="font-size: 16px; font-weight: 600">个性台账</div></template
              >
            </van-button>
          </van-col>
        </van-row>
      </div>

      <div
        style="
          text-align: center;
          color: #396ca3;
          position: absolute;
          bottom: 10vh;
          width: 100%;
          font-weight: 600;
        "
      >
        斜桥镇人民政府
      </div>
    </div>
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
import picUrl from '../../assets/xieqiao/bg.jpg';
import b1 from '../../assets/xieqiao/b1.png';
import b2 from '../../assets/xieqiao/b2.png';
import b3 from '../../assets/xieqiao/b3.png';

export default {
  name: 'xieqiao',
  data() {
    return {
      picUrl,
      b1,
      b2,
      b3,
    };
  },
  methods: {
    go(string) {
      this.$router.push({
        name: string,
      });
    },
  },
  mounted() {},
};
</script>
