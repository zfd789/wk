import * as API from '.'
export default {
    islogin:params=>{
        return API.GET('api/is_login',params)
    },
    login: params => {
        return API.POST('api/login', params)
    },
    loginOut:params=>{
         return API.GET('api/loginout',params)
    },
    register: params => {
        return API.POST('api/register', params)
    },
    // api/captcha
    captcha: params => {
        return API.GET('api/captcha', params)
    },
    // api/sendCode
    sendCode: params => {
        return API.POST('api/sendCode', params)
    },
    // 找回密码发送验证码
    forget: params => {
        return API.POST('api/forget', params)
    },
    // 修改密码
    resetPwd: params => {
        return API.POST('api/retrieve_pass', params)
    }
}