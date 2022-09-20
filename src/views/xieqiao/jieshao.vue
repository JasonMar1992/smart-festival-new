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

      <div style="padding: 20px 10px">
        <van-image width="100%" :src="a1"></van-image>
        <van-image width="100%" :src="a2"></van-image>
        <van-image width="100%" :src="a3"></van-image>
        <van-image width="100%" :src="a4"></van-image>
        <van-image width="100%" :src="a5"></van-image>
        <van-image width="100%" :src="a6"></van-image>
        <van-image width="100%" :src="a7"></van-image>
        <van-image width="100%" :src="a8"></van-image>
        <van-image width="100%" :src="a9"></van-image>
      </div>

      <div style="padding-top: 20px; padding-left: 30%; padding-right: 30%">
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

      <div style="padding: 20px 10px">
        <van-image width="100%" :src="b1"></van-image>
        <van-image width="100%" :src="b2"></van-image>
        <van-image width="100%" :src="b3"></van-image>
        <van-image width="100%" :src="b4"></van-image>
        <van-image width="100%" :src="b5"></van-image>
        <van-image width="100%" :src="b6"></van-image>
      </div>
    </div>
  </div>
</template>
<script>
// import Vconsole from 'vconsole';
import picUrl from '../../assets/xieqiao/bg.jpg';
import kaohe from '../../assets/xieqiao/kaohe.png';

import a1 from '../../assets/xieqiao/jieshao/a1.png';
import a2 from '../../assets/xieqiao/jieshao/a2.png';
import a3 from '../../assets/xieqiao/jieshao/a3.png';
import a4 from '../../assets/xieqiao/jieshao/a4.png';
import a5 from '../../assets/xieqiao/jieshao/a5.png';
import a6 from '../../assets/xieqiao/jieshao/a6.png';
import a7 from '../../assets/xieqiao/jieshao/a7.png';
import a8 from '../../assets/xieqiao/jieshao/a8.png';
import a9 from '../../assets/xieqiao/jieshao/a9.png';

import b1 from '../../assets/xieqiao/jieshao/b1.png';
import b2 from '../../assets/xieqiao/jieshao/b2.png';
import b3 from '../../assets/xieqiao/jieshao/b3.png';
import b4 from '../../assets/xieqiao/jieshao/b4.png';
import b5 from '../../assets/xieqiao/jieshao/b5.png';
import b6 from '../../assets/xieqiao/jieshao/b6.png';

// new Vconsole();

export default {
  data() {
    return {
      picUrl,
      kaohe,
      a1,
      a2,
      a3,
      a4,
      a5,
      a6,
      a7,
      a8,
      a9,
      b1,
      b2,
      b3,
      b4,
      b5,
      b6,
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
