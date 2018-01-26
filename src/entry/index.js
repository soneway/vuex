// common.js
import '../script/common';

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../router';
import Index from '../Index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});

// eslint-disable-next-line no-new
new Vue({
  router,
  el: '#root',
  render: h => h(Index),
});
