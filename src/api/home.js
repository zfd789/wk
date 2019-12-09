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
       islogin:params=>{
        return API.GET('api/is_login',params)
    },
}