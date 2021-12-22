<template>
  <div style="text-align: center">
    <div
      class="flex-v"
      :style="{
        'padding-top': '6vh',
        'background-image': 'url(' + rule1 + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
        'min-height': '600px',
      }"
    >
      <div class="txt-normal">
        从“制造”迈向“智造”<br />
        我们正以崭新的姿态积极投身变革浪潮<br />
        见所未见，以科技赋能制造<br />
        行所未至，以数字化加入未来<br />
        厨卫新势力、家居换新颜、穿搭潮流馆、有料研习社<br />
        四大主题馆<br />
        创新驱动，波澜始开<br />
        海宁企业用科技赋能企业转型<br />
        走在智能制造产业的前沿<br />
        让科技为生活助力<br />
        让“智造”为美好生活添彩<br />
        “科技+·智造未来”<br />
        2021海宁“智造”生活节<br />
        涵盖海宁智能制造各细分领域<br />
        打造一个为广大市民展现充满未来科技感的美好生活
      </div>
      <div
        style="
          background: #051a41;
          margin-left: 5%;
          margin-right: 5%;
          margin-top: 20px;
          height: 100px;
          padding: 10px;
          border-radius: 5px;
        "
      >
        <div
          style="
            font-size: 16px;
            text-align: left;
            color: #fff;
            line-height: 30px;
            font-weight: bold;
            color: #dabc95;
          "
        >
          新闻报道
          <div
            style="font-size: 12px; color: #eedfc4"
            @click="goLink('https://mp.weixin.qq.com/s/xh9YCq7_1keQR8aRLJicCw')"
          >
            <van-icon name="label" color="#EEDFC4" style="margin-right: 4px" />
            全球首个！这个实力研发中心“落户”海宁！
          </div>
          <div
            style="font-size: 12px; color: #eedfc4"
            @click="goLink('https://mp.weixin.qq.com/s/R__It6Jl5lAOqQ22knWfSA')"
          >
            <van-icon name="label" color="#EEDFC4" style="margin-right: 4px" />
            海宁这杯“茶”，好多人爱喝！有何奥秘→
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex-v"
      :style="{
        'background-image': 'url(' + rule2 + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
        'min-height': '800px',
      }"
    >
      <div
        style="
          font-size: 10px;
          text-align: center;
          color: #fff;
          line-height: 30px;
        "
      >
        【主办单位】<br />
        海宁市经济和信息化局<br />
        海宁市商务局<br />
      </div>
      <div class="txt-small">
        【承办单位】<br />
        许村镇<br />
        长安镇、高新区<br />
        周王庙镇<br />
        盐官镇<br />
        丁桥镇<br />
        斜桥镇<br />
        袁花镇<br />
        黄湾镇<br />
        经济开发区、海昌街道<br />
        马桥街道<br />
      </div>
      <div class="txt-small">
        【执行单位】<br />
        海宁传媒集团有限公司
      </div>
      <div class="txt-small">
        【参展企业】<br />
        厨卫新势力<br />
        火星人厨具股份有限公司<br />
        浙江优格实业有限公司<br />
        浙江潮邦厨具电器有限公司<br />
        浙江乐瑞厨卫设备有限公司<br />
        浙江爱尔卡厨卫科技有限公司<br />
        浙江世纪豪门家居科技有限公司<br />
        海宁市倍世环保科技有限公司<br />
      </div>
      <div class="txt-small">
        家居换新颜<br />
        浙江海利得地板有限公司<br />
        浙江海象新材料股份有限公司<br />
        浙江川洋家私有限公司<br />
        浙江澳森实业有限公司<br />
        浙江心梦享家居有限公司<br />
        嘉兴瑞宝集成家居有限公司<br />
        海宁市布妍诚纺织有限公司<br />
        海宁欧莎家具有限公司<br />
        海宁市摩卡纺织有限公司<br />
        海宁市玉龙布艺有限公司<br />
        海宁市飘然纺织有限公司<br />
        海宁市德利家具有限公司<br />
        海宁市海霖智慧家居股份有限公司<br />
      </div>
      <div class="txt-small">
        穿搭潮流馆<br />
        安正时尚集团股份有限公司<br />
        浙江卡拉扬集团有限公司<br />
        浙江针永体育用品有限公司<br />
        浙江龙仕达纺织科技股份有限公司<br />
        浙江上格时装股份有限公司<br />
        浙江斯曼尔针织股份有限公司<br />
        浙江汉保利罗针织股份有限公司<br />
        浙江峰佳针织有限公司<br />
        海宁艾她服饰有限公司<br />
        海宁亿登服饰有限公司<br />
        海宁汉德袜业有限公司<br />
        海宁旭晟服装有限公司<br />
        海宁市一铭服饰有限公司<br />
      </div>
    </div>
    <div
      class="flex-v"
      :style="{
        'background-image': 'url(' + rule3 + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
        'min-height': '600px',
      }"
    >
      <div
        style="
          padding-top: 10px;
          font-size: 10px;
          text-align: center;
          color: #fff;
          line-height: 30px;
        "
      >
        有料研习社<br />
        林肯电梯（中国）有限公司<br />
        浙江星驰汽车有限公司<br />
        浙江群大畜牧养殖有限公司<br />
        浙江正星健身器有限公司<br />
        浙江南化生物科技股份有限公司<br />
        浙江佰恩氏食品有限公司<br />
        杭州鐵三角科技有限公司<br />
        海宁纪亨保健食品有限公司<br />
      </div>
      <div class="txt-small">
        【游戏规则】<br />
        助力抽奖<br />
        邀请2位朋友助力并打开链接，即可参与抽奖，每人每天可抽奖2次；<br />
        企业登记抽奖<br />
        部分企业展馆中有抽奖互动，登记相关信息即可参与抽奖。兑奖时间：中奖之日起——2021年12月31日12:00，根据中奖信息领取奖品。<br />
        产品价格为指导价，最终以厂家为准。<br />
        最终解释权归主办方所有。<br />
      </div>
    </div>
  </div>
</template>
<style scoped>
.txt-small {
  margin-top: 10px;
  font-size: 10px;
  text-align: center;
  color: #fff;
  line-height: 30px;
  padding: 0px 12px;
}
.txt-normal {
  margin-top: 10px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  line-height: 30px;
  padding: 0px 12px;
}
</style>
<script>
import rule1 from '../assets/images/rule1.png';
import rule2 from '../assets/images/rule2.png';
import rule3 from '../assets/images/rule3.jpg';

export default {
  name: 'rule',
  data() {
    return {
      rule1,
      rule2,
      rule3,
    };
  },
  methods: {
    goLink(url) {
      window.location.href = url;
    },
  },
  mounted() {},
};
</script>
