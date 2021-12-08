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
      <div
        style="
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          margin-bottom: 20px;
        "
      >
        核销奖品
      </div>
      <van-field
        style="margin-bottom: 20px"
        v-model="tel"
        label="手机号"
        placeholder="请输入手机号"
      />
      <van-button type="primary">搜索</van-button>
      <van-button style="margin-left: 20px" type="info">核销</van-button>
      <div style="color: #fff; font-weight: bold; font-size: 16px">
        中奖人信息
      </div>
      <div
        style="
          padding: 0px 28px;
          color: #515a6e;
          font-size: 14px;
          text-align: left;
        "
      >
        <div>姓名：{{ name }}</div>
        <div>手机：{{ mobile }}</div>
        <div>地址：{{ address }}</div>
        <div>奖品：{{ prize }}</div>
        <div>状态：{{ status }}</div>
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
      prize: '大杯薄荷奶绿',
      status: '未兑换',
    };
  },
  methods: {},
  mounted() {},
};
</script>
