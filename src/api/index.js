import axios from 'axios'
// import router from '../router'
import qs from 'qs'
axios.defaults.withCredentials=true
const base = 'http://192.168.2.32/'

export const POST = (url, params) => {
    return axios.post(`${base}${url}`, qs.stringify(params)).then(res => res.data)
}
export const GET = (url, params) => {
    return axios.get(`${base}${url}`, {params: params}).then(res => res.data)
  }
  export const PUT = (url, params) => {
    return axios.put(`${base}${url}`, params).then(res => res.data)
  }
  export const POSTUP = (url, params) => {
    return axios.post(`${base}${url}`, params).then(res => res.data)
  }
  export const DELETE = (url, params) => {
    return axios.delete(`${base}${url}`, {params: params}).then(res => res.data)
  }