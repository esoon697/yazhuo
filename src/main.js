import Vue from 'vue'
import App from './App.vue'
import {router} from '@/router/index.js'
import store from './store/index'
import api from '@/axios/api'
import * as dd from 'dingtalk-jsapi'
// 引入工具文件
import '@/utils/tool.js'
// 按需引入ant组件
import 'ant-design-vue/dist/antd.css'
import { Message, Tooltip, Popover } from 'ant-design-vue';
Vue.use(Message);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.prototype.$message = Message
Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.prototype.$dd = dd; // 将api挂载到vue的原型上

// 全局注册header
import headerAsideMenu from './components/asideMenu/headerAsideMenu.vue'
Vue.component('headerAsideMenu', headerAsideMenu)

// 全局注册footer
import tail from './components/tail/tail.vue'
Vue.component('tail', tail)

// 全局注册回到顶部组件
import backTop from './components/backTop/backTop.vue'
Vue.component('backTop', backTop) 

import partTitle from './components/partTitle/partTitle.vue'
Vue.component('partTitle', partTitle)

// 全局注册绑定账号弹框
import bindAccount from './components/bindAccount/bindAccount.vue'
Vue.component('bindAccount', bindAccount) 

const base = 'http://182.148.48.236:54321/source/images/'
Vue.prototype.base = base

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
