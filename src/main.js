import Vue from 'vue';
import App from './App.vue';
import router from './router';

import checkAdBlock from '@/components/ads/checkAdBlock.vue';

Vue.config.productionTip = false;


Vue.component('checkAdBlock', checkAdBlock);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
