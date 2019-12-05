/**
 *
 * 用户相关api
 */

import * as API from '.'

export default {
  // 获取省列表
  province_list: params => {
    return API.GET('select/province_list', params)
  },
  //   获取市列表
  city_list: id => {
    // eslint-disable-next-line no-undef
    return API.GET(`/select/city_list?id=${id}`, id)
  },
  District_list: id => {
    // eslint-disable-next-line no-undef
    return API.GET(`/select/city_list?id=${id}`, id)
  },

  // 获取省
  getProvince: params => {
    return API.GET('select/province_list', params)
  },
  // 获取市
  getCity: params => {
    return API.GET('/select/city_list', params)
  },
  // 获取区
  getDistrict: params => {
    return API.GET('/select/city_list', params)
  }
}
