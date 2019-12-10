import * as API from '.'
export default {
    UserInfo:params=>{
        return API.GET('api/user_info',params)
    }
}