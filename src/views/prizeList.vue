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
        'min-height': '800px',
      }"
    >
      <div style="color: #fff; font-weight: bold; font-size: 16px">
        中奖人信息
      </div>
      <div
        style="
          padding: 0px 28px;
          color: #515a6e;
          font-size: 12px;
          text-align: left;
        "
      >
        <div>姓名：{{ name }}</div>
        <div>手机：{{ mobile }}</div>
        <div>地址：{{ address }}</div>
      </div>
      <div
        style="
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          margin: 10px 0px;
        "
      >
        奖品列表
      </div>
      <div
        style="
          margin: 0px 28px;
          padding: 0px 4px;
          color: #515a6e;
          font-size: 12px;
          text-align: left;
          background: #f8f8f9;
          border-radius: 10px;
        "
      >
        <van-row style="height: 60px">
          <van-col span="10">
            <div
              style="
                color: red;
                text-align: center;
                line-height: 60px;
                font-size: 14px;
                font-weight: bold;
              "
            >
              乳胶枕一个
            </div>
          </van-col>
          <van-col span="14"
            ><div
              style="
                text-align: center;
                line-height: 30px;
                font-size: 12px;
                font-weight: bold;
              "
            >
              <div>浙江汉保利罗针织股份有限公司</div>
              <van-tag type="primary">自提</van-tag
              ><van-tag style="margin-left: 10px" type="success">已兑奖</van-tag>
            </div></van-col
          >
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import picUrl from '../assets/images/bg.jpg';

export default {
  name: '',
  data() {
    return {
      picUrl,
      name: '章三',
      mobile: '15888380989',
      address:
        '浙江省嘉兴市海宁市百合新城百合新城百合新城百合新城百合新城百合新城',
    };
  },
  methods: {},
  mounted() {},
};
</script>
