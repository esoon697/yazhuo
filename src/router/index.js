import Vue from 'vue'
import Router from 'vue-router'
import { routers } from '@/router/router.js'
Vue.use(Router)
export const router = new Router({
    mode: 'history',
    routes: routers,
})


