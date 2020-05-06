<template>
  <div class="app" :style="{background:`url(${this.base+'mapbg.png'})`}">
    <!-- <div class="boxHead">生态共建</div> -->
    <partTitle :isWhite='false' :titleText="'生态共建'" style="padding: 40px 0 20px"/>
    <!-- tab切换 开始 -->
    <div class="headTitTab">
      <div
        class="tablink"
        :class="(isShowTab===index?'tabOn':'')"
        v-for="(items, index) in list"
        :key="index"
        @click="changeTab(index)"
      >{{items.firstInfm.infmTitle}}</div>
    </div>
    <!-- tab切换 结束 -->
    <!-- 盒子1 开始 -->
    <div class="showBoxs show1" v-show="isShowTab===0?true:false">
      <swiper-one></swiper-one>
    </div>
    <!-- 盒子1 结束 -->
    <!-- 盒子2 开始 -->
    <div class="showBoxs show2" v-show="isShowTab===1?true:false">
      <swiper-two></swiper-two>
    </div>
    <!-- 盒子2 结束 -->
    <!-- 盒子3 开始 -->
    <div class="showBoxs show3" v-show="isShowTab===2?true:false">
      <div class="hezuoForm">
        <p class="ptit">合作交流</p>
        <div class="allbox">
          <div class="onebox">
            <p class="pdes">产品咨询 OR 代理咨询</p>
            <select class="inpval">
              <option value="" v-for="(item, index) in optionList" :key="index">{{item}}</option>
            </select>
          </div>
          <div class="onebox">
            <p class="pdes">留下您的姓名:</p>
            <input type="text" class="inpval" placeholder="请输入" v-model="name"/>
          </div>
          <div class="onebox">
            <p class="pdes">您的联系方式:</p>
            <input type="tel" class="inpval" placeholder="请输入" v-model="phone"/>
          </div>
          <div class="onebox subbox">
            <button type="button" class="subbtn">提交信息</button>
          </div>
        </div>
      </div>
    </div>
    <!-- 盒子3 结束 -->
    
  </div>
</template>
<script>
import swiperOne from "./swiperOne";
import swiperTwo from "./swiperTwo";
export default {
  name: "ecology",
  data() {
    return {
      list: [],
      bg: "https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E4%B8%AD%E5%9B%BD%E5%9C%B0%E5%9B%BE%E8%83%8C%E6%99%AF.png",
      isShowTab: 0, //索引决定显示tab选项第几个
      phone: "",
      name: "",
      sel: "",
      optionList: ['菜单1','菜单2','菜单3']
    };
  },
  components: {
    swiperOne,
    swiperTwo
  },
  created() {
    this.$nextTick(() => {
      this.getmessage();
    });
  },
  methods: {
    getmessage() {
      this.$api.getInfmAndSubList({
        infmTypeId: 6
      }).then(res => {
        if (res.code == 200) {
          let list = res.data.list
          this.list = list
        }
      })
    },
    // tab切换
    changeTab(index) {
      this.isShowTab = index;
    }
    
  }
};
</script>

<style scoped lang="less">
* {
  font-family: "microsoft yahei", "微软雅黑";
}
.app {
  // 背景图片
  min-height: 700px;
  width: 100%;
  background-position: center center !important;
  // 标题文字
  .boxHead {
    background: -orange;
    text-align: center;
    font-size: 24px;
    color: #333;
    padding: 20px 0;
  }
  // tab切换
  .headTitTab {
    // background: -pink;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #d6d6d6;
    .tablink {
      display: inline-block;
      width: auto;
      cursor: pointer;
      font-size: 20px;
      color: #333;
      padding-bottom: 15px;
      position: relative;
    }
    .tablink:hover,
    .tabOn {
      color: #007ab7;
    }
    .tablink:hover:after,
    .tabOn:after {
      content: "";
      display: inline-block;
      width: 144px;
      height: 8px;
      background: url(http://182.148.48.236:54321/source/images/ecology_active.png);
      background-size: 100% 100% !important;
      background-repeat: no-repeat !important;
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .showBoxs {
    // tab切换内容
    padding-top: 30px;
    max-width: 1200px;
    margin: 0 auto;
  }
  .show1 {
    // 盒子1
    background: -pink;
  }
  .show2 {
    background: -orange;
    
  }
  .show3 {
    background: -greenyellow;
    .hezuoForm {
      display: block;
      margin: 0 auto;
      width: 400px;
      height: auto;
      border-top: 3px solid #007ab7;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 3px;
      box-shadow: 0 0 10px #aaaaaa;
      .ptit {
        font-size: 24px;
        font-weight: 700;
        padding: 15px 0 50px 0;
        text-align: center;
      }
      .allbox {
        width: 90%;
        margin: 0 auto;
        .onebox {
          padding-bottom: 20px;
          .pdes {
            font-size: 18px;
            color: #333;
            padding-bottom: 10px;
          }
          .inpval {
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-indent: 1em;
            font-size: 16px;
            border: 1px solid #cccccc;
            &:focus {
              border: 1px solid #999999;
            }
          }
          .subbtn {
            display: block;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: #007ab7;
            color: #ffffff;
            &:hover {
              cursor: pointer;
              background: #1697d8;
            }
          }
        }
        .subbox {
          padding-bottom: 30px;
        }
      }
    }
  }
 
}
</style>

