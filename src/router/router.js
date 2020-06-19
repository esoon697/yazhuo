
import login from '@/view/login/login.vue'
import middleEducation from '@/view/middleEducation/middleEducation.vue'
import homeIndex from '@/view/homeIndex/homeIndex'
import WisdomPlatform from '@/view/wisdomPlatform/wisdomPlatform.vue'
import School from '@/view/school/school.vue'
import solveCase from '@/view/solveCase/solveCase.vue'

export const links = [
    // 微信头像那个问题应该是你哪里没写对，你可以在测试上看img的src是什么，如果不显示，就看network里面图片的格式有没有问题。
    { path: '*', redirect: '/home' },
    {
        title: '首页',
        path: '/home',
        component: homeIndex
    },
    {
        title: '智慧平台',
        path: '/wisdomPlatform',
        name: 'wisdomPlatform',
        component: WisdomPlatform
    },
    {
        title: '亚卓学院',
        path: '/school',
        name: 'school',
        component: School
    },
    {
        title: '登录',
        path: '/login',
        component: login
    },
    {
        title: '中职教育',
        path: '/middleEducation',
        component: middleEducation
    },
    {
        title: '解决方案',
        path: '/solveCase',
        component: solveCase
    }
]
export const routers = [...links]
