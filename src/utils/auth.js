import Cookies from 'js-cookie'
// import qs from 'qs'
const TokenKey = 'Admin-Token'

export function getToken(){
    return Cookies.get(TokenKey)
}
export function setToken(Token){
    // token在Cookie中存储的天数，默认2天
    return Cookies.set(TokenKey,Token,{expires:2})
}
export function removeToken(){
    return Cookies.remove(TokenKey)
}