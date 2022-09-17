<template>
  <div style="text-align: center; height: 100vh; width: 100vw">
    <div
      class="flex-v"
      :style="{
        width: '100%',
        height: '100%',
        'background-image': 'url(' + picUrl + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%',
        '-moz-background-size': '100% 100%',
      }"
    >
      <div style="padding-left: 10%; padding-right: 10%; padding-top: 8%">
        <div style="padding-bottom: 6px">
          <van-row>
            <van-col span="1"> </van-col>

            <van-col span="22">
              <div
                :style="{
                  width: '100%',
                  'background-image': 'url(' + cardBg + ')',
                  'background-repeat': 'no-repeat',
                  'background-size': '100% 100%',
                  '-moz-background-size': '100% 100%',
                }"
              >
                <div
                  style="
                    height: 300px;
                    padding-top: 30px;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                  "
                >
                  <van-image
                    height="160"
                    width="80%"
                    :src="buildingList[choose].pic"
                    style="border: 2px solid white; border-radius: 4px"
                  />
                  <div style="color: white; line-height: 30px; font-weight: 600">
                    {{ buildingList[choose].title }}
                  </div>
                  <!-- <van-image width="30%" :src="share" style="margin-top: 2px" /> -->
                </div>
              </div>
            </van-col>

            <van-col span="1"> </van-col>
          </van-row>
          <div style="line-height: 40px; color: white; font-size: 13px; font-weight: 500">
            点击右上角，送卡给好友
          </div>
          <van-button round type="info" @click="back">返回</van-button>
        </div>
      </div>
    </div>
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
</style>
<script>
import { Toast, Notify } from 'vant';
import axios from 'axios';
// import Vconsole from 'vconsole';
import wx from 'weixin-js-sdk';
import picUrl from '../../assets/building/bg.jpg';
import share from '../../assets/building/share.png';
import cardBg from '../../assets/building/card_bg.png';
import rule from '../../assets/building/rule.png';
import draw from '../../assets/building/draw.png';
import link from '../../assets/building/link.png';

import bls from '../../assets/building/pics/bls.jpg';
import blsMini from '../../assets/building/pics/bls-mini.jpg';
import blsShadow from '../../assets/building/pics/bls-shadow.jpg';
import blsShadowMini from '../../assets/building/pics/bls-shadow-mini.jpg';
import nj from '../../assets/building/pics/nj.jpg';
import njMini from '../../assets/building/pics/nj-mini.jpg';
import njShadow from '../../assets/building/pics/nj-shadow.jpg';
import njShadowMini from '../../assets/building/pics/nj-shadow-mini.jpg';
import zw from '../../assets/building/pics/zw.jpg';
import zwMini from '../../assets/building/pics/zw-mini.jpg';
import zwShadow from '../../assets/building/pics/zw-shadow.jpg';
import zwShadowMini from '../../assets/building/pics/zw-shadow-mini.jpg';
import hl from '../../assets/building/pics/hl.jpg';
import hlMini from '../../assets/building/pics/hl-mini.jpg';
import hlShadow from '../../assets/building/pics/hl-shadow.jpg';
import hlShadowMini from '../../assets/building/pics/hl-shadow-mini.jpg';
import hd from '../../assets/building/pics/hd.jpg';
import hdMini from '../../assets/building/pics/hd-mini.jpg';
import hdShadow from '../../assets/building/pics/hd-shadow.jpg';
import hdShadowMini from '../../assets/building/pics/hd-shadow-mini.jpg';
import xq from '../../assets/building/pics/xq.jpg';
import xqMini from '../../assets/building/pics/xq-mini.jpg';
import xqShadow from '../../assets/building/pics/xq-shadow.jpg';
import xqShadowMini from '../../assets/building/pics/xq-shadow-mini.jpg';
import xjy from '../../assets/building/pics/xjy.jpg';
import xjyMini from '../../assets/building/pics/xjy-mini.jpg';
import xjyShadow from '../../assets/building/pics/xjy-shadow.jpg';
import xjyShadowMini from '../../assets/building/pics/xjy-shadow-mini.jpg';
import qj from '../../assets/building/pics/qj.jpg';
import qjMini from '../../assets/building/pics/qj-mini.jpg';
import qjShadow from '../../assets/building/pics/qj-shadow.jpg';
import qjShadowMini from '../../assets/building/pics/qj-shadow-mini.jpg';
import jh from '../../assets/building/pics/jh.jpg';
import jhMini from '../../assets/building/pics/jh-mini.jpg';
import jhShadow from '../../assets/building/pics/jh-shadow.jpg';
import jhShadowMini from '../../assets/building/pics/jh-shadow-mini.jpg';

