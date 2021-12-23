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
      <div style="font-size: 12px; text-align: center; margin: 8px 0px">
        *兑奖时间：中奖之日起至2022年1月15日12:00
      </div>
      <div style="background: #ecffff">
        <div
          v-for="(item, i) in list"
          :key="i"
          :style="{
            'background-image': 'url(' + awardbg + ')',
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
            '-moz-background-size': '100% 100%',
            height: '100px',
            width: '100%',
          }"
        >
          <van-row
            style="
              margin: 2px 28px;
              padding: 0px 4px;
              color: #515a6e;
              font-size: 12px;
              text-align: left;
              height: 100px;
            "
          >
            <van-col span="10">
              <div
                style="
                  color: red;
                  text-align: center;
                  line-height: 20px;
                  padding-top: 30px
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
                  line-height: 40px;
                  font-size: 12px;
                  font-weight: bold;
                  margin-top: 10px;
                "
              >
                <div>{{ item.shop_name }}</div>
                <van-tag type="primary">{{ item.description }}</van-tag
                ><van-tag
                  style="margin-left: 10px"
                  @click="
                    if (item.status == 'PENDING') {
                      qrcode(item);
                    }
                  "
                  type="success"
                  >{{ statusFormate(item.status) }}</van-tag
                >
              </div></van-col
            >
          </van-row>
        </div>
      </div>
    </div>
    <van-popup v-model="showQrcode" style="width: 70%"
      ><div class="qrcode" style="padding: 10px">
        <div
          style="margin: 0 auto; width: 200px; height: 200px; display: none"
          ref="qrCodeUrl"
          id="qrCodeDiv"
        ></div>
        <div style="margin: 0 auto; width: 200px; height: 200px">
          <img :src="QRUrl" style="width: 100%; height: 100%" />
        </div></div
    ></van-popup>
  </div>
</template>
<script>
import axios from "axios";
import QRCode from "qrcodejs2";
import picUrl from "../assets/images/bg.jpg";
import awardbg from "../assets/images/awardbg.png";

export default {
  name: "prizeList",
  data() {
    return {
      picUrl,
      awardbg,

      name: "",
      mobile: "",
      address: "",

      list: [],

      showQrcode: false,
      QRUrl: null,
    };
  },
  methods: {
    qrcode(prize) {
      this.showQrcode = true;
      const url = `https://www.sjzch.vip/check?shopCode=${
        prize.shop_id
      }&mobile=${window.localStorage.getItem("mobile")}`;
      const self = this;
      setTimeout(() => {
        self.$refs.qrCodeUrl.innerHTML = "";
        const qrcode = new QRCode(self.$refs.qrCodeUrl, {
          text: url, // 需要转换为二维码的内容
          width: 200,
          height: 200,
        });

        const canvas = document.getElementsByTagName("canvas")[0];
        const imgSrc = canvas.toDataURL("image/png");
        self.QRUrl = imgSrc;
      }, 100);
    },
    statusFormate(string) {
      let result = "";
      // eslint-disable-next-line default-case
      switch (string) {
        case "PENDING":
          result = "兑奖码";
          return result;
        case "AWARD":
          result = "已兑奖";
          return result;
      }
    },
    getSelfInfo() {
      axios({
        method: "get",
        url: this.ports.business.getSelfInfo,
        params: {
          openid: window.localStorage.getItem("open_id"),
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
        method: "get",
        url: this.ports.business.getMyAwards,
        params: {
          openid: window.localStorage.getItem("open_id"),
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
