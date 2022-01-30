<template>
  <div style="text-align: center">
    <div
      class="flex-v"
      :style="{
        'padding-top': '4vh',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="height: 680px">
        <div v-if="cards.length == 4">
          <div style="color: #f5d198">恭喜！</div>
          <div style="color: #f5d198; padding-top: 4px; font-size: 12px">
            已集齐全部年俗卡
          </div>
        </div>
        <div v-else>
          <div style="color: #f5d198">还有{{ share_count }}次集卡机会</div>
          <div style="color: #f5d198; padding-top: 4px; font-size: 12px">
            集齐年俗卡即可参与抽奖
          </div>
        </div>

        <van-row style="padding-top: 20px">
          <van-col v-for="(item, i) in classList" :key="i" span="12">
            <div style="text-align: center">
              <div :class="item.className" id="container">
                <div :class="'rp front' + i" />
                <div :class="'rp back' + i" />
              </div>
            </div>
            <div v-if="buttonGroup" style="height: 56px">
              <van-image
                v-if="cards.indexOf(i) == -1"
                class="buttonStyle"
                style="padding: 10px 0px"
                width="50%"
                :src="button"
                @click="go(i)"
              />
            </div>
            <div v-else style="height: 56px"></div>
          </van-col>
        </van-row>
        <van-image
          v-if="cards.length == 4"
          width="160"
          height="50"
          :src="draw"
          @click="drawLink"
        />
      </div>
    </div>
    <div style="height: 120px; width: 100%; background: #940a10"></div>
    <van-popup v-model="show"> </van-popup>
  </div>
</template>

<style>
.buttonStyle {
  -webkit-animation-name: scaleDraw;
  /*关键帧名称*/
  -webkit-animation-timing-function: ease-in-out;
  /*动画的速度曲线*/
  -webkit-animation-iteration-count: infinite;
  /*动画播放的次数*/
  -webkit-animation-duration: 5s;
}
@keyframes scaleDraw {
  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
  0% {
    transform: scale(1);
    /*开始为原始大小*/
  }
  25% {
    transform: scale(0.9);
    /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(0.9);
  }
}

.container {
  width: 115px;
  height: 150px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s ease-in-out;
  display: inline-block;
}
.rp {
  left: 0;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.flip {
  transform: rotateY(180deg);
}

.front0 {
  background-image: url("../../assets/newyear/card0_s.png");
}
.back0 {
  background-image: url("../../assets/newyear/card0.png");
  transform: rotateY(180deg);
}
.front1 {
  background-image: url("../../assets/newyear/card1_s.png");
}
.back1 {
  background-image: url("../../assets/newyear/card1.png");
  transform: rotateY(180deg);
}
.front2 {
  background-image: url("../../assets/newyear/card2_s.png");
}
.back2 {
  background-image: url("../../assets/newyear/card2.png");
  transform: rotateY(180deg);
}
.front3 {
  background-image: url("../../assets/newyear/card3_s.png");
}
.back3 {
  background-image: url("../../assets/newyear/card3.png");
  transform: rotateY(180deg);
}
</style>
<script>
import { Toast, Notify } from 'vant';
import axios from 'axios';
// import wx from 'weixin-js-sdk';
import picUrl from '../../assets/newyear/card_bg.png';
import button from '../../assets/newyear/get.jpg';
import draw from '../../assets/newyear/draw.jpg';

export default {
  name: 'newyearcard',
  data() {
    return {
      picUrl,
      button,
      draw,

      cards: [],

      share_count: 0,
      allget: false,
      buttonGroup: false,

      show: false,

      classList: [
        {
          className: 'container',
          button: true,
        },
        {
          className: 'container',
          button: true,
        },
        {
          className: 'container',
          button: true,
        },
        {
          className: 'container',
          button: true,
        },
      ],

      loading: false,
    };
  },
  methods: {
    drawLink() {
      window.location.href = 'https://26268163-29.hdpyqd.com/26268163/G-0Li6THmVz6x_HspgyZRA/load-26268163-29.html?style=24&_source=1';
    },
    go(index) {
      if (this.share_count < 1) {
        Toast('当前集卡次数已用完\n分享给好友获得更多次数');
        return;
      }

      if (!this.loading) {
        this.loading = true;
        axios({
          method: 'post',
          url: this.ports.newyear.addCard,
          data: {
            openid: window.localStorage.getItem('newyear_openid'),
            card: index,
          },
        })
          .then((res) => {
            this.loading = false;
            console.log(res.data);
            this.classList[index].className = 'container flip';
            this.cards.push(index);
            this.share_count--;
          })
          .catch((error) => {
            this.loading = false;
            Notify({ type: 'warning', message: error.response.data.msg });
          });
      }
    },
    getCount() {
      axios({
        method: 'get',
        url: this.ports.newyear.getShareCount,
        params: {
          openid: window.localStorage.getItem('newyear_openid'),
        },
      })
        .then((res) => {
          console.log(res.data);
          // 总共邀请的人数
          const count = res.data.count + 1;

          axios({
            method: 'get',
            url: this.ports.newyear.getCard,
            params: {
              openid: window.localStorage.getItem('newyear_openid'),
            },
          })
            .then((result) => {
              console.log(result.data);
              const list = result.data;
              list.forEach((item) => {
                this.cards.push(item.card);
                this.classList[item.card].className = 'container flip';
              });
              // 总共邀请的人数 - 共已经集卡的数量 = 剩余可以集卡的次数
              const chance = count - list.length;
              if (chance > 4 - list.length) {
                this.share_count = 4 - list.length;
              } else if (chance < 0) {
                this.share_count = 0;
              } else {
                this.share_count = chance;
              }

              if (list.length === 4) {
                this.allget = true;
              }
              this.buttonGroup = true;
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (window.localStorage.getItem('newyear_openid')) {
      // 判断是否登录
      console.log('登录了');
      this.getCount();
    } else {
      // 没登录则跳转到登录界面
      console.log('没登录');
      const state = 'STATE';
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_NEWYEAR_URL}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
    }
  },
};
</script>
