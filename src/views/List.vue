<template>
  <div style="background: #e8eaec; padding: 10px; min-height: 100vh">
    <div
      v-for="(item, i) in list"
      :key="i"
      style="
        border-radius: 10px;
        margin-top: 8px;
        height: 120px;
        background: #fff;
        overflow: hidden;
      "
    >
      <van-row style="height: 100%">
        <van-col span="12" style="height: 100%">
          <van-image
            style="height: 100%; width: 100%"
            :src="require('./../assets/img/pic/' + item.pic)"
            :fit="item.picType"
          />
        </van-col>
        <van-col span="12" style="padding: 2px; height: 100%;text-align: center">
          <div style="width: 100%; height: 20%; margin-top: 16px">
            <van-image
              style="height: 100%"
              :src="require('./../assets/img/logo/' + item.logo)"
              fit="contain"
            />
          </div>
          <div
            style="
              margin-top: 4px;
              font-size: 12px;
              font-weight: bold;
              margin-top: 10px;
            "
          >
            {{ item.name }}
          </div>
          <van-button
            style="margin-top: 10px"
            round
            plain
            type="primary"
            size="mini"
            @click="goTo(item.value)"
            >点击查看企业</van-button
          >
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import data from '../assets/json/list.json';

export default {
  name: '',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    goTo(value) {
      this.$router.push({
        name: 'Detail',
        query: {
          name: value,
        },
      });
    },
  },
  mounted() {
    this.list = data[this.$route.query.number];
  },
};
</script>
