<template>
  <div>
    <scratch-card
      elementId="scratch"
      width="300px"
      height="300px"
      :moveRadius="15"
      :ratio="0.5"
      :startCallback="startCallback"
      :clearCallback="clearCallbackUp"
      coverImg="https://liquid-games.oss-cn-beijing.aliyuncs.com/single_game_images/entertainment/scratch_card_mask_up.png"
      :result="result"
    >
    </scratch-card>
  </div>
</template>
<script>
import scratchCard from 'lzy-scratch-card';

export default {
  components: {
    scratchCard,
  },
  data() {
    return {
      result: '<div>2333333333</div>',
    };
  },
  methods: {
    startCallback() {
      console.log('start');
    },
    clearCallbackUp() {
      console.log('end');
    },
  },
};
</script>
