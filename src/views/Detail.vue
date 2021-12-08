<template>
  <div style="background: #e8eaec; padding-bottom: 12vh">
    <van-swipe
      v-if="single.banners"
      :autoplay="3000"
      lazy-render
      style="height: 28vh"
    >
      <van-swipe-item v-for="image in single.banners" :key="image">
        <van-image
          lazy-load
          style="width: 100%; height: 100%"
          :src="require('./../assets/img/banner/' + name + '/' + image)"
          fit="cover"
        />
      </van-swipe-item>
    </van-swipe>
    <div
      style="
        background: #fff;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        margin-top: -10px;
        position: relative;
        padding: 10px;
      "
    >
      <div style="width: 100%; height: 30px; text-align: left">
        <van-image
          v-if="single.logo"
          style="height: 100%"
          :src="require('./../assets/img/logo/' + single.logo)"
          fit="contain"
        />
      </div>
      <div
        style="
          margin-top: 10px;
          font-size: 14px;
          text-align: left;
          font-weight: bold;
          color: #000;
        "
      >
        {{ single.name }}
      </div>
      <div
        style="
          margin-top: 10px;
          font-size: 12px;
          text-align: left;
          color: #808695;
        "
        v-html="single.description"
      ></div>
    </div>
    <div
      style="
        background: #fff;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        margin-top: 10px;
        position: relative;
        padding: 10px;
      "
    >
      <div style="font-size: 14px; text-align: left; font-weight: bold">
        主营产品
      </div>
      <div
        v-for="(item, i) in single.products"
        :key="i"
        style="margin-top: 10px"
      >
        <div
          style="
            font-size: 12px;
            text-align: left;
            font-weight: bold;
            margin-bottom: 4px;
            color: #17233d;
          "
        >
          {{ item.title }}
        </div>
        <div v-for="(detail, j) in item.detail" :key="j">
          <div
            v-if="detail.type == 'txt'"
            style="
              font-size: 12px;
              text-align: left;
              margin-top: 4px;
              margin-bottom: 4px;
              color: #515a6e;
            "
          >
            {{ detail.value }}
          </div>
          <van-image
            lazy-load
            v-else-if="detail.type == 'img'"
            style="width: 100%; display: block"
            :src="
              require('./../assets/img/detail/' + name + '/' + detail.value)
            "
            fit="contain"
            @click="
              getImg(
                require('./../assets/img/detail/' + name + '/' + detail.value)
              )
            "
          />
        </div>
      </div>
    </div>
    <div
      v-if="single.addressList"
      style="
        background: #fff;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        margin-top: 10px;
        position: relative;
        padding: 10px;
      "
    >
      <div style="font-size: 14px; text-align: left; font-weight: bold">
        门店信息
      </div>
      <div
        v-for="(item, i) in single.addressList"
        :key="i"
        style="margin-top: 10px"
      >
        <div v-if="item.type == 'offline'">
          <div
            style="
              font-size: 12px;
              text-align: left;
              font-weight: bold;
              color: #2b85e4;
              margin-bottom: 4px;
            "
          >
            {{ item.name }}
          </div>
          <div style="width: 100%; min-height: 20px">
            <div style="font-size: 12px; float: left; line-height: 20px">
              地址：{{ item.address }}
            </div>
            <van-icon
              @click="location(item.location)"
              name="location-o"
              style="float: right"
              color="#ff9900"
            />
          </div>
          <div style="width: 100%; height: 4px" />
          <div style="width: 100%; min-height: 20px">
            <div style="font-size: 12px; float: left; line-height: 20px">
              热线：{{ item.mobile }}
            </div>
            <van-icon
              @click="phone(item.mobile)"
              name="phone-o"
              style="float: right"
              color="#ff9900"
            />
          </div>
        </div>
        <div v-else-if="item.type == 'online'">
          <div style="text-align: left">
            <span style="font-weight: bold; font-size: 12px">线上店铺：</span>
            <span
              style="font-size: 12px; font-weight: bold; color: #2b85e4"
              @click="
                if (item.website) {
                  web(item.website);
                }
              "
            >
              {{ item.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="single.luckDraw"
      style="
        background: #fff;
        margin-left: 10px;
        margin-right: 10px;
        border-radius: 10px;
        margin-top: 10px;
        position: relative;
        padding: 10px;
      "
    >
      <div style="font-size: 14px; text-align: left; font-weight: bold">
        奖品信息
      </div>
      <div
        style="
          margin-top: 10px;
          width: 100%;
          font-size: 12px;
          line-height: 20px;
          text-align: left;
        "
      >
        {{ single.prize }}
      </div>
    </div>
    <van-sticky v-if="single.addressList" position="bottom">
      <van-goods-action>
        <van-goods-action-icon icon="wap-home" text="首页" @click="back" />
        <van-goods-action-icon
          v-if="single.luckDraw"
          icon="point-gift"
          text="奖品记录"
          @click="prizeList"
        />
        <van-goods-action-button
          v-if="single.luckDraw"
          type="warning"
          text="登记抽奖"
          @click="luckDraw"
        />
        <van-goods-action-button
          v-if="!single.luckDraw"
          type="warning"
          text="联系企业"
          @click="phone(single.mobile)"
        />
      </van-goods-action>
    </van-sticky>

    <van-popup round v-model="luckDrawModal">
      <luck-draw ref="luck" @start="start" @end="end" v-bind:result="result" />
    </van-popup>

    <van-dialog
      theme="round-button"
      title="完善抽奖信息"
      v-model="infoModal"
      @confirm="submitInfo"
    >
      <van-cell-group inset>
        <!-- 输入任意文本 -->
        <van-field v-model="infoData.name" label="姓名" />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field
          v-model="infoData.mobile"
          type="tel"
          label="手机号"
          maxlength="11"
        />
        <van-field
          v-model="infoData.address"
          label="收货地址"
          type="textarea"
          rows="2"
        />
        <div style="font-size: 12px; color: #c5c8ce; float: right; margin: 4px">
          *个人信息一经确认不得修改
        </div>
      </van-cell-group>
    </van-dialog>
  </div>
</template>
<script>
import { ImagePreview } from 'vant';
import luckDraw from './luckdraw.vue';

export default {
  name: '',
  components: {
    luckDraw,
  },
  data() {
    return {
      name: '',
      single: {},

      luckDrawModal: false,
      infoModal: false,

      infoData: {
        name: '',
        mobile: '',
        address: '',
      },

      result: '<div style="text-align: center;line-height: 30px;font-weight: bold;color: red">抽奖中...</div>',
    };
  },
  methods: {
    back() {
      this.$router.replace({
        name: 'home',
      });
    },
    prizeList() {
      this.$router.push({
        name: 'prizeList',
      });
    },
    luckDraw() {
      this.infoModal = true;
    },
    start() {
      const prizeName = 'prizeName';
      const prizeDescription = 'prizeDescription';
      this.result = `<div style="text-align: center;line-height: 30px;font-weight: bold;color: red">${
        prizeName
      }</div><div style="text-align: center;line-height: 30px;font-size: 12px;">(${
        prizeDescription
      })</div>`;
    },
    end() {
      console.log('中奖啦！');
    },
    submitInfo() {
      this.luckDrawModal = true;
      // this.$refs.luck.initCanvas()
    },
    getImg(image) {
      ImagePreview({
        images: [image],
        showIndex: false,
      });
    },
    location(location) {
      window.location.href = `https://uri.amap.com/marker?poiid=${location}`;
    },
    phone(mobile) {
      window.location.href = `tel:${mobile}`;
    },
    web(url) {
      window.location.href = url;
    },
  },
  mounted() {
    this.name = this.$route.query.name;
    const data = require(`./../assets/json/${this.name}.json`);
    console.log(data);
    this.single = data;
  },
};
</script>
