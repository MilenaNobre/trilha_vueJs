import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-54c33-default-rtdb.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'abc123'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios;
        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        });
        Vue.prototype.$http.interceptors.response.use(result => {
            const array = []
            for(let key in result.data) {
                array.push({id: key, ...result.data[key]})
            }

            result.data = array
            return result
        })
    }
})