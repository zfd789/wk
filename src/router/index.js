import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Public from '@/views/index'
import login from '@/views/login/login'
import index from '@/views/index'
import Shop from '@/views/Shop' // 店铺首页模块
import Costomer from '@/views/Costomer' // 用户模块
// import home from '@/views/Shop/home' // 店铺首页模块

import customer from '@/views/Customer/customer' // 店铺首页模块
import mineshop from '@/views/Customer/mineshop'
import setting from '@/views/Customer/setting'
import openShop from '@/views/Customer/openShop'
// import baseInfo from '@/views/Customer/settings/baseInfo' 
// import email from '@/views/Customer/settings/email'
// import phone from '@/views/Customer/settings/phone'
// import findpwd from '@/views/Customer/settings/findpwd'

// import forum from '@/views/Forum/forum'

import shopslist from '@/views/Shopslist/shopslist'
import Goodslist from '@/views/Shopslist/Goodslist'
import Goodsdetail from '@/views/Shopslist/Goodsdetail'
import order from '@/views/Shopslist/order'
import enquiry from '@/views/Shopslist/enquiry'
import success from '@/views/Shopslist/success'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      requireAuth: false
    },
    children: [{
        path: '/Home',
        component: Home,
        name: "主页"
      },
      {
        path: '/',
        redirect: '/Home'
      }
    ],

  },
  {
    path: '/',
    name: 'index',
    component: index,
  
    children: [{
        path: '/menu/publish',
        // component: publish,
        component: () => import('@/views/menu/publish'),
        name: "发布",
        meta: {
          requireAuth: true
        },
      },
      {
        path: '/menu/orderTaking',
        // component: orderTaking,
        component: () => import('@/views/menu/orderTaking'),
        name: "我要接单",
        meta: {
          requireAuth: true
        },
      }
      // ,
      // {
      //   path: '/',
      //   redirect: '/Forum/forum'
      // }
    ],

  },
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      requireAuth: false
    },
    // publishQuestions anser
    children: [{
        path: '/Designers/designerlist',
        // component: forum,
        component: () => import('@/views/Designers/designerlist'),
        name: "设计师列表"
      },
      {
        path: '/Designers/designerdet',
        // component: forum,
        component: () => import('@/views/Designers/designerdet'),
        name: "设计师详情"
      },
      {
        path: '/',
        redirect: '/Designers/designerlist'
      }
    ],

  },
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      requireAuth: false
    },
    // publishQuestions anser
    children: [{
        path: '/Forum/forum',
        // component: forum,
        component: () => import('@/views/Forum/forum'),
        name: "社区"
      },
      {
        path: '/Forum/publishQuestions',
        // component: forum,
        component: () => import('@/views/Forum/publishQuestions'),
        name: "发布问题"
      },
      {
        path: '/Forum/anser',
        // component: forum,
        component: () => import('@/views/Forum/anser'),
        name: "我要回答"
      }
    ],

  },
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      requireAuth: false
    },
    children: [{
        path: '/Shopslist/shopslist',
        component: shopslist,
        name: "店铺列表页"
      },
      {
        path: '/Shopslist/Goodslist',
        component: Goodslist,
        name: "商品列表页"
      },
      {
        path: '/Shopslist/Goodsdetail',
        component: Goodsdetail,
        name: "商品详情页"
      },
      {
        path: '/Shopslist/order',
        component: order,
        name: "发布需求",
            meta:{
          requireAuth: true
        }
      },
      {
        path: '/Shopslist/enquiry',
        component: enquiry,
        name: "询价订单",
        meta:{
          requireAuth: true
        }
      },
      {
        path: '/Shopslist/success',
        component: success,
        name: "提交成功"
      },
      {
        path: '/',
        redirect: '/Shopslist/shopslist'
      }
    ],

  },

  {
    path: '/',
    name: 'Shop',
    component: Shop,
    meta: {
      requireAuth: false
    },
    children: [{
        path: '/Shop/home',
        component: () => import('@/views/Shop/home'),
        name: "店铺首页"
      },
      {
        path: '/Shop/cases',
        component: () => import('@/views/Shop/cases'),
        name: "案例展示"
      },
      {
        path: '/Shop/goodsCenter',
        component: () => import('@/views/Shop/goodsCenter'),
        name: "产品中心"
      },
      {
        path: '/Shop/aboutUs',
        component: () => import('@/views/Shop/aboutUs'),
        name: "关于我们"
      },
      {
        path: '/Shop/casedetail',
        component: () => import('@/views/Shop/casedetail'),
        name: "案例详情"
      },
      {
        path: '/',
        redirect: '/Shop/home'
      }
    ],

  },
  {
    path: '/',
    name: 'Costomer',
    component: Costomer,
    meta: {
      requireAuth: true
    },
    children: [{
        path: '/Customer/customer',
        component: customer,
        name: "个人中心",
        children:[
          {
            path: '/Customer/customers/profile',
            component: () => import('@/views/Customer/customers/profile'),
            name: "个人主页"
          },
          {
            path: '/Customer/customers/ListQuotations',
            component: () => import('@/views/Customer/customers/ListQuotations'),
            name: "报价列表"
          },
          {
            path: '/Customer/customers/ListQuotationsDetail',
            component: () => import('@/views/Customer/customers/ListQuotationsDetail'),
            name: "报价详情"
          },
          {
            path: '/Customer/customers/publishRquire',
            component: () => import('@/views/Customer/customers/publishRquire'),
            name: "我发布的需求"
          },
          {
            path: '/Customer/customers/mineOrder',
            component: () => import('@/views/Customer/customers/mineOrder'),
            name: "我的订单"
          },
          {
            path: '/Customer/customers/collectShop',
            component: () => import('@/views/Customer/customers/collectShop'),
            name: "我收藏的店铺"
          },
          {
            path: '/Customer/customers/collectRequire',
            component: () => import('@/views/Customer/customers/collectRequire'),
            name: "我收藏的需求"
          },
          {
            path: '/Customer/customer',
            redirect: '/Customer/customers/profile'
          }
        ]
      },
      {
        path: '/Customer/mineshop',
        component: mineshop,
        name: "我的店铺",
        children: [{
            path: '/Customer/mineshops/shopBaseInfo',
            component: () => import('@/views/Customer/mineshops/shopBaseInfo'),
            name: "店铺基础设置"
          },
          {
            path: '/Customer/mineshops/goodsManage',
            component: () => import('@/views/Customer/mineshops/goodsManage'),
            name: "商品管理"
          },
          {
            path: '/Customer/mineshops/addGood',
            component: () => import('@/views/Customer/mineshops/addGood'),
            name: "添加商品"
          },
          {
            path: '/Customer/mineshops/fixtShop',
            component: () => import('@/views/Customer/mineshops/fixtShop'),
            name: "装修店铺"
          },
          {
            path: '/Customer/mineshops/caseManage',
            component: () => import('@/views/Customer/mineshops/caseManage'),
            name: "案例管理"
          },
          {
            path: '/Customer/mineshops/addCase',
            component: () => import('@/views/Customer/mineshops/addCase'),
            name: "添加案例"
          },
          {
            path: '/Customer/mineshops/priceListdetail',
            component: () => import('@/views/Customer/mineshops/priceListdetail'),
            name: "报价单详情"
          },
          {
            path: '/Customer/mineshops/priceList',
            component: () => import('@/views/Customer/mineshops/priceList'),
            name: "我的报价单"
          },
          {
            path: '/Customer/mineshop',
            redirect: '/Customer/mineshops/shopBaseInfo'
          }



        ]
      },
      {
       path:"/Customer/openShop",
       component:openShop,
       name:"开通店铺",
       meta:{
         requireAuth:true
       }
      },
      {
        path: '/Customer/setting',
        component: setting,
        name: "账号设置",
        children: [{
            path: '/Customer/settings/email',
            component: () => import('@/views/Customer/settings/email'),
            name: "手机认证"
          },
          {
            path: '/Customer/settings/phone',
            component: () => import('@/views/Customer/settings/phone'),
            name: "邮箱认证"
          },
          {
            path: '/Customer/settings/findpwd',
            component: () => import('@/views/Customer/settings/findpwd'),
            name: "找回密码"
          },
          {
            path: '/Customer/settings/reverse',
            component: () => import('@/views/Customer/settings/reverse'),
            name: "实名认证"
          },
          {
            path: '/Customer/settings/baseInfo',
            name: "基础设置",
            // route level code-splitting reverse
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('@/views/Customer/settings/baseInfo')
          }, 
          {
            path: '/Customer/setting',
            redirect: '/Customer/settings/baseInfo'
          }


        ]
      },

      {
        path: '/',
        redirect: '/Customer/setting'
      }
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