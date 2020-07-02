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
    this.dingdingInt()
    // this.init()
    // this.getHeadImgUrl()
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
                // 获取用户头像隐藏登录按钮
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
           }
         })
      }
    },
    _getDingCode() {
      const host = window.location.host
      let ipUrl = 'http://' + host + '/#/home-page'
            dd.ready(function() {
                var corpId, strs
                var url = location.search
                if (url.indexOf('?') !== -1) {
                    var str = url.substr(1)
                    strs = str.split('=')
                    corpId = strs[1]
                }
                dd.runtime.permission.requestAuthCode({
                    corpId: corpId,
                    onSuccess: function(result) {
                        let code = result.code
                        let flag = 1
                        sessionStorage.clear()
                        postDingCode(corpId, code, flag).then((res) => {
                            let unionid = res.unionid
                            let flag = res.flag
                            sessionStorage.setItem('unionid', unionid)
                            sessionStorage.setItem('bindLogin', flag)
                            window.location.href = ipUrl
                        })
                    },
                    onFail: function(err) {
                        alert(JSON.stringify(err))
                    }
                })
            })
            dd.error((error) => {
                alert('error')
                alert(`dd error: ${JSON.stringify(error)}`)
            })
        },
    dingdingInt () {
      let dd = this.$dd
      const host = window.location.host
      this.ipUrl = 'http://' + host + '/home'
      let that = this
      dd.ready(function () {
        console.log('location----------', location)
        var corpId, strs
        var url = location.search
        if (url.indexOf('?') !== -1) {
            var str = url.substr(1)
            strs = str.split('=')
            that.corpId = strs[1]
            console.log('that.corpIdddddd', that.corpId)
        }
        dd.runtime.permission.requestAuthCode({
            corpId: that.corpId,
            // corpId: 'ding9216e35940e361e5bc961a6cb783455b',
            onSuccess: function(result) {
              console.log('res:::::', result)
              that.code = result.code
              that.postDingLogin()
            },
            onFail : function(err) {
              console.log(err)
            }
        })
      })
    },
    postDingLogin () {
      this.$api.postDingLogin({
        code: this.code,
        corpId: this.corpId,
        // corpId: 'ding9216e35940e361e5bc961a6cb783455b',
        flag: 1
      }).then(res => {
        if (res.code === 200) {
          console.log(res)
          localStorage.setItem('token', res.message)
          // window.location.href = this.ipUrl
        }
      })
    }
  }
}
</script>


<style scoped lang="less">
</style>
