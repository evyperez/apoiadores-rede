import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { formatBRL, formatBRLDec, formatDate, formatCNPJ, formatDateBasic } from './utilities';

Vue.config.productionTip = false;

Vue.filter('formatBRL', formatBRL);
Vue.filter('formatBRLDec', formatBRLDec);
Vue.filter('formatDate', formatDate);
Vue.filter('formatCNPJ', formatCNPJ);
Vue.filter('formatDateBasic', formatDateBasic);
Vue.filter('upperCase', value => value.toUpperCase());

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
