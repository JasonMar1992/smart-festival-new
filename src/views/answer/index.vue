
<template>
  <div style="text-align: center; height: 100vh; width: 100vw">
    <van-overlay :show="loading" @click.stop>
      <div style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        ">
        <van-loading size="60" />
      </div>
    </van-overlay>

    <div class="flex-v" :style="{
      width: '100%',
      height: '100%',
      'background-image': 'url(' + picUrl + ')',
      'background-repeat': 'no-repeat',
      'background-size': '100% 100%',
      '-moz-background-size': '100% 100%',
    }">
      <div style="padding-top: 55vh; padding-bottom: 5vh">
        <van-image class="buttonStyle" width="50%" :src="button" @click="go" />
      </div>

      <div style="color: #fef8dd; font-size: 14px">
        中共海宁市海洲街道委员会
      </div>
      <div style="color: #fef8dd; font-size: 14px">2022.12</div>
    </div>

    <van-dialog theme="round-button" :title="`答题${5 - chance + indexQ + 1}/${5}`" v-model="questionModal"
      @confirm="submitQ" :before-close="onBeforeClose">
      <div style="padding: 10px 20px">
        <div style="text-align: left;" v-if="question.type == 'multi'">【多选题】</div>
        <div style="text-align: left;" v-if="question.type == 'only'">【单选题】</div>
        <div style="text-align: left;font-size: 14px;">
          {{ question.title }}
        </div>
        <div v-if="question.type == 'multi'">
          <van-checkbox-group v-model="choose">
            <van-checkbox checked-color="#ee0a24" style="margin-top: 8px;font-size: 14px;"
              v-for="(item, i) in question.options" :key="i" :name="i">
              {{ item }}
            </van-checkbox>
          </van-checkbox-group>
        </div>
        <div v-if="question.type == 'only'">
          <van-radio-group v-model="answer">
            <van-radio checked-color="#ee0a24" style="margin-top: 8px; text-align: left;font-size: 14px;"
              v-for="(item, i) in question.options" :key="i" :name="i">
              {{ item }}
            </van-radio>
          </van-radio-group>
        </div>

        <div style="
            font-size: 12px;
            color: #909399;
            text-align: left;
            margin: 12px 4px;
          ">
          *每日可答5题，每题10分，得分到达30可参与抽奖
        </div>
      </div>
    </van-dialog>
  </div>
</template>
<style>
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
</style>
<script>
import { Toast, Notify, Dialog } from "vant";
import axios from "axios";
// import Vconsole from 'vconsole';
import wx from "weixin-js-sdk";
import picUrl from "../../assets/answer/answer_bg.jpg";
import button from "../../assets/answer/button.png";
import questions from "../../assets/answer/question.json";

// new Vconsole();

