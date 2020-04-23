<template>
  <div class="loginBox" :style="{background:`url(${this.base+'logBg.png'})`}">
    <div class="posForm">
      <!-- 亚卓智慧平台 -->
      <div class="titletext">
        <div class="titlebody">亚卓智慧平台</div>
        <div class="titlefooter">Yazhuo Wisdom Platform</div>
      </div>
      <!-- 表单开始 -->
      <div class="loginForm">
        <!-- 登录中心 -->
        <div class="centerDiv inpDivs">
          <div class="titlecenter">登录中心</div>
          <div class="titleline"></div>
        </div>
        <!-- 账号 -->
        <div class="accountDiv inpComs inpDivs">
          <div class="picture">
            <i class="iconfont iconzhanghao"></i>
          </div>
          <div class="inputtxt">
            <input type="text" placeholder="请输入您的账号" class="yourAccount" v-model="username" @keyup.enter="loginTurn()"/>
          </div>
        </div>
        <!-- 密码 -->
        <div class="passwordDiv inpComs inpDivs">
          <div class="picture">
            <i class="iconfont iconmima"></i>
          </div>
          <div class="inputtxt">
            <input type="password" placeholder="请输入您的密码" class="yourPass" v-model="password" @keyup.enter="loginTurn()"/>
          </div>
        </div>
        <div class="buttonDiv inpDivs">
          <button class="comBtn1" @click="loginTurn()">立即登录</button>
          <a href="javascript:;" class="icons icon1">
            <img :src="this.base+'log1.png'" @click="doWxLogin()"/>
          </a>
          <a href="javascript:;" class="icons icon2">
            <img :src="this.base+'log2.png'" @click="doDingLogin()"/>
          </a>
        </div>
        <div class="forgetDiv inpDivs">
          <a href="javascript:;" class="forgetLink">忘记密码?</a>
        </div>
      </div>
      <!-- 表单结束 -->
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import tail from "@/components/tail/tail";
export default {
  name: "login",
  components: {
    tail
  },
  data() {
    return {
      loginList: [], //登录接口
      username: "", //账号
      password: "", //密码
      redirectPath: '', // 重定向路径
      userAgent: ''  // 浏览器属于pc还是移动端
    };
  },
  created() {
    this.checkToken()
    this.redirectPath = this.$route.query.redirectPath
    this.judgeUserType()
  },
  methods: {
    init () {
      this.orient = this.$route.query.orient
    },
    // 验证token是否失效
    checkToken () {
      let token = localStorage.getItem('token')
      if (this.isblank(token)){
        return false
      }
      this.$api.checkTk({
        jwt: token
      }).then(res => {
        if (res.code == 200 && res.data == 0) {
          this.$router.push('/home')
        }
      })
    },
    // 立即登录
    loginTurn() {
      if (this.isblank(this.username)){
        this.$msg('请输入用户名')
        return false
      }
      if (this.isblank(this.password)){
        this.$msg('请输入密码')
        return false
      }
      // 因需求中并未说明用户名和密码的基础验证要求，因此前端暂未处理
      this.$api.login({
        username: this.username,
        password: this.password
      }).then(res => {
        console.log(res)
        if (res.code == 200){
          let token = res.data.authorization
          localStorage.setItem('token', token)
          //  登录成功之后如果有重定向路径则跳转过去，没有则跳转首页
          if (this.redirectPath) {
            this.$router.push(this.redirectPath)
            // this.$router.push(this.orient)
          } else {
            this.$router.push('/home')
          }
        }
      })
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
    // 执行微信登录
    doWxLogin () {
      let state = 'pc'
      this.$api.getCode({
        state: state
      }).then(res => {
        console.log(res)
        if (res.code == 200){
          window.location.href = res.data
        }
      })
    },
    doDingLogin () {
      let dd = this.$dd
      dd.ready(function () {
      })
    }
  }
};
</script>

<style scoped>
/* 页面公共huang */
* {
  font-family: "microsoft yehei", "微软雅黑";
}
a {
  text-decoration: none;
  color: #333;
}
img {
  border: none;
  vertical-align: middle;
}
input,
button {
  outline: none;
  border: none;
}
/* 背景图 */
.loginBox {
  display: block;
  height: 100%;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-size: 100% 100% !important;
  position: relative;
  background: #1e9fff;
}
/* 登录框 */
.posForm {
  width: 540px;
  height: 640px;
  position: absolute;
  top: 50%;
  left: 77%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 5px #fff;
}
/* 亚卓智慧平台 */
.titletext {
  padding: 30px 0;
  width: 100%;
  text-align: center;
}
.titletext .titlebody {
  color: #333;
  font-size: 48px;
  font-weight: bold;
  padding-bottom: 10px;
}
.titletext .titlefooter {
  color: #808080;
  font-size: 26px;
}
/* 表单公共 */
.inpComs {
  display: flex;
  height: 68px;
  overflow: hidden;
}
.inpComs .picture {
  height: 68px;
  width: 68px;
  background: #007ab7;
  text-align: center;
  line-height: 68px;
  border-radius: 8px 0px 0px 8px;
  float: left;
}
.inpComs .inputtxt {
  display: block;
  flex: 1;
  float: left;
  width: 82%;
}
.inpComs input {
  text-indent: 1em;
  font-size: 24px;
  height: 68px;
  line-height: 68px;
  background: #ebebeb;
  display: block;
  width: 100%;
  box-shadow: 0 0 4px #bbb inset;
}
.inpComs input:focus {
  box-shadow: 0 0 4px #1e9fff inset;
}
.iconfont {
  font-size: 40px;
  color: #ffffff;
}
.inpDivs {
  margin-bottom: 30px;
  width: 100%;
}
.loginForm {
  width: 90%;
  margin: 0 auto;
}
/* 登录中心和下划线 */
.titlecenter {
  width: 180px;
  color: #007ab7;
  font-size: 24px;
  padding-bottom: 5px;
}
.titleline {
  width: 48px;
  height: 4px;
  background: #007ab7;
  border-radius: 2px;
}
/* 提交按钮 */
.buttonDiv {
  display: flex;
  align-items: center;
}
.buttonDiv .icons {
  display: inline-block;
  width: 32px;
  height: 32px;
  background: #1e9fff;
  overflow: hidden;
  border-radius: 100%;
  margin-left: 20px;
}
.buttonDiv .icons:hover {
  box-shadow: 0 0 4px #1e9fff;
}
.buttonDiv .icons img {
  display: block;
  width: 100%;
  height: 100%;
}
.comBtn1 {
  display: inline-block;
  height: 60px;
  color: #fff;
  background: #007ab7;
  font-size: 26px;
  border-radius: 4px;
  padding: 0 60px;
}
.comBtn1:hover {
  cursor: pointer;
  background: #2095d0;
}
/* 忘记密码 */
.forgetDiv .forgetLink {
  color: #b3b3b3;
  font-size: 20px;
}
.forgetDiv .forgetLink:hover {
  color: #007ab7;
}
/* 1600px */
@media (max-width: 1600px) {
  .posForm {
    width: 500px;
    height: 600px;
  }
}
/* 1440px */
@media (max-width: 1440px) {
  .posForm {
    left: 78%;
    width: 490px;
  }
  .titletext .titlebody {
    font-size: 44px;
  }
  .titletext .titlefooter {
    font-size: 24px;
  }
}
/* 1366px */
@media (max-width: 1366px) {
  .posForm {
    width: 470px;
  }
}
</style>