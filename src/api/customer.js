import * as API from '.'
export default {
    // 个人中心

    // 个人主页
    UserInfo:params=>{
        return API.GET('api/user_info',params)
    },
    // 我发布的需求
    myOrder:params=>{
        return API.GET('api/user/my_order',params)
    },
    //  查看订单报价列表
    ListQuotations:params=>{
        return API.GET(`api/user/my_order_info/${params.id}`)
    },
    // 我u收藏/关注的店铺
    myFollow:params=>{
        return API.GET('api/my_follow',params)
    },
    // 关注/取消关注店铺
    shopFollow:params=>{
        return API.GET('api/follow_shop',params)
    },

    // 我收藏的需求
    myFollowOrder:params=>{
        return API.GET('api/my_follow_order',params)
    },
  

    //  我的店铺

    // 店铺基本设置 获取店铺基本信息  还缺修改店铺接口
    myShopBaseInfo:params=>{
        return API.GET('api/my_shop/index',params)
    },

    // 商品管理-
    
    // 商品列表
    myGoods:params=>{
        return API.GET('api/my_shop/my_goods',params)
    },
    // 添加商品
    addGoods:params=>{
        return API.POST('api/my_shop/apply_goods',params)
    },
    // 修改商品
    editGoods:params=>{
        return API.PUT(`api/my_shop/revise_goods/${params.id}`)
    },
      // 删除商品
     delGoods:params=>{
        return API.DELETE(`api/my_shop/del_goods/${params.id}`)
    },
    // 商品上下架
    changeShelf:params=>{
        return API.GET(`api/my_shop/change_shelf/${params.id}`,params.param)
    },

    // 装修店铺
    fixdSgop:params=>{
        return API.PUT(`api/my_shop/renovate_up`,params)
    },
    // 案例管理
     
    // 案例列表
    myCaselist:params=>{
        return API.GET(`api/my_shop/my_case`,params)
    },
    // 添加案例
    addCase:params=>{
        return API.POST(`api/my_shop/add_case`,params)
    },
      // 编辑案例
      editCase:params=>{
        return API.PUT(`api/my_shop/add_case/${params.id}`,params.param)
    },
    // 删除案例
    delCase:params=>{
        return API.DELETE(`api/my_shop/del_case/${params.id}`)
    },


    // 账号设置
     
    // 基本设置
    // 发送认证验证码
    sendmail:params=>{
        return API.GET('user/send_mail',params)
    },
    // 邮箱认证
    cheakEmail:params=>{
        return API.POST('api/user/check_email',params)
    }
    // 手机认证
    // 实名认证
    // 修改密码


}