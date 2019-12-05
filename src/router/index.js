import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Public from '@/views/index'
import login from '@/views/login/login'
import index from '@/views/index'
import Shop from '@/views/Shop' // 店铺首页模块
import Costomer from '@/views/Costomer' // 用户模块
import home from '@/views/Shop/home' // 店铺首页模块

import customer from '@/views/Customer/customer' // 店铺首页模块
import mineshop from '@/views/Customer/mineshop' 
import setting from '@/views/Customer/setting' 

import forum from '@/views/Forum/forum'

import shopslist from '@/views/Shopslist/shopslist'
import Goodslist from '@/views/Shopslist/Goodslist'
import Goodsdetail from '@/views/Shopslist/Goodsdetail'
import order from '@/views/Shopslist/order'
import success from '@/views/Shopslist/success'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
    {path:'/Home',component:Home,name:"主页"},
    {path: '/', redirect: '/Home'}
  ],
  
  },
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
    {path:'/Forum/forum',component:forum,name:"社区"},
    {path: '/', redirect: '/Forum/forum'}
  ],
  
  },
  {
    path: '/',
    name: 'index',
    component: index,
    children:[
    {path:'/Shopslist/shopslist',component:shopslist,name:"店铺列表页"},
    {path:'/Shopslist/Goodslist',component:Goodslist,name:"商品列表页"},
    {path:'/Shopslist/Goodsdetail',component:Goodsdetail,name:"商品详情页"},
    {path:'/Shopslist/order',component:order,name:"询价订单"},
    {path:'/Shopslist/success',component:success,name:"提交成功"},
    {path: '/', redirect: '/Shopslist/shopslist'}
  ],
  
  },
  
  {
    path: '/',
    name: 'Shop',
    component: Shop,
    children:[
    {path:'/Shop/home',component:home,name:"店铺首页"},
    {path: '/', redirect: '/Shop/home'}
  ],
  
  },
  {
    path: '/',
    name: 'Costomer',
    component: Costomer,
    children:[
    {path:'/Customer/customer',component:customer,name:"个人中心"},
    {path:'/Customer/mineshop',component:mineshop,name:"我的店铺"},
    {path:'/Customer/setting',component:setting,name:"账号设置"},
    {path: '/', redirect: '/Customer/customer'}
  ],
  
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
