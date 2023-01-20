import Vue from 'vue';
import VueRouter from 'vue-router';

import xieqiaoLayout from '../views/xieqiao/layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '2021海宁“智造”生活节',
      requiresAuth: false,
    },
    component: () => import('../views/Homepage.vue'),
  },
  {
    path: '/list',
    name: 'List',
    meta: {
      title: '商家列表',
      requiresAuth: true,
    },
    component: () => import('../views/List.vue'),
  },
  {
    path: '/rule',
    name: 'Rule',
    meta: {
      title: '活动介绍',
      requiresAuth: true,
    },
    component: () => import('../views/Rule.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    meta: {
      title: '商家介绍',
      requiresAuth: true,
    },
    component: () => import('../views/Detail.vue'),
  },
  {
    path: '/luckdraw',
    name: 'Luckdraw',
    meta: {
      title: '抽奖',
      requiresAuth: true,
    },
    component: () => import('../views/luckdraw.vue'),
  },
  {
    path: '/prizeList',
    name: 'prizeList',
    meta: {
      title: '奖品记录',
      requiresAuth: true,
    },
    component: () => import('../views/prizeList.vue'),
  },
  {
    path: '/check',
    name: 'check',
    meta: {
      title: '核销奖品',
      requiresAuth: false,
    },
    component: () => import('../views/check.vue'),
  },

  // 新年活动
  {
    path: '/newyear',
    name: 'newyear',
    meta: {
      title: '马桥街道“寻找新年味”集卡活动',
      requiresAuth: false,
    },
    component: () => import('../views/newyear/index.vue'),
  },
  {
    path: '/newyearcard',
    name: 'newyearcard',
    meta: {
      title: '马桥街道“寻找新年味”集卡活动',
      requiresAuth: false,
    },
    component: () => import('../views/newyear/card.vue'),
  },

  // 招商活动
  {
    path: '/building',
    name: 'building',
    meta: {
      title: '“星级楼宇” 集卡活动',
      requiresAuth: false,
    },
    component: () => import('../views/building/index.vue'),
  },
  {
    path: '/buildingCard',
    name: 'buildingCard',
    meta: {
      title: '“星级楼宇” 集卡活动',
      requiresAuth: false,
    },
    component: () => import('../views/building/card.vue'),
  },
  {
    path: '/buildingSend',
    name: 'buildingSend',
    meta: {
      title: '“星级楼宇” 集卡活动',
      requiresAuth: false,
    },
    component: () => import('../views/building/send.vue'),
  },

  // 斜桥美镇
  {
    path: '/xieqiao',
    component: xieqiaoLayout,
    redirect: { name: 'xieqiaoIndex' },
    children: [
      {
        path: 'xieqiaoIndex',
        name: 'xieqiaoIndex',
        meta: {
          title: '斜桥美镇会务系统',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/index.vue'),
      },
      {
        path: 'kaohe',
        name: 'kaohe',
        meta: {
          title: '考核线路',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/kaohe.vue'),
      },
      {
        path: 'kaoheA',
        name: 'kaoheA',
        meta: {
          title: '考核线路A',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/kaoheA.vue'),
      },
      {
        path: 'kaoheB',
        name: 'kaoheB',
        meta: {
          title: '考核线路B',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/kaoheB.vue'),
      },
      {
        path: 'jieshao',
        name: 'jieshao',
        meta: {
          title: '10+X介绍',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/jieshao.vue'),
      },
      {
        path: 'jieshaoA',
        name: 'jieshaoA',
        meta: {
          title: '介绍线路A',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/jieshaoA.vue'),
      },
      {
        path: 'jieshaoB',
        name: 'jieshaoB',
        meta: {
          title: '介绍线路B',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/jieshaoB.vue'),
      },
      {
        path: 'huiwu',
        name: 'huiwu',
        meta: {
          title: '会务安排',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/huiwu.vue'),
      },
      {
        path: 'fengcai',
        name: 'fengcai',
        meta: {
          title: '斜桥风采',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/fengcai.vue'),
      },
      {
        path: 'gexing',
        name: 'gexing',
        meta: {
          title: '个性台账',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/gexing.vue'),
      },
      {
        path: 'gongxing',
        name: 'gongxing',
        meta: {
          title: '共性台账',
          requiresAuth: false,
        },
        component: () => import('../views/xieqiao/gongxing.vue'),
      },
    ],
  },

  //答题活动
  {
    path: '/answer',
    name: 'answer',
    meta: {
      title: '海洲街道 答题活动',
      requiresAuth: false,
    },
    component: () => import('../views/answer/index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '海洲街道 答题活动',
      requiresAuth: false,
    },
    component: () => import('../views/answer/test.vue'),
  },

  // 轨交工联
  {
    path: '/zjhy',
    name: 'zjhy',
    meta: {
      title: '梓静华映 好运新年活动',
      requiresAuth: false,
    },
    component: () => import('../views/drum/index.vue'),
  },
  {
    path: '/zjhyCheck/:id/:mobile',
    name: 'zjhyCheck',
    meta: {
      title: '轨交工联线下预约核销',
      requiresAuth: false,
    },
    component: () => import('../views/drum/check.vue'),
  },


  // 黄湾相册
  {
    path: '/huangwan',
    name: 'huangwan',
    meta: {
      title: '黄湾2022年度相册',
      requiresAuth: false,
    },
    component: () => import('../views/huangwan/index.vue'),
  },
  {
    path: '/huangwanDetail/:id',
    name: 'huangwanDetail',
    meta: {
      title: '黄湾2022年度相册',
      requiresAuth: false,
    },
    component: () => import('../views/huangwan/detail.vue'),
  },

  // 2023新年贺卡
  {
    path: '/2023card/:name/:from',
    name: '2023card',
    meta: {
      title: '新岁启封，同跨新年',
      requiresAuth: false,
    },
    component: () => import('../views/2023newyearcard/index.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.meta.requiresAuth) { // 判断是否需要登录权限
    if (window.localStorage.getItem('open_id')) { // 判断是否登录
      console.log('登录了');
      next();
    } else { // 没登录则跳转到登录界面
      console.log('没登录');
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_APPID}&redirect_uri=${process.env.VUE_APP_HOST_URL}&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
    }
  } else {
    next();
  }
});
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

export default router;
