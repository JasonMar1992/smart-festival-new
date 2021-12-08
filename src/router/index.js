import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      requiresAuth: true,
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
      title: '奖品记录',
      requiresAuth: false,
    },
    component: () => import('../views/check.vue'),
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
      next();
    }
  } else {
    next();
  }
});

export default router;
