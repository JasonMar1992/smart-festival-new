<template>
  <div
    :style="{
      width: '100vw',
      height: '100vh',
      'background-image': 'url(' + picUrl + ')',
      'background-repeat': 'no-repeat',
      'background-size': '100% 100%',
      '-moz-background-size': '100% 100%',
      'text-align': 'center',
    }"
  >
    <div
      style="
        position: absolute;
        top: 40vh;
        width: 100vw;
        padding-left: 15vw;
        padding-right: 15vw;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
      "
    >
      <van-image class="buttonStyle" width="30vw" :src="button" @click="go" />
      <van-image width="30vw" :src="rule" @click="showRule" />
    </div>

    <van-dialog v-model="ruleDialog" width="90%">
      <template slot="title">
        <div style="font-size: 22px; padding-bottom: 10px">《捕鱼达人》线上小游戏</div>
      </template>
      <div style="height: 60vh; overflow: scroll; padding: 2vw 4vw; text-align: start">
        <div class="rule-tag">1、游戏规则</div>
        <div class="rule-title">玩法介绍</div>
        <div class="rule-detail">
          ①手指点击屏幕中海洋区域内任意位置，炮筒即可向该位置方向发射炮弹
        </div>
        <div class="rule-detail">②每次游戏开始拥有50发炮弹，打完则游戏结束</div>
        <div class="rule-detail">③炮弹击中目标并成功捕捉，可累计相应分值</div>
        <div class="rule-detail">④游戏结束后，分数超过800方可参与抽奖</div>
        <div class="rule-title">分值介绍</div>
        <div class="rule-detail">
          <div class="rule-detail">红色小鱼。分值：20分；捕捉：击中1次</div>
          <div class="rule-detail">小丑鱼。分值：25分；捕捉：击中1次</div>
          <div class="rule-detail">蓝色小鱼。分值：25分；捕捉：击中1次</div>
          <div class="rule-detail">绿色小鱼。分值：30分；捕捉：击中1次</div>
          <div class="rule-detail">小龙虾。分值：60分；捕捉：击中2次</div>
        </div>

        <div class="rule-tag">2、奖品设置</div>
        <div>
          <div class="rule-detail">现金消费券5元</div>
          <div class="rule-detail">现金消费券10元</div>
          <div class="rule-detail">车厘子优惠券50元</div>
          <div class="rule-detail">烧野饭优惠券30元</div>
        </div>
        <div class="rule-tag">3、活动时间</div>
        <div class="rule-detail">2024年5月20日-5月25日</div>
        <div class="rule-tag">4、使用范围</div>
        <div class="rule-detail">可用于开幕式当天渔樱集市、营地咖啡、烧烤、烧野饭等。</div>
        <div class="rule-detail">
          其中宁蓝果业提供的满100元减50元优惠券，可在宁蓝果业基地购买车厘子时抵用。使用时间：5月26日-6月3日9:00-17:00。地址：海宁市南圹路（南漾村委往北100米）宁蓝果业科技有限公司，联系电话：13758313766）。
        </div>
        <div class="rule-detail">
          其中南漾村Nany
          Camp垂钓露营提供满300元减30元野炊优惠券。截止日期：2024年12月31日。地址：地图导航海宁市硖石街道南漾村南漾水库，联系电话：13906731031。
        </div>
      </div>
    </van-dialog>
  </div>
</template>
<script>
import picUrl from "../../assets/bydr/hbg.jpg";
import button from "../../assets/bydr/btn.png";
import rule from "../../assets/bydr/rule.png";
export default {
  name: "lobster",
  data() {
    return {
      picUrl,
      button,
      rule,

      ruleDialog: false,
    };
  },
  methods: {
    go() {
      let old = localStorage.getItem("fishGamePlayed");

      if (old) {
        window.location.href = "https://www.hnmzs.cn/fish-game";
      } else {
        localStorage.setItem("fishGamePlayed", "true");
        this.showRule();
      }
    },
    showRule() {
      this.ruleDialog = true;
    },
  },
};
</script>
<style scoped>
.rule-tag {
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
}

.rule-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
}

.rule-detail {
  font-size: 13px;
  line-height: 20px;
  color: gray;
}
</style>
