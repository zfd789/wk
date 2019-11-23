import * as API from "."
export default {
    //  获取首页菜单栏
    classList: params => {
        return API.GET('api/classList', params)
    },
    // bannerlist api/bannerList
    bannerlist:params=>{
        return API.GET('api/bannerList', params)
    }

}