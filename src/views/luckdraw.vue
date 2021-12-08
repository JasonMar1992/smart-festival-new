<template>
  <div class="container">
    <scratch-card
      elementId="scratch"
      class="shadow"
      width="176px"
      height="60px"
      :moveRadius="15"
      :ratio="0.5"
      :startCallback="startCallback"
      :clearCallback="clearCallbackUp"
      :coverImg="shadow"
      :result="result"
    >
    </scratch-card>
  </div>
</template>
<script>
import scratchCard from 'lzy-scratch-card';
import shadow from '../assets/images/shadow.jpg';

export default {
  name: 'luckdraw',
  props: {
    result: {
      type: String,
    },
  },
  components: {
    scratchCard,
  },
  data() {
    return { shadow };
  },
  mounted() {},
  methods: {
    startCallback() {
      console.log('start');
      this.$emit('start');
    },
    clearCallbackUp() {
      console.log('end');
      this.$emit('end');
    },
  },
};
</script>
<style scoped>
.container {
  background: url("./../assets/images/card.jpg");
  width: 319px;
  height: 297px;
  margin: 0 auto;
}
.shadow {
  margin-top: 196px;
  position: fixed;
  left: 50%;
  margin-left: -90px;
}
.result {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
