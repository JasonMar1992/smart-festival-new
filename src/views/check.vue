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
      <van-button type="primary" :disabled="!tel" @click="search"
        >搜索</van-button
      >
      <div
        style="
          color: #fff;
          font-weight: bold;
          font-size: 16px;
          margin-top: 20px;
        "
      >
        中奖人信息
      </div>
      <div
        v-for="(item, i) in list"
        :key="i"
        style="
          padding: 4px 28px;
          color: #515a6e;
          font-size: 14px;
          text-align: left;
        "
      >
        <van-row>
          <van-col span="18">
            <div>姓名：{{ item.name }}</div>
            <div>手机：{{ item.mobile }}</div>
            <div>地址：{{ item.address }}</div>
            <div>奖品：{{ item.prize_name }}</div>
            <div>状态：{{ statusFormate(item.status) }}</div>
          </van-col>
          <van-col span="6">
            <van-button
              round
              style="margin-top: 30px"
              type="info"
              :disabled="item.status == 'AWARD'"
              @click="audit(item.id)"
              >核销</van-button
            >
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Toast, Dialog } from 'vant';
import picUrl from '../assets/images/bg.jpg';

export default {
  name: '',
  data() {
    return {
      picUrl,
      tel: null,

      list: [],
    };
  },
  methods: {
    audit(id) {
      Dialog.confirm({
        title: '操作提示',
        message: '确认核销吗？',
      })
        .then(() => {
          // on confirm
          axios({
            method: 'put',
            url: this.ports.business.verifyAward + id,
          })
            .then((res) => {
              console.log(res.data);
              Toast.success('核销成功');
              this.search();
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch(() => {
          // on cancel
        });
    },
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
    search() {
      axios({
        method: 'get',
        url: this.ports.business.getAwardsWithMobileShop,
        params: {
          shop_id: this.$route.query.shopCode,
          mobile: this.tel,
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
  mounted() {},
};
</script>
