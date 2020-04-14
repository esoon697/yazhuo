<template>
  <div class="main" v-if="bindShow">
    <div class="bind-wrap flex-center">
      <div class="bind">
        <!-- 顶部背景 -->
        <div class="wx-bind">
          <img :src="base + 'wx-header.png'" alt="" class="bg">
          <img :src="base + 'wx-cancel-white.png'" alt="" class="cl" @click="close()">
        </div>
        <!-- 绑定账号标题 -->
        <div class="bind-title flex-center">绑定账号</div>
        <!-- 表单 -->
        <div class="bind-form">
          <div class="bind-username flex-center-y">
            <span>用户名：</span>
            <input type="text" placeholder="请输入账号（只能绑定一次账号）" v-model="username">
          </div>
          <div class="bind-password flex-between">
            <p>密<span>码：</span></p>
            <input type="password" placeholder="请输入密码" v-model="password">
            <a href="javascript:void(0)">忘记密码？</a>
          </div>
          <!-- 协议 -->
          <div class="agree flex-center">
            <input type="checkbox" v-model="checked" @click.stop="select()">
            <p>阅读并</p>
            <span @click="showstate = true">同意用户协议</span>
          </div>
          <!-- 确认登录 -->
          <div :class="['sure-btn', checked ? 'sure-btn-active' : '']" @click="sureLogin()">确认登录</div>
        </div>
      </div>
    </div>

    <!-- 协议 -->
    <agreement :showstate="showstate" @tocancel="showstate = false"></agreement>
  </div>
</template>

<script>
import agreement from './components/agreement'
export default {
  data () {
    return{
      showstate: false, // 协议显示
      checked: false, // 协议勾选
      username: '', // 用户名
      password: '', // 密码
    }
  },
  props: ['bindShow'],
  components:{
    agreement
  },
  mounted () {

  },
  methods: {
    // 弹窗关闭
    close () {
      this.bindShow = false
    },
    // 协议勾选框
    select () {
      this.checked = !this.checked
    },
    // 确认登录
    sureLogin () {
      if (!this.checked) {
        return false
      }
      if (this.isblank(this.username)) {
        this.$msg('请输入用户名')
        return false
      }
      if (this.isblank(this.password)) {
        this.$msg('请输入密码')
        return false
      }
      // 执行确认登录的接口
      this.$api.bindAccount({
        username: this.username,
        password: this.password,
        access_token: sessionStorage.getItem('accessToken'),
        openid: sessionStorage.getItem('openid')
      }).then(res => {
        if (res.code == 200) {
          // 登录成功
          let token = res.data.authorization
          localStorage.setItem('token', token)
          this.$store.state.btnShow = false
          if (res.data.usWechat.headImgUrl) {
            let headImgUrl = res.data.usWechat.headImgUrl
            localStorage.setItem('headImgUrl', headImgUrl)
            this.$store.state.headImgUrl = headImgUrl
          }
          this.close()
          // 应该在这两个地方写
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .main{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 999;
    .bind-wrap{
      width: 100%;
      height: 100%;
      min-width: 100vw;
      min-height: 100vh;
      // 内容区
      .bind{
        width: 600px;
        height: 575px;
        background-color: #fff;
        border-radius: 5px;
        .wx-bind{
          width: 100%;
          height: 125px;
          position: relative;
          .bg{
            width: 100%;
            height: 100%;
          }
          .cl{
            width: 12px;
            height: 12px;
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }
        }
        // 标题
        .bind-title{
          font-size: 24px;
          color: #999;
          padding: 30px 0;
          position: relative;
          &:before{
            content: '';
            width: 230px;
            height: 1px;
            background: #999;
            position: absolute;
            left: 0;
          }
          &:after{
            content: '';
            width: 230px;
            height: 1px;
            background: #999;
            position: absolute;
            right: 0;
          }
        }
        // 表单
        .bind-form{
          padding: 0 30px;
          box-sizing: border-box;
          // 用户名输入框
          .bind-username{
            width: 100%;
            border-bottom: 1px solid #ddd;
            height: 45px;
            line-height: 45px;
            margin-bottom: 50px;
            span{
              width: 95px;
              font-size: 22px;
              color: #999;
            }
            input{
              height: 40px;
              line-height: 40px;
              width: 440px;
              font-size: 22px;
              color: #333;
            }
            input::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
              font-size: 16px;
              padding: 10px 0 0 100px;
            }
            input::-moz-placeholder { /* Firefox 19+ */  
              font-size: 16px;
              padding: 10px 0 0 100px;
            }
            input:-ms-input-placeholder { /* IE 10+ */ 
              font-size: 16px;
              padding: 10px 0 0 100px;
            }
            input:-moz-placeholder { /* Firefox 18- */ 
              font-size: 16px;
              padding: 10px 0 0 100px;
            }
          }
          // 密码输入框
          .bind-password{
            width: 100%;
            border-bottom: 1px solid #ddd;
            height: 45px;
            line-height: 45px;
            margin-bottom: 100px;
            p{
              width: 95px;
              font-size: 22px;
              color: #999;
              span{
                padding-left: 20px;
              }
            }
            input{
              height: 40px;
              line-height: 40px;
              width: 360px;
              font-size: 22px;
              color: #333;
            }
            input::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
              font-size: 16px;
              padding: 10px 0 0 95px;
            }
            input::-moz-placeholder { /* Firefox 19+ */  
              font-size: 16px;
              padding: 10px 0 0 95px;
            }
            input:-ms-input-placeholder { /* IE 10+ */ 
              font-size: 16px;
              padding: 10px 0 0 95px;
            }
            input:-moz-placeholder { /* Firefox 18- */ 
              font-size: 16px;
              padding: 10px 0 0 95px;
            }
          }
        }
        // 阅读协议
        .agree{
          font-size: 16px;
          margin-bottom: 15px;
          input{
            cursor: pointer;
          }
          p{
            padding-left: 10px;
          }
          span{
              color: #5179F4!important;
              cursor: pointer;
            }
        }
        // 确认登录
        .sure-btn{
          width: 540px;
          height: 57px;
          text-align: center;
          line-height: 57px;
          margin: 0 auto;
          cursor: pointer;
          border-radius: 5px;
          font-size: 24px;
          color: #fff;
          background: rgb(212, 212, 212);
        }
        .sure-btn-active{
          background-color: #4075F4;
        }
      }
    }
  }
</style>