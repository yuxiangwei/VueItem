import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick' //安装npm install fastclick --save 解决移动端点击延迟300ms问题
import './assets/styles/reset.css' //重置移动端样式
import './assets/styles/border.css' //解决移动端1px边框问题

Vue.config.productionTip = false
fastClick.attach(document.body)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
