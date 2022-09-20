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
        <van-image width="70%" :src="kaohe"></van-image>
      </div>
      <div
        style="
          margin-top: 20px;
          margin-left: 30%;
          margin-right: 30%;
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          background-color: #396ca3;
          line-height: 40px;
          border-radius: 10px;
        "
      >
        10+X介绍
      </div>
      <div style="padding-top: 20vh; padding-left: 30%; padding-right: 30%">
        <van-row>
          <van-col span="6">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
          <van-col span="12">
            <div
              style="font-size: 24px; font-weight: 600; color: #396ca3; line-height: 40px"
              @click="go('jieshaoA')"
            >
              A线路
            </div>
          </van-col>
          <van-col span="6">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
        </van-row>
        <div style="width: 100%; height: 20px"></div>
        <van-row>
          <van-col span="6">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
          <van-col span="12">
            <div
              style="font-size: 24px; font-weight: 600; color: #396ca3; line-height: 40px"
              @click="go('jieshaoB')"
            >
              B线路
            </div>
          </van-col>
          <van-col span="6">
            <div style="height: 40px">
              <div style="width: 100%; height: 15px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 2px"></div>
              <div style="width: 100%; height: 2px; background-color: #396ca3"></div>
              <div style="width: 100%; height: 15px"></div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
// import Vconsole from 'vconsole';
import picUrl from '../../assets/xieqiao/bg.jpg';
import kaohe from '../../assets/xieqiao/kaohe.png';

// new Vconsole();

export default {
  data() {
    return {
      picUrl,
      kaohe,
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
