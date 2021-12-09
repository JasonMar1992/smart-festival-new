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
        v-for="(item, i) in list"
        :key="i"
        style="
          margin: 2px 28px;
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
              {{ item.prize_name }}
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
              <div>{{ item.shop_name }}</div>
              <van-tag type="primary">{{ item.description }}</van-tag
              ><van-tag style="margin-left: 10px" type="success">{{
                statusFormate(item.status)
              }}</van-tag>
            </div></van-col
          >
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import picUrl from '../assets/images/bg.jpg';

export default {
  name: '',
  data() {
    return {
      picUrl,
      name: '',
      mobile: '',
      address: '',

      list: [],
    };
  },
  methods: {
    statusFormate(string) {
      let result = '';
      // eslint-disable-next-line default-case
      switch (string) {
        case 'PENDING':
          result = '未兑奖';
          return result;
        case 'AWARD':
          result = '已兑奖';
          return result;
      }
    },
    getSelfInfo() {
      axios({
        method: 'get',
        url: this.ports.business.getSelfInfo,
        params: {
          openid: window.localStorage.getItem('open_id'),
        },
      })
        .then((res) => {
          console.log(res.data);
          this.name = res.data.name;
          this.mobile = res.data.mobile;
          this.address = res.data.address;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMyAwards() {
      axios({
        method: 'get',
        url: this.ports.business.getMyAwards,
        params: {
          openid: window.localStorage.getItem('open_id'),
        },
      })
        .then((res) => {
          console.log(res.data);
          this.list = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getSelfInfo();
    this.getMyAwards();
  },
};
</script>
