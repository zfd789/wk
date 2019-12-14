import * as API from '.'
export default {
    //  我要发布
    publish:params =>{
        return API.POST('index.php/api/user/release_order',params)
    }
}