import * as API from '.'
export default {
    login: params => {
        return API.POST('api/login', params)
    },
    register: params => {
        return API.POST('api/register', params)
    }
}