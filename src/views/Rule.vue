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
        'min-height': '800px',
      }"
    >
      <div
        style="
          margin-top: 10px;
          font-size: 12px;
          text-align: center;
          color: #fff;
          line-height: 30px;
        "
      >
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
    </div>
    <div
      class="flex-v"
      :style="{
        'background-image': 'url(' + rule2 + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
        'min-height': '600px',
      }"
    ></div>
    <div
      class="flex-v"
      :style="{
        'background-image': 'url(' + rule3 + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
        'min-height': '600px',
      }"
    ></div>
  </div>
</template>
<script>
import rule1 from '../assets/images/rule1.png';
import rule2 from '../assets/images/rule2.png';
import rule3 from '../assets/images/rule3.jpg';

export default {
  name: 'check',
  data() {
    return {
      rule1,
      rule2,
      rule3,
    };
  },
  methods: {},
  mounted() {},
};
</script>
