import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import scroll from 'vue-seamless-scroll'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/reset.scss'
import '@/assets/style/main.scss'
import '@/assets/icon/iconfont.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(scroll)
Vue.prototype.$ajax = axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')