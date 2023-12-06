// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { store } from '@/components/practice-topic/store.js';
import { v4 as uuidv4 } from 'uuid';


// import 'bootstrap'
// Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint-disable */
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
