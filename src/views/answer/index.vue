
<template>
  <div style="text-align: center; height: 100vh; width: 100vw">
    <van-overlay :show="loading" @click.stop>
      <div style="display: flex;align-items: center;justify-content: center;height: 100%;">
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
      textAlign: 'center'
    }">
      <div style="padding-top: 53vh; padding-bottom: 2vh">
        <van-image class="buttonStyle" width="55%" :src="button" @click="go" />
      </div>

      <div style="padding: 0 15% 5vh 15%;">
        <van-row>
          <van-col span="8">
            <div @click="myScore" style="color: #fef8dd;text-decoration:underline;">
              我的成绩
            </div>
          </van-col>
          <van-col span="8">
            <div @click="rank" style="color: #fef8dd;text-decoration:underline;">
              排行榜
            </div>
          </van-col>
          <van-col span="8">
            <div @click="rule" style="color: #fef8dd;text-decoration:underline;">
              活动规则
            </div>
          </van-col>
        </van-row>
      </div>

      <div style="color: #fef8dd; font-size: 14px">
        中共海宁市海洲街道委员会
      </div>
      <div style="color: #fef8dd; font-size: 14px">2022.12</div>
    </div>

    <van-dialog theme="round-button" :title="`答题${indexQ + 1}/${5}`" v-model="questionModal" @confirm="submitQ"
      :before-close="onBeforeClose">
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

        <div style="font-size: 12px; color: #909399; text-align: left; margin: 12px 4px;">
          *请完成5道题目，中途退出成绩无效
        </div>
      </div>
    </van-dialog>

    <van-dialog theme="round-button" title="完善个人信息" v-model="infoModal" @confirm="submitInfo"
      :before-close="onBeforeInfoClose">
      <van-form ref="form" validate-first>
        <!-- 输入任意文本 -->
        <van-field v-model="infoData.realname" label="姓名" maxlength="10" required
          :rules="[{ required: true, message: '请填写姓名' }]" />
        <!-- 输入手机号，调起手机号键盘 -->
        <van-field v-model="infoData.mobile" type="tel" label="手机号" maxlength="11" required
          :rules="[{ pattern, message: '手机号格式不对' }]" />
        <div style="font-size: 12px;color: #c5c8ce;text-align: right;margin: 4px 18px;">
          *个人信息一经确认不得修改
        </div>
      </van-form>
    </van-dialog>

    <van-popup v-model="myscore" round style="height: 380px; width: 80%;background-color: #DE3035;padding:12px">
      <div style="line-height: 30px;color: #F3F2B0;font-size: 20px;font-weight: 600;">
        我的成绩：{{ scoreAmount }}分</div>
      <div style="line-height: 30px;color: #fff;font-size: 12px;opacity: 0.7;">
        姓名：{{ (infoDetail.realname ? infoDetail.realname : '未填写') }}</div>
      <van-row v-for="(item, i) in scoreList" :key="i" style="color: #fef8dd;padding-top: 10px">
        <van-col span="8" style="font-size: 12px">
          {{ moment(item.create_time).format('YYYY-MM-DD') }}
        </van-col>
        <van-col span="16" style="font-size: 12px">
          {{ item.status == 'FINISHED' ? `成绩：${item.score}分；用时：${timeFormat(item.time)}` : '未完成' }}
        </van-col>
      </van-row>
    </van-popup>

    <van-popup v-model="rankModal" round style="height: 380px; width: 80%;background-color: #DE3035;padding:12px">
      <van-row v-for="(item, i) in rankList" :key="i" style="color: #fef8dd;padding-top: 10px">
        <van-col span="3" style="font-size: 12px">
          第{{ i + 1 }}名
        </van-col>
        <van-col span="3" style="font-size: 12px">
          {{ item.realname }}
        </van-col>
        <van-col span="18" style="font-size: 12px">
          {{ `成绩：${item.score}分；用时：${timeFormat(item.duration)}` }}
        </van-col>
      </van-row>
    </van-popup>
  </div>
</template> 
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
</style>
<script>
import { Toast, Notify, Dialog } from "vant";
import moment from "moment";
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

import axios from "axios";
// import Vconsole from 'vconsole';
import wx from "weixin-js-sdk";
import picUrl from "../../assets/answer/answer_bg.jpg";
import button from "../../assets/answer/button.png";

// new Vconsole();

