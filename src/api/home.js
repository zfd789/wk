import * as API from "."
export default {

    //  获取首页菜单栏  classtype 1 是硬件  2是软件
    classList: params => {
        return API.GET('api/classList', params)
    },
    // bannerlist api/bannerList
    bannerlist:params=>{
        return API.GET('api/bannerList', params)
    },
    // 首页数据
    record:params=>{
        return API.GET('api/record',params)
    },
    //  设计师
    designers:params=>{
        return API.GET('api/designer_list',params)
    },
     //  设计师
     designersdet:params=>{
        return API.GET(`api/designer_info/${params.id}`)
    }
    //    islogin:params=>{
    //     return API.GET('api/is_login',params)
    // },

}