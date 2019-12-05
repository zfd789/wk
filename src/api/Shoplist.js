import * as API from '.'
export default {
    // 商品列表
    Goodslist: params => {
        return API.GET('api/goods', params)
    },
    // 商品详情
    GoodsInfo: params => {
        return API.GET(`api/goods_info/${params.id}`, params.param)
    },
    //  获取店铺列表
    Shoplist: params => {
        return API.GET('api/shop', params)
    },
    //  参数
    //  获取品牌
    brand: params => {
        return API.GET('select/goods_brand_list', params)
    },
    //  硬件参数
    // select/param_list
    parameter: params => {
        return API.GET('select/param_list', params)
    }

}