export default {
  name: "answer",
  data() {
    return {
      picUrl,
      button,
      questions,

      questionModal: false,

      chance: 0,

      question: {},

      randomList: [],

      indexQ: 0,

      answer: null,

      loading: false,
    };
  },
  methods: {
    onBeforeClose(action, done) {
      console.log(action);
      if (action === "confirm") {
        return done(false);
      }
      return done();
    },
    submitQ() {
      let result = false;
      if (this.question.type == "multi") {
        if (this.choose.length) {
          if (this.choose.toString() == this.question.answer.toString()) {
            result = true;
          }
        } else {
          Toast("请选择答案");
          return;
        }
      } else {
        if (this.answer != null) {
          if (this.answer == this.question.answer) {
            result = true;
          }
        } else {
          Toast("请选择答案");
          return;
        }
      }
      this.questionModal = false;

      this.loading = true;
      this.answer = null;
      axios({
        method: "post",
        url: this.ports.answer.score,
        data: {
          openid: window.localStorage.getItem("answer_openid"),
          score: result ? 10 : 0,
        },
      })
        .then((res) => {
          this.loading = false;

          this.indexQ++;
          if (result) {
            Toast("回答正确！");
            this.go();
          } else {
            Dialog.confirm({
              title: "回答错误",
              message:
                "正确答案：" + this.question.options[this.question.answer],
              confirmButtonText: "下一题",
            })
              .then(() => {
                this.go();
              })
              .catch(() => { });
          }
        })
        .catch((error) => {
          this.loading = false;
          console.log(error.response.data.msg);
          if (error.response.data.msg) {
            Toast.fail(error.response.data.msg);
          } else {
            Toast.fail("网络错误");
          }
        });
    },

    go() {
      if (this.chance > 0 && this.indexQ < this.chance) {
        this.question = this.questions[this.randomList[this.indexQ]];
        console.log(this.question);

        this.questionModal = true;
        return;
      } else {
        axios({
          method: "get",
          url: this.ports.answer.getScoreToday,
          params: {
            openid: window.localStorage.getItem("answer_openid"),
          },
        })
          .then((res) => {
            console.log(res);
            let score = 0;
            for (let i = 0; i < res.data.length; i++) {
              score += res.data[i].score;
            }
            console.log(score);

            if (score >= 30) {
              Dialog.confirm({
                title: "恭喜你",
                message: "今日答题总得分：" + score,
                confirmButtonText: "抽奖",
              })
                .then(() => {
                  // this.go();
                  console.log("23333");
                })
                .catch(() => { });
            } else {
              Dialog.alert({
                title: "很遗憾",
                message: `今日答题总得分：${score}，请明天继续加油`,
                confirmButtonText: "好的",
              }).then(() => { });
            }
          })
          .catch((error) => {
            console.log(error);
            Toast.fail("网络错误");
          });
      }
    },
    getOpenId(string) {
      axios({
        method: "get",
        url: this.ports.answer.getOpenId,
        params: {
          code: string,
        },
      })
        .then((res) => {
          console.log("open_id拿到了，记录一下");
          if (res.data.openid) {
            window.localStorage.setItem("answer_openid", res.data.openid);

            this.getTodayScore(res.data.openid);
          } else {
            Notify({ type: "warning", message: "授权失败" });
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.fail("授权失败");
        });
    },
    getTodayScore(openid) {
      axios({
        method: "get",
        url: this.ports.answer.getScoreToday,
        params: {
          openid: openid,
        },
      })
        .then((res) => {
          console.log(res);

          this.chance = 5 - res.data.length;
          console.log(this.chance);

          if (this.chance > 0) {
            //声明一个空数组

            var arr = [];

            while (arr.length < this.chance) {
              let randomNum = parseInt(Math.random() * this.questions.length);
              if (arr.indexOf(randomNum) == -1) {
                // this.arr.indexOf(num)若等于-1则证明arr这个数组里没有num这个随机数，因此可以放进这个数组里
                arr.push(randomNum);
              }
            }
            console.log(arr);
            this.randomList = arr;
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.fail("查询失败");
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
            const url = "https://www.sjzch.vip/answer";

            wx.updateAppMessageShareData({
              title: "海洲街道第三届楼宇社区邻里节 党的二十大精神 答题活动", // 分享标题
              desc: "快来跟我一起答题吧~", // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: "https://www.sjzch.vip/img/sharepic_answer.png", // 分享图标
              success() {
                // 设置成功
                console.log("配置验证成功");
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: "海洲街道第三届楼宇社区邻里节 党的二十大精神 答题活动", // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: "https://www.sjzch.vip/img/sharepic_answer.png", // 分享图标
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
    console.log(this.questions.length);

    var ua = navigator.userAgent.toLowerCase();
　　var isWeixin = ua.indexOf('micromessenger') != -1;
　　if (isWeixin) {
  if (window.localStorage.getItem("answer_openid")) {
      // 判断是否登录
      console.log("登录了");
      this.wxConfig();
      this.getTodayScore(window.localStorage.getItem("answer_openid"));
    } else {
      // 没登录则跳转到登录界面
      console.log("没登录");
      console.log(this.$route.query);
      if (this.$route.query.code) {
        console.log("是回掉来的，现在用code去换openid");
        if (this.$route.query.state && this.$route.query.state !== "STATE") {
          console.log("带了分享state");
        }
        this.getOpenId(this.$route.query.code);
        this.wxConfig();
      } else {
        const state = "STATE";
        console.log("不是回掉来的，现在去拿code");
        window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_ANSWER_URL}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
      }
    }
　　}else{ 
      console.log("当前不在微信浏览器中");
  window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_ANSWER_URL}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
     
　　};

    
  },
};
</script>
  