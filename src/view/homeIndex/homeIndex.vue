<template>
  <div>
    <!-- 头部 -->
    <header-asideMenu/>
    <!-- 亚卓教育素养培养生态空间 -->
    <banner />
    <!-- 亚卓教育素养培养全场景覆盖 -->
    <solve />
    <!-- 精品课程展示 -->
    <curriculum />
    <!-- 智慧教学 -->
    <wisdom />
    <!-- 生态共建 -->
    <ecology />
    <!-- 底部 -->
    <tail />
    <!-- 账号与微信账号绑定窗口 -->
    <bind-account :bindShow = bindShow></bind-account>
    <!-- 回到顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
import banner from "./components/banner.vue";
import curriculum from "./components/curriculum.vue";
import wisdom from "./components/wisdom.vue";
import solve from "./components/solve.vue";
import ecology from "./components/ecology.vue";
import {mapState} from 'vuex'
export default {
  components: {
    banner,
    solve,
    curriculum,
    wisdom,
    ecology
  },
  data () {
    return{
      userAgent: '',
      bindShow: false, // 绑定账户弹窗
      // headImgUrl: ''
    }
  },
  computed: {
    // ...mapState(['btnShow']),
  },
  mounted () {
    // this.dingdingInt()
    // console.log('bbbbbbbbbbbbbbbbbbbbbbbbbb', this.btnShow)
    this.init()
    this.getHeadImgUrl()
  },
  methods:{
    // 获取地址栏中的code
    getQueryString (name) {  
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
          var r = window.location.search.substr(1).match(reg);  
          if (r != null) return unescape(r[2]); return null;    
    },
    // 判断用户是PC端还是移动端
    judgeUserType () {
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          //移动端
          this.userAgent = 'app'
      } else {
          //pc端
          this.userAgent = 'pc'
      }
    },
    /*
     *  1.首页加载的时候如果有code就调接口判断该用户账号与其微信号是否关联
     *  2.根据接口返回结果，如果bindFlag为true则已关联，用户可直接浏览网站; 为false则显示绑定账户弹窗   
     */
    init () {
      if (this.isblank(this.getQueryString('code'))) {
        console.log('未使用微信重定向跳转到首页')
      } else {
        this.judgeUserType()
         let code = this.getQueryString('code')
         // code获取到之后立即更新浏览器中url地址的显示 
         history.pushState({},'官网','http://portal.yazhuokj.com/home')
         this.$api.getBind({
          //  code: '061Sniq817EzxL11v9s81wSqq81Sniq8',
           code: code,
           state: this.userAgent
         }).then(res => {
           if (res.code == 200) {
             if (res.data.bindFlag) {
                //  已关联,视为登录流程完全成功,将token存到localstorage
                let token = res.data.authorization
                localStorage.setItem('token', token)
                this.$store.state.btnShow = false
                // 应该在这两个地方写
                if (res.data.usWechat.headImgUrl) {
                  let headImgUrl = res.data.usWechat.headImgUrl
                  localStorage.setItem('headImgUrl', headImgUrl)
                  this.$store.state.headImgUrl = headImgUrl
                }else{
                  console.log('usWechat或headImgUrl为空')
                  // this.headImgUrl = 'http://182.148.48.236:54321/source/educationPlatform/avatar.jpeg'
                }
            } else{
                //  未关联,将accessToken和openid存到session,并弹出绑定账户的弹窗
                let accessToken = res.data.usWechat.accessToken
                let openid = res.data.usWechat.openid
                sessionStorage.setItem('accessToken', accessToken)
                sessionStorage.setItem('openid', openid)
                this.bindShow = true
                this.$store.state.btnShow = false
            }
            console.log(res.data)
            // if (res.data.usWechat.headImgUrl) {
            //   this.headImgUrl = res.data.usWechat.headImgUrl
            // }else{
            //   console.log('usWechat或headImgUrl为空')
            //   this.headImgUrl = 'http://182.148.48.236:54321/source/educationPlatform/avatar.jpeg'
            // }
           }
         })
      }
    },
    getHeadImgUrl () {
      if (localStorage.getItem('headImgUrl')) {
        this.$store.state.headImgUrl = localStorage.getItem('headImgUrl')
      }
      if (localStorage.getItem('token')) {
        this.$store.state.btnShow = false
      }
    }
    // dingdingInt () {
    //   let dd = this.$dd
    //   dd.ready(function () {
    //     dd.runtime.permission.requestAuthCode({
    //         corpId: "ding5f7acb9ee337eab8a39a90f97fcb1e09",
    //         onSuccess: function(result) {
    //           console.log(result)
    //         /*{
    //             code: 'hYLK98jkf0m' //string authCode
    //         }*/
    //         },
    //         onFail : function(err) {
    //           alert('error' + err)
    //           console.log(err)
    //         }
        
    //     })
    //   })
    // }
  }
}
</script>


<style scoped lang="less">
</style>
