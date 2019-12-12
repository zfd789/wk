import * as API from "."
export default {

    //  获取店铺的推荐商品列表
    Allgoods: params => {
        return API.GET(`api/all_goods/${params.id}`, params.param)
    },
    //  案例展示
    shopcases:params=>{
        return API.GET('api/shop_case',params)
    },
    casedetail:params=>{
        return API.GET(`api/case_info/${params.id}`)
    },
    aboutUs:params=>{
        return API.GET(`api/abort_we/${params.id}`)
    }


}