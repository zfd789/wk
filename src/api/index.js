import axios from 'axios'
// import router from '../router'
import qs from 'qs'
axios.defaults.withCredentials = true

// router.beforeEach((to, from, next) => {
//   // eslint-disable-next-line no-console
//   console.log(to.meta.requireAuth)
//   // console.log('333333333')
//   if (to.meta.requireAuth) {
//     // console.log('111111')
//     next()
//   } else {
//     // console.log('222222222')
//     next()
//     return
//   }
// })

// axios.interceptors.response.use(function (response) {
//   // eslint-disable-next-line no-console
//   console.log(response)
//   if (response.data && response.data.code) {

//     if (response.data.code === 0) {
//       // eslint-disable-next-line no-console
//       console.log('11111111111111')
//       // this.$router.push({
//       //   path: '/adminManage/adminList'
//       // })
//     } else if (response.data.code === 100) {
//       // eslint-disable-next-line no-console
//       console.log('1222')
//       // router.beforeEach((to, from, next) => {
//       //   // eslint-disable-next-line no-console
//       //   // console.log('333333333')
//       //   if (to.meta.requireAuth) {
//       //     // eslint-disable-next-line no-console
//       //     console.log('-----------------111111')
//       //     // next()
//       //   } else {
//       //     // eslint-disable-next-line no-console
//       //     console.log('-----------222222222')
//       //     // next()
//       //   }
//       // })

//     }
//   }
//   return response
// }, function (error) {
//   // Do something with response error  https://sier.creatilab.cn/   http://192.168.96.102/
//   return Promise.reject(error)
// })
const base = 'http://101.132.34.30/index.php/'

export const POST = (url, params) => {
  return axios.post(`${base}${url}`, qs.stringify(params)).then(res => res.data)
}
export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}
export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}
export const POSTUP = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}
export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {
    params: params
  }).then(res => res.data)
}