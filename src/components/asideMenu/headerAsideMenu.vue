<template>
  <div class="wrapper flex-between" :class="{navBg:isNavBg}">
    <div class="lef-box">
      <div class="logo">
        <img :src="this.base+'logo.png'" />
      </div>
      <div class="link-list">
        <div class="link-box" v-for="item in linkList" :key="item.id">
          <a
            :href="item.url"
            :class="['link', active == item.id ? 'link-active' : '', item.children.length ? 'more' : '']"
            @click="choose(item)"
          >{{item.name}}</a>
          <ul class="slidedown-list" v-if="item.children.length">
            <li v-for="_item in item.children" :key="_item.id">
              <a @click="goPage(_item, item)">{{_item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-wrap flex-between">
      <input type="text" placeholder="请输入关键词" class="search-input" />
      <img :src="base + 'search-icon.png'" alt="" class="search-icon" @click="toSearch()">
    </div>
    <div class="button-group" v-if="btnShow">
        <a :href="item.url" v-for="item in btns" :key="item.id" class="link">{{item.name}}</a>
    </div>
    <a v-else href="javascript:;" @click="goPersonalCenter">
      <img class="avatar" :src="headImgUrl">
    </a>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      // avatar: this.headImgUrl,
      // btnShow: false,
      active: 0,
      logoText: "YAZHUO亚卓教育",
      isNavBg: false,
      linkList: [
          {
              id: "a01",
              url: "/",
              name: "首页",
              children: []
          },
          {
              id: "a02",
              url: "/middleEducation",
              // url: 'page2',
              name: "课程资源",
              children: []
          },
          {
              id: "a03",
              url: "/wisdomPlatform",
              name: "智慧平台",
              children: []
          },
          {
              id: "a04",
              url: "/solveCase",
              name: "解决方案",
              children: []
          },
          {
              id: "a05",
              url: "/school",
              name: "亚卓学院",
              children: []
          }
      ],
        btns: [
          {
            id: "b01",
            url: "/login",
            name: "登录"
          }
      ]
    }
  },
    computed: {
      ...mapState(['btnShow', 'headImgUrl']),
    },
    created () {
      this.getNavBarInfo()
      this.isCurrent()
      this.getHeadImgUrl()
      // 问题出在这里，
      // this.btnShow = this.isblank(localStorage.getItem('headImgUrl'))
    },
    mounted() {
      this.$nextTick(() => {
        window.addEventListener("scroll", this.scrollToTop, true);
      });
    },
    destroyed() {
      window.removeEventListener("scroll", this.scrollToTop, true);
    },
    methods: {
        getNavBarInfo () {
          this.$api.getNavBarInfms({
            infmTypeId: 11
          }).then(res => {
            if (res.code == 200) {
              // console.log('res.data---------', res.data)
              this.linkList = res.data.list.map(e => {
                return {
                  id: 'a0' + (e.sort + 1),
                  url: e.url,
                  name: e.name,
                  children: e.children
                }
              })
            }
          })
        },
        goPage(data, item) {
            // 点击之后把:before伪元素移动到对应父元素上
            sessionStorage.setItem('headerId', item.id)
            this.active = sessionStorage.getItem('headerId')
            // console.log(data.url)
            this.$router.push(data.url)
        },
        // 导航栏切换
        choose (item) {
            this.active = item.id
        },
        toSearch () {
          // do search from this
        },
        // 根据路由路径来显示对应导航栏下面的横线
        isCurrent () {
            let path = this.$route.path
            switch (path) {
                case '/home':
                    this.active = 'a01'
                    break
                case '/middleEducation':
                    this.active = 'a02'
                    break
                case '/wisdomPlatform':
                    this.active = 'a03'
                    break
                case '/solveCase':
                    this.active = 'a04'
                    break
                case '/school':
                    this.active = 'a05'
                    break
            }
        },
        // 为了计算距离顶部的高度，当高度大于600显示回顶部图标，小于60则隐藏
        scrollToTop() {
          const _this = this;
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          _this.scrollTop = scrollTop;
          if (_this.scrollTop >= 600) {
            _this.isNavBg = true;
          } else {
            _this.isNavBg = false;
          }
        },
        getHeadImgUrl () {
          if (localStorage.getItem('headImgUrl')) {
            this.$store.state.headImgUrl = localStorage.getItem('headImgUrl')
          }
          if (localStorage.getItem('token')) {
            this.$store.state.btnShow = false
          }
        },
        goPersonalCenter () {
          // let targetUrl = 'http://10.10.10.213:8080/'
          let targetUrl = 'http://personal.yazhuokj.com'
          let token = localStorage.getItem('token')
          this.url = targetUrl + '?token=' + token + '&headImgUrl=' + this.headImgUrl
          console.log(this.url)
          this.checkToken()
        },
        // 验证token是否失效
        checkToken () {
          let token = localStorage.getItem('token')
          if (this.isblank(token)){
            this.$router.push('/login')
            return false
          }
          this.$api.checkTk({
            jwt: token
          }).then(res => {
            if (res.code == 200 && res.data == 0) {
              window.location.href = this.url
            } else {
              this.$message.warning('登录失效！请重新登录')
              this.$router.push('/login')
            }
          })
        }
    },
    // watch: {
    //   headImgUrl (o, n) {
    //     this.headImgUrl =  o
    //     this.avatar = o
    //     console.log(this.avatar)
    //   }
    // }
}
</script>
<style lang="less">
@media screen and (max-width: 1640px) {
  .logo {
    margin-right: 100px !important;
  }
  .search-wrap {
    width: 280px !important;
  }
  .search-input {
    width: 230px !important;
  }
}
@media screen and (max-width: 1200px) {
  .logo {
    margin-right: 50px !important;
  }
}
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 80px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0 60px;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 999;
  // min-width: 1200px;
  width: 100%;
  transition: background-color .5s linear;
  @media screen and (max-width: 1200px){
    padding: 0;
    margin: auto;
  }
}
.navBg{
  background-color: #0561A9;
  opacity: .95;
}
.logo {
  margin-right: 310px;
}
.link-box {
  position: relative;
  display: inline-block;
  .link {
    position: relative;
    margin-right: 30px;
    color: #fff;
    text-decoration: none;
    display: block;
  }
  // .link:after{
  //     width: 36px;
  //     height: 4px;
  //     background-color: #fff;
  //     position: absolute;
  // }
  .link-active {
    &:before {
      content: "";
      width: 36px;
      height: 4px;
      background-color: #fff;
      position: absolute;
      bottom: -27px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .slidedown-list {
    position: absolute;
    list-style: none;
    width: 240px;
    background: #fff;
    padding: 20px 0;
    text-align: center;
    border-radius: 10px;
    left: -73%;
    top: 80%;
    display: none;
    a {
      display: flex;
      height: 30px;
      align-items: center;
      justify-content: center;
      color: #000;
      cursor: pointer;
      &:hover {
        background: #007ab7;
        color: #fff0b7;
      }
    }
    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 13px solid #ffffff;
      left: 45%;
      top: -13px;
    }
    &:hover {
      display: block;
    }
  }
  &:hover {
    .slidedown-list {
      display: block;
    }
  }
}
.link {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
.button-group {
  border: #fff 1px solid;
  padding: 3px 8px;
}
.avatar{
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.more {
  &:after {
    content: "";
    position: absolute;
    top: 8px;
    right: -15px;
    display: block;
    width: 0;
    height: 0;
    border-width: 8px 5px 0;
    border-style: solid;
    border-color: #fff transparent transparent;
  }
}
.lef-box {
  display: flex;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .link-list {
    height: 100%;
    display: flex;
    align-items: center;
    .link-box {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
.search-wrap {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border-radius: 20px;
  background-color: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  .search-input {
    height: 30px;
    line-height: 30px;
    border-radius: 20px;
    width: 350px;
    font-size: 14px;
    padding-left: 5px;
    box-sizing: border-box;
    color: #333;
  }
  .search-icon{
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
}
</style>
