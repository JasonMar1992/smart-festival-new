<template>
  <div style="text-align: center">
    <div
      class="flex-v"
      :style="{
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
          font-size: 28px;
          font-weight: 900;
          color: #396ca3;
          line-height: 40px;
        "
      >
        考核线路
      </div>
      <div style="padding-top: 30px; padding-left: 30%; padding-right: 30%">
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
            <div style="font-size: 24px; font-weight: 600; color: #396ca3; line-height: 40px">
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
      </div>

      <div style="padding-top: 30px; padding-left: 10%; padding-right: 10%">
        <van-image width="80%" :src="kaoheA"></van-image>
      </div>
      <div style="padding: 20px 10px">
        <van-image width="80%" :src="ka"></van-image>
      </div>
    </div>
  </div>
</template>
<script>
// import Vconsole from 'vconsole';
import picUrl from '../../assets/xieqiao/bg.jpg';
import kaohe from '../../assets/xieqiao/kaohe.png';
import kaoheA from '../../assets/xieqiao/kaoheA.png';
import ka from '../../assets/xieqiao/ka.png';

// new Vconsole();

export default {
  data() {
    return {
      picUrl,
      kaohe,
      kaoheA,
      ka,
    };
  },
  methods: {},
  mounted() {},
};
</script>
