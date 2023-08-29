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
                <div style="padding: 80px 12px 12px 12px;">
                    <div class="title">
                        <span :style="{
                            'background-image': 'url(' + title + ')',
                            'background-size': '100% 100%',
                            'background-repeat': 'no-repeat',
                            'padding': '50px 30px 20px 30px',
                        }">
                            {{ single.title }}
                        </span>
                    </div>
                    <div v-for="(detail, j) in single.detail" :key="j">
                        <div v-if="detail.type == 'txt'"
                            style="border-radius: 8px;padding: 8px;margin-bottom: 4px;background-color: rgba(255, 255, 255, 0.8);">
                            <div style="line-height: 26px;font-weight: 500;color: #323233;" v-html="detail.value">
                            </div>
                        </div>
                        <van-image lazy-load v-else-if="detail.type == 'img'" style="width: 100%; margin-bottom: 4px;"
                            :src="require('./../../assets/sourceRoad/detail/' + detail.value)" fit="contain"
                            @click="getImg(require('./../../assets/sourceRoad/detail/' + detail.value))" />

                        <div v-else-if="detail.type == 'tip'" style="padding-top: 20px;text-align: start;">
                            <div style="display: flex;justify-content: center;">
                                <div class="tip" :style="{
                                    'background-image': 'url(' + tip + ')',
                                    'background-size': '100% 100%',
                                    'background-repeat': 'no-repeat',
                                    'padding': '10px 46px 20px 46px'
                                }">{{ detail.value }}</div>
                            </div>
                            <div
                                style="border-radius: 8px;padding: 8px;margin-top: 12px;background-color: rgba(255, 255, 255, 0.8);">
                                <div v-for="(item, i) in detail.children">
                                    <div v-if="item.type == 'txt'">
                                        <div style="line-height: 26px;font-weight: 500;color: #323233;" v-html="item.value">
                                        </div>
                                    </div>
                                    <van-image lazy-load v-else-if="item.type == 'img'"
                                        style="width: 100%; margin-bottom: 4px;border-radius: 8px;overflow: hidden"
                                        :src="require('./../../assets/sourceRoad/detail/' + item.value)" fit="contain"
                                        @click="getImg(require('./../../assets/sourceRoad/detail/' + item.value))" />

                                    <van-swipe v-else-if="item.type == 'imgGroup'" class="my-swipe" :autoplay="3000"
                                        indicator-color="#F9B22B" style="height: 50vw;border-radius: 8px;overflow: hidden">
                                        <van-swipe-item v-for="(img, l) in item.value" :key="'shopImg' + l">
                                            <van-image lazy-load width="100%" height="100%"
                                                :src="require('./../../assets/sourceRoad/detail/' + img)" fit="cover"
                                                position="center" />
                                        </van-swipe-item>
                                    </van-swipe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ImagePreview } from 'vant';
import picUrl from '../../assets/sourceRoad/bg2_new.jpg';
import title from '../../assets/sourceRoad/title.png';
import tip from '../../assets/sourceRoad/tips2.png';
export default {
    name: 'sourceDetail',
    data() {
        return {
            picUrl,
            title,
            tip,

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
<style scoped>
.title {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    padding-bottom: 20px;
    color: black;
}

.tip {
    border-color: #969799;
    color: black;
    font-size: 18px;
    font-weight: 500;
}
</style>