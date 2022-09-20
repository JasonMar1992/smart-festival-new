<template>
  <div>
    <van-image
      v-for="i in 25"
      :key="i"
      width="100%"
      lazy-load
      :src="
        'https://www.sjzch.vip/xieqiaoPdfImg/ding/ding_' + (i < 10 ? '0' + i : i) + '.jpg'
      "
      @click="
        showPic([
          'https://www.sjzch.vip/xieqiaoPdfImg/ding/ding_' + (i < 10 ? '0' + i : i) + '.jpg',
        ])
      "
    />
  </div>
</template>
<script>
import Vue from 'vue';
import { Lazyload, ImagePreview } from 'vant';

Vue.use(Lazyload);

export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    showPic(list) {
      ImagePreview(list);
    },
  },
};
</script>
