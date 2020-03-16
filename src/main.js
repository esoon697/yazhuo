import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// xiesiteng1
// huangqinchao1
Vue.use(VueAwesomeSwiper)

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
