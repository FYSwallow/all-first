import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/common.scss'
import './permission'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.config.productionTip = false
// if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
  // }

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
