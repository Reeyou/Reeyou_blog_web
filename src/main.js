// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import './common/index.css'
import './common/font.css'
import '@/assets/iconfont/iconfont.css'
import 'lib-flexible'
import moment from 'moment'
// highlight.js代码高亮指令
import Highlight from './utils/highlight'

Vue.prototype.$moment = moment

Vue.use(Highlight)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
