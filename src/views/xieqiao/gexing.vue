<template>
  <div>
    <van-image
      v-for="i in 311"
      :key="i"
      width="100%"
      lazy-load
      :src="
        'https://www.sjzch.vip/xieqiaoPdfImg/gexing/gexing_' + (i < 11 ? '0' + (i - 1) : i - 1) + '.jpg'
      "
      @click="
        showPic([
          'https://www.sjzch.vip/xieqiaoPdfImg/gexing/gexing' + (i < 11 ? '0' + (i - 1) : i - 1) + '.jpg',
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
