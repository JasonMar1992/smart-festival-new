<template>
  <div>
    <van-image
      v-for="i in 288"
      :key="i"
      width="100%"
      lazy-load
      :src="
        'https://www.hnmzs.cn/xieqiaoPdfImg/gongxing/gongxing_' +
        (i < 11 ? '0' + (i - 1) : i - 1) +
        '.jpg'
      "
      @click="
        showPic([
          'https://www.hnmzs.cn/xieqiaoPdfImg/gongxing/gongxing_' +
            (i < 11 ? '0' + (i - 1) : i - 1) +
            '.jpg',
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
