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

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line no-console
  console.log(to)
  // eslint-disable-next-line no-console
  to.matched.some(res => {
    // eslint-disable-next-line no-console
    if (res.meta.requireAuth) {
      let islogin = localStorage.getItem('islogin')

      // eslint-disable-next-line no-console
      // console.log(redirect)
      if (islogin == 0) { // 已登录

        // router.push({
        //   path: "/login"
        // })
        // next({ path: redirect })
        next()
      } else { // 未登录
        // next({ path: redirect })
        // eslint-disable-next-line no-console

        // this.$router.replace({
        //   path: "/Shopslist/shopslist",
        //   query: { info: children_1, list: children.children }
        // });

        // console.log(to.fullPath)
        next({
          path: "/login",
          query: {
            redirect: to.fullPath //把要跳转的路径作为参数传到登录页面
          }
        })
      }
    } else {
      next()
    }


  })

  // if (to.matched.some) {
  //   // eslint-disable-next-line no-console
  //   if (to.matched.some == true) {
  //     let islogin = localStorage.getItem('islogin')
  //     if(islogin==1){
  //       router.push({
  //         path:"/login"
  //       })
  //     }
  //     // eslint-disable-next-line no-console
  //     console.log( '-------------'+ islogin)
  //     // eslint-disable-next-line no-empty
  //   } else {
  //     let islogin = localStorage.getItem('islogin')
  //     // eslint-disable-next-line no-console
  //     console.log( '%%%%%%%%%%%%%%%%'+ islogin)
  //     next()
  //   }

  // } else {
  //   // eslint-disable-next-line no-console
  //   console.log('22222')
  //   // next({
  //   //     path:"/login"
  //   // })
  // }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')