export default {
  name: "answer",
  data() {
    return {
      picUrl,
      button,
      moment,

      pattern: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,

      loading: false,

      info: false,

      answerId: null,
      questionList: [],
      score: 0,
      indexQ: 0,
      answer: null,

      questionModal: false,

      question: {},

      infoData: {
        realname: '',
        mobile: '',
      },
      infoModal: false,

      ruleText: "1.用户首次进入游戏需填写自身的真实信息。\n2.用户每日可以参与答题3次，每次随机抽取5道题目，每题计10分。\n3.连续参与8天后，按照累计积分排名，如有分数相同，则以总答题时长排名。\n4.每次答题需完成所有题目（5题），否则成绩将不计入总分。\n\n答题时间：\n2022年12月7日-2022年12月13日\n领奖时间：\n2022年12月15日-2022年12月22日（工作日时间）\n领取地点：\n海宁市传媒中心（海昌南路509号）13楼1303办公室\n奖项设置：\n特等奖：小米12手机（1名）\n一等奖：小米微波烤箱（3名）\n二等奖：小米水离子护发吹风机（5名）\n三等奖：小米小爱音响（5名）\n优胜奖：小米充电宝（20名）",

      myscore: false,
      scoreList: [],

      scoreAmount: 0,

      rankModal: false,
      rankList: [],

      infoDetail: {
        realname: null,
        mobile: null,
      }
    };
  },
  methods: {
    timeFormat(value) {
      if (value < 100) {
        return `${value}秒`;
      }
      if (value >= 100 && value < 3600) {
        return moment.duration(value, "seconds").format("mm分ss秒");
      }
      if (value >= 3600) {
        return moment.duration(value, "seconds").format("HH:mm:ss");
      }
    },

    rank() {
      axios({
        method: 'get',
        url: this.ports.answer.getRank,
        params: {
          openid: window.localStorage.getItem('answer_openid'),
        },
      })
        .then((res) => {
          this.rankList = res.data;
          this.rankModal = true;
        })
        .catch((error) => {
          console.log(error);
          Toast.fail('查询失败');
        });
    },

    myScore() {
      // if (!this.info) {
      //   console.log('请完善信息');
      //   this.infoModal = true;
      //   return;
      // }
      axios({
        method: 'get',
        url: this.ports.answer.getScore,
        params: {
          openid: window.localStorage.getItem('answer_openid'),
        },
      })
        .then((res) => {
          this.scoreList = res.data;
          this.myscore = true;
          this.scoreAmount = 0;
          for (let i = 0; i < res.data.length; i++) {
            this.scoreAmount += res.data[i].score;
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.fail('查询失败');
        });
    },
    onBeforeInfoClose(action, done) {
      if (action === 'confirm') {
        return done(false);
      }
      // 重置表单校验
      this.$refs.form.resetFields();
      this.infoData = {
        realname: '',
        mobile: '',
      };
      return done();
    },
    submitInfo() {
      this.$refs.form
        .validate()
        .then(() => {
          // 验证通过
          console.log('验证通过');
          axios({
            method: 'post',
            url: this.ports.answer.updateUserInfo,
            data: {
              ...this.infoData,
              openid: window.localStorage.getItem('answer_openid'),
            },
          })
            .then((res) => {
              console.log(res.data);
              if (res.data.success) {
                Toast.success(res.data.msg);
                this.info = true;
                this.infoModal = false;
              } else {
                Toast.fail(res.data.msg);
              }
            })
            .catch((error) => {
              console.log(error);
              Toast.fail('操作失败');
            });
        })
        .catch(() => {
          // 验证失败
          console.log('验证失败');
          this.infoModal = true;
        });
    },

    rule() {
      Dialog.alert({
        title: '活动规则',
        message: this.ruleText,
        messageAlign: "left",
        confirmButtonText: '我知道了',
      }).then(() => {
        // on close
      });
    },

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

      if (result) {
        this.score += 10;
        Toast.success("回答正确！");
        this.next();
      } else {
        Dialog.confirm({
          title: "回答错误",
          message:
            "正确答案：" + this.question.options[this.question.answer],
          confirmButtonText: "下一题",
        })
          .then(() => {
            this.next();
          })
          .catch(() => { });
      }
    },
    next() {
      this.indexQ++;
      this.answer = null;
      if (this.indexQ < this.questionList.length) {
        this.question = this.questionList[this.indexQ];
        this.questionModal = true;
      } else {
        // 答题完成
        axios({
          method: "post",
          url: this.ports.answer.finishQuestion,
          data: {
            openid: window.localStorage.getItem("answer_openid"),
            id: this.answerId,
            score: this.score,
          },
        })
          .then((res) => {
            Toast.success("答题完成");
          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            if (error.response.data.msg) {
              Toast.fail(error.response.data.msg);
            } else {
              Toast.fail("网络错误");
            }
          });
      }
    },

    go() {
      if (!this.info) {
        Dialog.alert({
          title: '活动规则',
          message: this.ruleText,
          messageAlign: "left",
          confirmButtonText: '我知道了',
        }).then(() => {
          // on close
          this.infoModal = true;
        });
      } else {
        this.loading = true;
        axios({
          method: "post",
          url: this.ports.answer.addQuestion,
          data: {
            openid: window.localStorage.getItem("answer_openid"),
          },
        })
          .then((res) => {
            this.loading = false;
            this.answerId = res.data.id;
            this.questionList = res.data.questions;

            this.answer = null;
            this.indexQ = 0;
            this.question = this.questionList[this.indexQ];
            this.score = 0;
            this.questionModal = true;

          })
          .catch((error) => {
            this.loading = false;
            console.log(error);
            if (error.response.data.msg) {
              Toast.fail(error.response.data.msg);
            } else {
              Toast.fail("网络错误");
            }
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

            this.getSelfInfo(res.data.openid);
          } else {
            Notify({ type: "warning", message: "授权失败" });
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.fail("授权失败");
        });
    },
    getSelfInfo(openid) {
      axios({
        method: "get",
        url: this.ports.answer.getSelfInfo,
        params: {
          openid: openid,
        },
      })
        .then((res) => {
          console.log(res);
          this.infoDetail = res.data;
          if (res.data.realname && res.data.mobile) {
            this.info = true;
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

    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
      if (window.localStorage.getItem("answer_openid")) {
        // 判断是否登录
        console.log("登录了");
        this.wxConfig();
        this.getSelfInfo(window.localStorage.getItem("answer_openid"));
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
    } else {
      console.log("当前不在微信浏览器中");
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_ANSWER_URL}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;

    };


  },
};
</script>
  