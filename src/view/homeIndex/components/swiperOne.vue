<template>
  <div class="main">
    <div class="myswiper flex-center">
      <div class="left-arrow flex-center" @click="pre()" v-show="pageNum !== 1">
        <img :src="base +'arrowfl.png'" alt="">
      </div>
      <div class="right-arrow flex-center" @click="next()" v-show="!isOver">
        <img :src="base + 'arrowfr.png'" alt="">
      </div>
      <!-- 轮播内容 -->
      <div class="myswiper-inner-wrap">
        <div class="myswiper-inner" id="slide">
          <div 
            class="myswiper-item"
            :style="{background:`url(${base + 'zhuanjiabg.png'})`}"
            v-for="(item, index) in list" :key="index"
            >
              <img :src="item.infmImgUri" alt="" class="myswiper-item-head">
              <p class="myswiper-item-name">{{item.infmTitle}}</p>
              <!-- <a-tooltip placement="bottom" :title="item.infmContent">
                <p class="myswiper-item-title ellipsis">{{item.infmContent}}</p>
              </a-tooltip> -->
              <a-popover placement="bottom">
                <template slot="content">
                  <p style="width: 200px">{{item.infmContent}}</p>
                </template>
                <p class="myswiper-item-title ellipsis">{{item.infmContent}}</p>
              </a-popover>
          </div>
        </div>
      </div>
      <!-- 轮播内容end -->
    </div>
  </div>
</template>

<script>
export default {
  // props: ['company'],
  data () {
    return{
      list: [],
      pageNum: 1,
      pageSize: 5,
      isOver: false,
      showRightArrow: true
    }
  },
  mounted () {
    this.init()
  },
  methods:{
    // 初始化默认加载专家团队第一页的数据
    init () {
      this.$api.getTeamAndSchool({
        infmParentId: 36,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        if (res.code == 200) {
          if (this.pageNum < res.data.pages) {
            this.list = res.data.list
          } else if(this.pageNum == res.data.pages){
            this.list = res.data.list
            this.isOver = true
          }
        }
      })
    },
    // 下一个
    next () {
      if (this.isOver) {
        return false
      }
      this.pageNum++
      this.init()
    },
    // 前一个
    pre () {
      this.isOver = false
      if (this.pageNum == 1) {
        return false
      }
      this.pageNum--
      this.init()
    }
  }
}
</script>

<style lang="less" scoped>
  .myswiper{
    max-width: 1200px;
    height: 350px;
    position: relative;
    margin-top: 50px;
    .left-arrow{
      width: 40px;
      height: 90px;
      // background-color: peru;
      position: absolute;
      top: 130px;
      left: -50px;
      cursor: pointer;
      border: 1px solid #ccc;
    }
    .right-arrow{
      width: 40px;
      height: 90px;
      // background-color: palevioletred;
      position: absolute;
      top: 130px;
      right: -50px;
      cursor: pointer;
      border: 1px solid #ccc;
    }
    @media screen and (max-width: 1200px) {
      .left-arrow{
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 999;
      }
      .right-arrow {
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 999;
      }
    }
    .left-arrow img, .right-arrow img{
      width: 24px;
      height: 43px;
    }
    .myswiper-inner-wrap{
      max-width: 1200px;
      overflow: hidden;
        .myswiper-inner{
        display: flex;
        align-items: center;
        transform: translateX(0);
        .myswiper-item-active{
          box-shadow: 0px 0px 8px 6px rgba(0,0,0, .2);
          transform: scale(1.05);
        }
        .myswiper-item:hover{
          box-shadow: 0px 0px 8px 6px rgba(0,0,0, .2);
          transform: scale(1.05);
        }
        .myswiper-item{
          min-width: 196px;
          width: 196px;
          height: 270px;
          background-size: 100% 100%!important;
          margin: 22px;
          position: relative;
          transition: all .3s ease-in-out;
          cursor: pointer;
          .myswiper-item-head{
            width: 122px;
            height: 122px;
            border-radius: 50%;
            position: relative;
            top: 48px;
            left: 50%;
            transform: translateX(-50%);
          }
          .myswiper-item-name{
            position: absolute;
            width: 100%;
            color: #333;
            font-size: 20px;
            text-align: center;
            top: 190px;
            font-weight: 700;
          }
          .myswiper-item-title{
            position: absolute;
            width: 100%;
            color: #333;
            font-size: 16px;
            text-align: center;
            top: 225px;
            color: #666;
            padding: 0 10px;
            box-sizing: border-box;
          }
        }
      }
    }
    
  }
</style>