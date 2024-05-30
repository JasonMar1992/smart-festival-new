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
        top: 44vh;
        width: 100vw;
        padding-left: 15vw;
        padding-right: 15vw;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
      "
    >
      <van-image width="30vw" :src="button" @click="go" />
      <van-image width="30vw" :src="rule" @click="showRule" />
    </div>

    <van-dialog v-model="ruleDialog" width="90%">
      <template slot="title">
        <div style="font-size: 22px; padding-bottom: 10px">《“渔”你相遇在斜西》线上小游戏</div>
      </template>
      <div style="height: 60vh; overflow: scroll; padding: 2vw 4vw; text-align: start">
        <div class="rule-tag">1、游戏规则</div>
        <div class="rule-title">玩法介绍</div>
        <div class="rule-detail">①手指点击屏幕中海洋区域内任意位置，即可向该位置方向发射鱼钩</div>
        <div class="rule-detail">②每次游戏开始拥有3发鱼钩，打完则游戏结束</div>
        <div class="rule-detail">③鱼钩勾中目标并成功捕捉，可累计相应分值</div>
        <div class="rule-detail">④游戏结束后，分数超过100方可参与抽奖</div>
        <div class="rule-title">分值介绍</div>
        <div class="rule-detail">
          <div class="rule-detail">小型鱼。分值：500分</div>
          <div class="rule-detail">中型鱼。分值：300分</div>
          <div class="rule-detail">大型鱼。分值：100分</div>
        </div>

        <div class="rule-tag">2、奖品设置</div>
        <div>
          <div class="rule-detail">活动共持续3天，每天抽出2个鱼形抱枕和N个0.5-0.8元现金红包</div>
        </div>
        <div class="rule-tag">3、线上游戏时间</div>
        <div class="rule-detail">2024年5月31日-6月2日</div>
        <div class="rule-tag">4、奖品领取时间</div>
        <div class="rule-detail">2024年6月5日-6月6日（9：00-12:00  14:00-17:00）</div>
        <div class="rule-tag">5、奖品领取地点</div>
        <div class="rule-detail">海宁市传媒中心13楼街镇运营中心（海昌南路509号）</div>
      </div>
    </van-dialog>
  </div>
</template>
<script>
import picUrl from "../../assets/hookfish/hook_bg.jpg";
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
      let old = localStorage.getItem("hookGamePlayed");

      if (old) {
        window.location.href = "https://www.hnmzs.cn/hook-game";
      } else {
        localStorage.setItem("hookGamePlayed", "true");
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
