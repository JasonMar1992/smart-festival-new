import Vue from 'vue';
import Vant, { Lazyload } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vant/lib/index.css';

Vue.use(Vant).use(Lazyload);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
