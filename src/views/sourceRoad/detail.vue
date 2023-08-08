<template>
    <div>
        <div :style="{
            width: '100vw',
            height: '100vh',
            'background-image': 'url(' + picUrl + ')',
            'background-repeat': 'no-repeat',
            'background-size': '100% 100%',
            '-moz-background-size': '100% 100%',
        }">
            <div style="overflow: scroll;height: 100%;">
                <div style="padding: 30px 12px;">
                    <div style="
            font-size: 20px;
            text-align: center;
            font-weight: 600;
            margin-bottom: 12px;
            color: black;
          ">
                        {{ single.title }}
                    </div>
                    <div v-for="(detail, j) in single.detail" :key="j">
                        <div v-if="detail.type == 'txt'"
                            style="border-radius: 8px;padding: 0 4px;margin-bottom: 4px;background-color: rgba(255, 255, 255, 0.6);">
                            <div style="
                        line-height: 26px;
                        font-weight: 500;
                        color: #323233;
                        " v-html="detail.value">
                            </div>
                        </div>
                        <van-image lazy-load v-else-if="detail.type == 'img'" style="width: 100%; margin-bottom: 4px;"
                            :src="require('./../../assets/sourceRoad/detail/' + detail.value)" fit="contain"
                            @click="getImg(require('./../../assets/sourceRoad/detail/' + detail.value))" />

                        <van-divider v-else-if="detail.type == 'tip'" content-position="left" dashed
                            style="border-color: #969799;color: black;font-size: 18px;font-weight: bold;">
                            {{ detail.value }}
                        </van-divider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast, ImagePreview } from 'vant';
import picUrl from '../../assets/sourceRoad/bg2.jpg';
export default {
    name: 'sourceDetail',
    data() {
        return {
            picUrl,

            single: {},
        };
    },
    methods: {
        getImg(image) {
            ImagePreview({
                images: [image],
                showIndex: false,
            });
        },
    },
    mounted() {
        let id = this.$route.params.id;
        const data = require("./../../assets/sourceRoad/list.json");
        console.log(data);
        this.single = data[id];
    },
};
</script>