// common.js
import '../script/common';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../router/router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

new Vue({
  router,
}).$mount('#root');