// new Vconsole();

export default {
  name: 'building',
  data() {
    return {
      picUrl,
      share,
      cardBg,
      rule,
      draw,
      link,

      buildingList: [
        {
          name: '农金大厦',
          label1: '农金大厦',
          label2: '',
          pic: nj,
          picMini: njMini,
          picShadow: njShadow,
          picMiniShadow: njShadowMini,
          title: '农金大厦（五星）',
          text: '农金大厦位于浙江省海宁市钱江西路278号，是浙江海宁农村商业银行股份有限公司总部，是集合办公、营业及配套辅助用房等为一体的综合性办公大厦。农金大厦用地面积8223.9平方米，总建筑面积4.9万平方米，于2019年1月投入运行使用。 2021年1月-12月，税收合计2.043亿元，为嘉兴市五星级商务楼宇。值得称道的是，2019年12月，农金大厦获得中国建筑“鲁班奖”，这也是我市历史首个建筑领域“鲁班奖”。',
        },
        {
          name: '紫微大厦',
          label1: '紫微大厦',
          label2: '',
          pic: zw,
          picMini: zwMini,
          picShadow: zwShadow,
          picMiniShadow: zwShadowMini,
          title: '紫微大厦（五星）',
          text: '紫微大厦位于海宁大道东侧，紧邻杭海城际铁路皮革城站，交通便利，是 “全国民营500强企业”浙江鸿翔控股集团的总部大楼。它是一幢非常“年轻”的楼宇，于2017年12月投入运行，总用地面积为13337平方米，总建筑面积7.6万平方米。旁边是“紫微大厦二期”海城大厦，鸿翔“双子楼”实现高端商务办公，真正打造轻轨旁的海宁CBD。紫微大厦以建筑产业为主导，通过大力引进和培育优质建设服务主体（包括建筑施工、水利建设、建筑设计、园林绿化、建筑材料、建筑劳务、弱电智能化、建筑科技、环境发展等要素），将生产服务与创新发展有机结合起来，助推我市工业强市。作为建设服务产业创新发展中心，吸引了一批建设服务产业类企业入驻。产业主要定位为建筑服务、商务办公。<br/>紫微大厦2021年1月-12月，税收合计3.265亿元，曾荣获嘉兴市四星级商务楼宇、2018 年度市级物业服务示范项目、海宁市建设服务产业创新发展中心等多项荣誉，2019年通过浙江省优秀示范大厦考核、2020年获嘉兴市五星级商务楼宇、2021年获嘉兴市“双强”楼宇，海宁市优秀星级楼宇。',
        },
        {
          name: '合力大厦',
          label1: '合力大厦',
          label2: 'B座',
          pic: hl,
          picMini: hlMini,
          picShadow: hlShadow,
          picMiniShadow: hlShadowMini,
          title: '合力大厦B座（四星）',
          text: '合力大厦B座位于钱江西路与海宁大道交汇处，总建筑面积48894.64平方米，商业商务面积3.62万平方米，于2017年6月投入运行。大厦主要业态包括建筑服务、商务服务等，截至目前共入驻贸易、金融、房产投资、影视文化等类型企业47家。2021年1月-12月，税收合计4993.97万元，为嘉兴市四星级商务楼宇。',
        },
        {
          name: '宏达大厦',
          label1: '宏达大厦',
          label2: '',
          pic: hd,
          picMini: hdMini,
          picShadow: hdShadow,
          picMiniShadow: hdShadowMini,
          title: '宏达大厦（四星）',
          text: '宏达大厦位于海宁市海洲街道海州西路218号，建成于2005年，于同年12月投入运行，占地面积27.7亩，建筑面积2.39万平方米，主楼12层，辅楼5层。系宏达控股集团投资所建，现属集团旗下海宁宏达科创中心有限公司管理。<br/>目前已初步形成了以金融准金融、对外贸易、中介服务为主要特色和支柱产业的商务办公大楼。公司依托宏达控股集团，遵循“以诚相待，客户至上”、“以人为本，真心诚意，实事求是，合作共赢”的经营服务理念，正在实施“标准化、制度化、精细化、人性化”的管理改革。截至目前，宏达大厦注册入驻企业达25家，2021年度企业税收达8288.62万元。',
        },
        {
          name: '新桥商厦',
          label1: '新桥商厦',
          label2: '',
          pic: xq,
          picMini: xqMini,
          picShadow: xqShadow,
          picMiniShadow: xqShadowMini,
          title: '新桥商厦（四星）',
          text: '新桥商厦位于市区文宗南路68号，地处海宁城区行政文化板块核心区位，毗邻市政府、市体育中心、市文化中心、海宁皮革城以及城南公园等市政公建。大厦于2007年5月投入使用，总商务商业面积5060平方米，共入驻7家企业，入住率达99%。2021年度税收贡献1.95亿元，是嘉兴市四星级楼宇，曾荣获税收贡献超千万楼宇称号。',
        },
        {
          name: '新家园大厦',
          label1: '新家园',
          label2: '大厦',
          pic: xjy,
          picMini: xjyMini,
          picShadow: xjyShadow,
          picMiniShadow: xjyShadowMini,
          title: '新家园大厦（四星）',
          text: '新家园大厦位于市区海昌南路305号，地处海宁市金融中心繁华地带，是由浙江新家园实业集团有限公司开发建设的商业商务楼宇。大厦于2014年建成并投入使用，大厦总面积为8342.58平方米，总商务商业面积为6399.58平方米。大厦作为业主单位的总部所在，主体业态涉及金融、地产、影视等多个板块。2021年度税收贡献达7212.58万元，单位产出为11269.65元/平方米。曾荣获税收贡献超三千万楼宇、浙江省AA级守合同重信用企业称号、海宁慈善项目奖、文明单位等称号，是嘉兴市四星级商务楼宇。',
        },
        {
          name: '白领氏大厦',
          label1: '白领氏',
          label2: '大厦',
          pic: bls,
          picMini: blsMini,
          picShadow: blsShadow,
          picMiniShadow: blsShadowMini,
          title: '白领氏大厦（三星）',
          text: '白领氏大厦位于海洲东路南侧，宗海路东侧，是由白领氏集团开发建设并全部自持的一幢集商业办公于一体、符合国际标准的甲级商务楼宇。大厦层高98.77米，总建筑面积4.8万平方米，商务商业总面积为3.39万平方米，总投资1.8亿元。截至目前共入驻贸易、财富管理、房产投资、监理咨询等类型企业98家，入驻率达95.5%。2021年度楼宇税收达6328.37万元，是嘉兴市级三星级楼宇。',
        },
        {
          name: '钱江大厦',
          label1: '钱江大厦',
          label2: '',
          pic: qj,
          picMini: qjMini,
          picShadow: qjShadow,
          picMiniShadow: qjShadowMini,
          title: '钱江大厦（三星）',
          text: '钱江大厦位于钱江西路178号，总建筑总面积26467.9平方米，商务商业面积2.26万平方米，于2014年11月竣工投入使用。大厦整体共二十一层，现入驻31家单位，是嘉兴市三星级楼宇。入驻企业主要包括金融、房地产、工程建设和咨询、生物化学技术等行业，其中海宁钱江置业有限公司为大厦管理主体。今年街道也在推动钱江大厦基础设施改造，引导大厦向智慧化楼宇转型。',
        },
        {
          name: '金汇大厦',
          label1: '金汇大厦',
          label2: '',
          pic: jh,
          picMini: jhMini,
          picShadow: jhShadow,
          picMiniShadow: jhShadowMini,
          title: '金汇大厦（三星）',
          text: '金汇大厦位于江南大道北侧、海昌南路西侧。地处海宁城南繁华地段，毗邻银泰城和金融中心。是由海宁市中朝房地产开发有限公司投资建设的综合型商务写字楼。金汇大厦主体建筑由两座22层楼的办公楼组成(其中裙房四层)，建筑面积共有5.55万平方米，其中商务及办公室面积32172平方米，沿街商铺22324平方米，并有地下车位及地面车位500余个，有物业内部食堂，配套设施齐全。<br/>金汇大厦于2010年投入使用，目前入驻企业、商户有100家，入住率达99.9%。大厦主要业态：房地产开发、商贸、金融、教育、文化以及餐饮休闲娱乐业等。业态管理日趋合理、稳定。2021年度楼宇税收达4042.45万元，先后获得了嘉兴市三星级楼宇、海宁市重点楼宇、海洲街道先进基层党组织、海洲街道抗疫先进集体等荣誉。',
        },
      ],

      choose: 0,
    };
  },
  methods: {
    back() {
      history.back();
    },
    getOpenId(string) {
      axios({
        method: 'get',
        url: this.ports.building.getOpenId,
        params: {
          code: string,
        },
      })
        .then((res) => {
          console.log('open_id拿到了，记录一下');
          if (res.data.openid) {
            window.localStorage.setItem('building_openid', res.data.openid);
            this.getCards();
            this.getChance();
          } else {
            Notify({ type: 'warning', message: '授权失败' });
          }
        })
        .catch((error) => {
          console.log(error);
          Toast.fail('授权失败');
        });
    },

    wxConfig() {
      axios({
        method: 'get',
        url: this.ports.business.getWechatSign,
        params: {
          url: window.location.href.split('#')[0],
        },
      })
        .then((res) => {
          console.log(res.data);

          wx.config({
            // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            debug: false,
            appId: res.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.signature, // 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'], // 必填，需要使用的JS接口列表
          });
          wx.error((result) => {
            // config 信息验证失败会执行error函数,如签名过期导致验证失败
            // 具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
            console.log(`配置验证失败: ${result.errMsg}`);
          });

          wx.ready(() => {
            const url = `https://www.sjzch.vip/buildingCard?card_id=${this.card_id}`;

            wx.updateAppMessageShareData({
              title: `送你一座“星级楼宇”-${this.buildingList[this.choose].name}`, // 分享标题
              desc: '集齐享好礼~', // 分享描述
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_building.png', // 分享图标
              success() {
                // 设置成功
                console.log('配置验证成功');
              },
            });
            // 需在用户可能点击分享按钮前就先调用
            wx.updateTimelineShareData({
              title: `送你一座“星级楼宇”-${this.buildingList[this.choose].name}`, // 分享标题
              link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: 'https://www.sjzch.vip/img/sharepic_building.png', // 分享图标
              success() {
                // 设置成功
                console.log('配置验证成功');
              },
            });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    if (window.localStorage.getItem('building_openid')) {
      // 判断是否登录
      console.log('登录了');

      this.card_id = this.$route.query.card_id;
      this.choose = this.$route.query.card - 1;
      this.wxConfig();
    } else {
      // 没登录则跳转到登录界面
      console.log('没登录');
      const state = 'STATE';
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_BUILDING_URL}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`;
    }
  },
};
</script>
