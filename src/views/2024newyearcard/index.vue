<template>
  <div style="text-align: center; line-height: 0; background-color: #d61618; min-height: 100vh">
    <div style="position: absolute; width: 100vw">
      <van-image width="100%" :src="picUrl" />
    </div>
    <div style="position: absolute; top: 90vw; width: 100vw">
      <van-image class="buttonStyle" width="32%" :src="button" @click="detail" />
    </div>
    <van-popup v-model="show">
      <div style="width: 90vw; height: 126vw">
        <div style="position: absolute">
          <van-image width="90vw" height="126vw" :src="mail" fit="fill" />
        </div>
        <div style="position: absolute; padding: 54vw 10vw; z-index: 9">
          <div
            style="
              font-size: 16px;
              line-height: 28px;
              color: #ba0e0a;
              letter-spacing: 1px;
              font-weight: 500;
            "
          >
            尊敬的<span
              @click="infoModal = true"
              style="margin-left: 4px; padding-left: 2px; border-bottom: 2px #ba0e0a solid"
              >{{ name }}
              <van-icon name="edit" size="22" @click="infoModal = true" />
            </span>
          </div>
        </div>
      </div>
    </van-popup>
    <div
      v-show="show"
      style="position: absolute; top: calc(50vh - 78vw); right: 2vw; z-index: 9999"
    >
      <van-image class="shake" width="19vw" :src="denglong" />
    </div>
    <div v-show="show" style="position: absolute; top: calc(50vh + 36vw); left: 2vw; z-index: 9999">
      <van-image class="shake" width="18vw" :src="denglong" />
    </div>

    <van-dialog
      theme="round-button"
      title="我要送祝福"
      v-model="infoModal"
      @confirm="submitInfo"
      :before-close="onBeforeInfoClose"
      show-cancel-button
    >
      <van-form ref="form" validate-first style="padding: 0 10px">
        <!-- 输入任意文本 -->
        <van-field
          v-model="infoData.realname"
          label="姓名"
          maxlength="6"
          required
          clearable
          :rules="[{ required: true, message: '请填写姓名' }]"
          placeholder="点击输入姓名"
        />
      </van-form>
    </van-dialog>
  </div>
</template>
<script>
import axios from "axios";
import wx from "weixin-js-sdk";
import picUrl from "../../assets/2024newyearcard/bg.jpg";
import button from "../../assets/2024newyearcard/btn.png";
import mail from "../../assets/2024newyearcard/mail.jpg";
import denglong from "../../assets/2024newyearcard/denglong.png";
export default {
  name: "shanghai2024card",
  data() {
    return {
      picUrl,
      button,
      mail,
      denglong,

      name: "请填写",

      infoModal: false,
      infoData: {
        realname: "",
      },

      show: false,
    };
  },
  methods: {
    detail() {
      this.show = true;
    },
    urlencode(str) {
      str = (str + "").toString();
      return encodeURIComponent(str)
        .replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A")
        .replace(/%20/g, "+");
    },
    onBeforeInfoClose(action, done) {
      if (action === "confirm") {
        return done(false);
      }
      // 重置表单校验
      this.$refs.form.resetValidation();
      this.infoData = {
        realname: "",
      };
      return done();
    },
    submitInfo() {
      this.$refs.form
        .validate()
        .then(() => {
          // 验证通过
          console.log("验证通过");
          this.name = this.infoData.realname;
          this.infoModal = false;
          this.wxConfig();
        })
        .catch(() => {
          // 验证失败
          console.log("验证失败");
          this.infoModal = true;
        });
    },
    wxConfig() {
      axios({
        method: "get",
        url: this.ports.business.getWechatSign,
        params: {
          url: window.location.href.split("#")[0],
        },
      })
        .then((res) => {
          console.log(res.data);

          wx.config({
            // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            debug: false,
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"], // 必填，需要使用的JS接口列表
          });
          wx.error((result) => {
            // config 信息验证失败会执行error函数,如签名过期导致验证失败
            // 具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
            console.log(`配置验证失败: ${result.errMsg}`);
          });

          wx.ready(() => {
            const url = location.origin + "/2024card/" + this.urlencode(this.name);

            wx.updateAppMessageShareData({
              title: "海宁驻沪工作部给您拜年啦！", // 分享标题
              desc: "与潮共舞，共建共享共赢，龙年行大运", // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: "https://www.hnmzs.cn/img/sharepic_2024card.jpg", // 分享图标
              success() {
                // 设置成功
                console.log("配置验证成功");
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: "海宁驻沪工作部给您拜年啦！", // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: "https://www.hnmzs.cn/img/sharepic_2024card.jpg", // 分享图标
              success() {
                // 设置成功
                console.log("配置验证成功");
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.name = decodeURI(this.$route.params.name);
    this.wxConfig();
  },
};
</script>

<style scoped>
.buttonStyle {
  -webkit-animation-name: scaleDraw;
  /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out;
  /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite;
  /*动画播放的次数*/
  -webkit-animation-duration: 5s;
}

@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1);
    /*开始为原始大小*/
  }

  25% {
    transform: scale(0.9);
    /*放大1.1倍*/
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(0.9);
  }
}

.shake {
  animation: shake 3s linear infinite;
  /* -webkit-animation: shake 5s linear infinite; */
}

@keyframes shake {
  0% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
  }
  8% {
    transform: rotate(4deg);
    transform-origin: 50% 0;
  }
  12% {
    transform: rotate(6deg);
    transform-origin: 50% 0;
  }
  18% {
    transform: rotate(8deg);
    transform-origin: 50% 0;
  }
  22% {
    transform: rotate(10deg);
    transform-origin: 50% 0;
  }
  28% {
    transform: rotate(8deg);
    transform-origin: 50% 0;
  }
  32% {
    transform: rotate(6deg);
    transform-origin: 50% 0;
  }
  38% {
    transform: rotate(4deg);
    transform-origin: 50% 0;
  }
  42% {
    transform: rotate(2deg);
    transform-origin: 50% 0;
  }
  48% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
  }
  52% {
    transform: rotate(-2deg);
    transform-origin: 50% 0;
  }
  58% {
    transform: rotate(-4deg);
    transform-origin: 50% 0;
  }
  62% {
    transform: rotate(-6deg);
    transform-origin: 50% 0;
  }
  68% {
    transform: rotate(-8deg);
    transform-origin: 50% 0;
  }
  72% {
    transform: rotate(-10deg);
    transform-origin: 50% 0;
  }
  78% {
    transform: rotate(-8deg);
    transform-origin: 50% 0;
  }
  82% {
    transform: rotate(-6deg);
    transform-origin: 50% 0;
  }
  88% {
    transform: rotate(-4deg);
    transform-origin: 50% 0;
  }
  96% {
    transform: rotate(-2deg);
    transform-origin: 50% 0;
  }
  100% {
    transform: rotate(0deg);
    transform-origin: 50% 0;
  }
}
</style>
