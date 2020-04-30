<template>
  <div class="app" :style="{background:`url(${this.base+'wisdbg.png'})`}">
    <!-- <div class="boxHead">智慧教学</div> -->
    <partTitle  :isWhite='true' :titleText="'智慧课堂'"/>
    <div class="boxBody">
      <!-- 1/ 开始 -->
      <div class="left">
        <div class="list0">
          <div class="text">
            <div class="title">{{list1.title}}</div>
            <div class="ksyWord">关键字：{{list1.stitle}}</div>
            <div class="content">{{list1.content}}</div>
          </div>
          <div class="icon">
            <img :src="list1.picture" class="img" />
          </div>
        </div>
        <div class="list0">
          <div class="text">
            <div class="title">{{list2.title}}</div>
            <div class="ksyWord">关键字：{{list2.stitle}}</div>
            <div class="content">{{list2.content}}</div>
          </div>
          <div class="icon">
            <img :src="list2.picture" class="img" />
          </div>
        </div>
      </div>
      <!-- 1/ 结束 -->
      <!-- 2/ 开始 -->
      <div class="middleline">
        <div class="linetop" :style="{background:`url(${this.base+'wisdLine1.png'})`}"></div>
        <div class="linedown" :style="{background:`url(${this.base+'wisdLine3.png'})`}"></div>
      </div>
      <!-- 2/ 结束 -->
      <!-- 3/ 开始 -->
      <div class="ball" :style="{background:'url('+ball+') no-repeat',backgroundSize:'80% 80%', backgroundPosition: 'center'}">
        <img class="ballImage" :src="base+'runaround.png'" />
      </div>
      <!-- 3/ 结束 -->
      <!-- 4/ 开始 -->
      <div class="middleline2">
        <div class="linetop" :style="{background:`url(${this.base+'wisdLine2.png'})`}"></div>
        <div class="linedown" :style="{background:`url(${this.base+'wisdLine4.png'})`}"></div>
      </div>
      <!-- 4/ 结束 -->
      <!-- 5/ 开始 -->
      <div class="right">
        <div class="list0">
          <div class="text">
            <div class="title">{{list3.title}}</div>
            <div class="ksyWord">关键字：{{list3.stitle}}</div>
            <div class="content">{{list3.content}}</div>
          </div>
          <div class="icon">
            <img :src="list3.picture" class="img" />
          </div>
        </div>
        <div class="list0">
          <div class="text">
            <div class="title">{{list4.title}}</div>
            <div class="ksyWord">关键字：{{list4.stitle}}</div>
            <div class="content">{{list4.content}}</div>
          </div>
          <div class="icon">
            <img :src="list4.picture" class="img" />
          </div>
        </div>
      </div>
      <!-- 5/ 结束 -->
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "wisdom",
  created() {
    this.getmessage();
  },
  data() {
    return {
      list1: {},
      list2: {},
      list3: {},
      list4: {},
      bg: "",
      ball: "https://lxf-1256064321.cos.ap-chengdu.myqcloud.com/picture/%E7%90%83.png"
      // runaround: ""
    };
  },
  methods: {
    getmessage() {
      var that = this;
      this.$api.getInfmByParams({
        infmTypeId: 10
      }).then(res => {
        if (res.code == 200) {
          if (res.data.list) {
            let lists = res.data.list.map(e => {
              return {
                title: e.infmTitle,
                stitle: e.infmKeyword,
                content: e.infmContent,
                picture: e.infmImgUri
              }
            })
            this.list1 = lists[0];
            this.list2 = lists[1];
            this.list3 = lists[2];
            this.list4 = lists[3];
            console.log('listsssssssssssssssssssss' ,lists)
          }
        }
      })
    }
  }
};
</script>

<style scoped lang="less">
* {
  font-family: "microsoft yahei", "微软雅黑";
}
.app {
  display: block;
  height: 658px;
  color: #ffffff;
  width: 100%;
  background-position: center center !important;
  .boxHead {
    background: -orange;
    text-align: center;
    font-size: 24px;
    color: #fff;
    padding: 60px 0;
  }
  .boxBody {
    height: 444px;
    display: flex;
    justify-content: center;
    align-items: center;
    .left {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      .list0 {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        .text {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end;
          .title {
            font-size: 20px;
            font-weight: 600;
            line-height: 20px;
            padding-bottom: 5px;
          }
          .ksyWord {
            font-size: 16px;
            opacity: 0.9;
            padding-bottom: 10px;
          }
          .content {
            height: 55px;
            font-size: 16px;
            opacity: 0.5;
          }
        }
        .icon {
          height: 130px;
          margin-left: 16px;
          .img {
            width: 53px;
            height: 53px;
          }
        }
      }
    }
    .middleline {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .linetop {
        background-size: 100% 100% !important;
        background-position: center center !important;
        background: linear-gradient(
          45deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-top: 55px;
      }
      .linedown {
        position: relative;
        top: 20px;
        left: -5px;
        background-size: 100% 100% !important;
        background-position: center center !important;
        background: linear-gradient(
          135deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-bottom: 134px;
      }
    }
    .ball {
      .ballImage {
        animation: rotateImg linear 5s infinite;
        @keyframes rotateImg {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .middleline2 {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .linetop {
        background-size: 100% 100% !important;
        background-position: center center !important;
        background: linear-gradient(
          -45deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-top: 55px;
      }
      .linedown {
        position: relative;
        top: 5px;
        left: 18px;
        background-size: 100% 100% !important;
        background-position: center center !important;
        background: linear-gradient(
          -135deg,
          transparent 49.5%,
          #ffffff,
          transparent 50.5%
        );
        height: 77px;
        width: 85px;
        margin-bottom: 134px;
      }
    }
    .right {
      height: 444px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      box-sizing: border-box;
      .list0 {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: flex-start;
        .text {
          width: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          .title {
            font-size: 20px;
            font-weight: 600;
            line-height: 20px;
            padding-bottom: 5px;
          }
          .ksyWord {
            font-size: 16px;
            opacity: 0.9;
            padding-bottom: 10px;
          }
          .content {
            height: 55px;
            font-size: 16px;
            opacity: 0.5;
          }
        }
        .icon {
          height: 130px;
          margin-right: 16px;

          .img {
            width: 53px;
            height: 53px;
          }
        }
      }
    }
  }
}
</style>
