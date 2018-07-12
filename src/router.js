import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Receipt from './views/Receipt.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recibo/:digest',
      name: 'receipt',
      component: Receipt,
    },
  ],
});
