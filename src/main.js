// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import VeeValidate, { Validator } from 'vee-validate'; // 匯入檔案
import TW from 'vee-validate/dist/locale/zh_TW'; // 匯入語言包

import App from './App';
import router from './router';

Vue.use(VueAxios, axios);
Vue.use(VeeValidate); // 啟用API
Validator.localize('zh-TW', TW); // 啟用語言包


Vue.component('Loading', Loading);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
