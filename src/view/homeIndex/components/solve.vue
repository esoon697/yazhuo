<template>
  <div class="app">
    <div class="solve" :style="{background:`url(${this.base+'solvebg.png'})`}">
      <!-- <div class="solvetitle">亚卓教育素养培养全场景覆盖</div> -->
      <partTitle :isWhite='true' :titleText="'亚卓教育素养培养全场景覆盖'"/>
      <div class="flex-center-x">
        <div class="programme">
          <div class="up">
            <div class="studyup" v-for="(items, index) in listup" :key="index">
              <div class="box">
                <div class="study">
                  <div
                    class="programme"
                    v-for="(title, ind) in items"
                    :key="ind"
                    @mouseenter="mouseenter(index,ind)"
                    @mouseleave="mouseout(index)"
                  >
                    <div class="spot" v-show="title[ind] != '0'">{{title[ind]}}</div>
                    <div class="programmename">{{title.title}}</div>
                  </div>
                </div>
                <div class="careerpoints">
                  <div class="points" v-for="(point ,num) in menu[0][index]" :key="num">{{point}}</div>
                </div>
              </div>
              <div class="tips">
                <div class="tipscontent" v-show="show && index == choice">
                  <div class="title">{{items[ind].title}}</div>
                  <div class="content">{{items[ind].explain}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="middle">
            <img class="brokenline" :src="this.base+'solveLine.png'" />
          </div>
          <div class="down">
            <div class="up" style="margin-left: -20px;">
              <div
                class="studyup"
                style="top: -2800px;"
                v-for="(items, index) in listdown"
                :key="index"
              >
                <div class="box downBox" style="flex-direction: column-reverse;">
                  <div class="study">
                    <div
                      class="programme"
                      v-for="(title, ind) in items"
                      @mouseenter="mouseenterd(index,ind)"
                      :key="ind"
                      @mouseleave="mouseoutd(index)"
                    >
                      <div class="spot" v-show="title[ind] != '0'">{{title[ind]}}</div>
                      <div class="programmename">{{title.title}}</div>
                    </div>
                  </div>
                  <div class="careerpoints">
                    <div class="points" v-for="(point ,num) in menu[1][index]" :key="num">{{point}}</div>
                  </div>
                </div>
                <div class="tips">
                  <div class="tipscontent" v-show="showd && index == choiced">
                    <div class="title">{{items[indd].title}}</div>
                    <div class="content">{{items[indd].explain}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "solve",
  components: {},
  data() {
    return {
      list: [],
      listup: [],
      listdown: [],
      menu: [],
      choice: null,
      index: 0,
      ind: 0,
      show: "true",
      choiced: null,
      indexd: 0,
      indd: 0,
      showd: "true"
    };
  },
  created() {
    this.getmessage();
  },
  methods: {
    getmessage() {
      this.$api.getInfmAndSubList({
        infmTypeId: 9
      }).then(res => {
        if (res.code == 200) {
          this.menu = res.data.list.map(e => {
            return e.firstInfm.infmTitle
          })
          this.list = res.data.list.map(e => {
            return e.subList.map(e => {
              return {
                title: e.infmTitle,
                explain: e.infmContent,
                infmUri: e.infmUri
              }
            })
          })
          this.listup = this.group(this.list, 3)[0];
          this.listdown = this.group(this.list, 3)[1];
          let menuUp = this.group(this.menu, 3)[0];
          let menuDown = this.group(this.menu, 3)[1];
          this.menu = []
          this.menu.push(menuUp)
          this.menu.push(menuDown)
        }
      })
    },
    group(array, subGroupLength) {
      //  将数组array分成长度为subGroupLength的小数组并返回新数组
      let index = 0;
      let newArray = [];
      while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
      }
      return newArray;
    },
    mouseenter(index, ind) {
      let that = this;
      that.choice = index;
      that.index = index;
      that.ind = ind;
    },
    mouseout(index) {
      let that = this;
      that.choice = null;
      that.index = index;
    },
    mouseenterd(index, ind) {
      let that = this;
      that.choiced = index;
      that.indexd = index;
      that.indd = ind;
    },
    mouseoutd(index) {
      let that = this;
      that.choiced = null;
      that.indexd = index;
    }
  }
};
</script>

<style scoped lang="less">
* {
  font-family: "microsoft yahei", "微软雅黑";
}
.solve {
  height: 650px;
  width: 100%;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  // .solvetitle {
  //   width: 100%;
  //   text-align: center;
  //   font-size: 24px;
  //   font-family: "Microsoft YaHei";
  //   color: #ffffff;
  //   padding: 40px 0;
  // }
  .programme {
    background: -pink;
    display: inline-block;
    width: auto;
    .up {
      margin-left: 380px;
      display: flex;
      justify-content: center;
      align-items: center;
      .studyup {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .box {
          align-self: flex-end;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .study {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            box-shadow: 1px 1px 10px #ffffff;
            width: 180px;
            margin: 0 20px;
            height: 100%;
            .programme {
              height: 36px;
              display: flex;
              align-items: center;
              position: relative;
              &:hover {
                background: -red;
                cursor: pointer;
                border-bottom: -1px solid #fff;
              }
              &:hover::after {
                content: "";
                display: block;
                width: 50%;
                height: 1px;
                background: #ffffff;
                position: absolute;
                left: 50%;
                bottom: 0;
                transform: translateX(-50%);
              }
              .spot {
                margin-top: 6px;
                margin-left: 20px;
                width: 10px;
                height: 10px;
                background: rgba(255, 255, 255, 1);
                border-radius: 50%;
              }
              .programmename {
                width: 126px;
                height: 16px;
                margin-left: 30px;
                color: #ffffff;
                font-size: 16px;
                font-family: "Microsoft YaHei";
                font-weight: 400;
              }
            }
          }
          .points {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px 0;
            color: #ffffff;
            font-size: 20px;
            font-family: "Microsoft YaHei";
            font-weight: 400;
            width: 30px;
            height: 30px;
            background: rgba(38, 195, 226, 1);
            border: 1px solid rgba(255, 255, 255, 1);
            border-radius: 50%;
          }
          .careerpoints {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 76px;
          }
        }
        .downBox{
          align-self: flex-start;
        }
        .tips {
          width: 180px;
          min-height: 180px;
          .tipscontent {
            width: 180px;
            height: 180px;
            background: rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: #ffffff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .title {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100px;
              height: 50px;
              font-size: 16px;
              color: #ffffff;
            }
            .content {
              width: 150px;
              height: 140px;
              font-size: 16px;
              color: #ffffff;
            }
          }
        }
        .study {
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.1);
          box-shadow: 1px 1px 10px #ffffff;
          width: 180px;
          margin: 0 60px;
          height: 100%;
          .programme {
            height: 36px;
            display: flex;
            align-items: center;
            .spot {
              margin-top: 6px;
              margin-left: 20px;
              width: 10px;
              height: 10px;
              background: rgba(255, 255, 255, 1);
              border-radius: 50%;
            }
            .programmename {
              width: 126px;
              height: 16px;
              margin-left: 30px;
              color: #ffffff;
              font-size: 16px;
              font-family: "Microsoft YaHei";
              font-weight: 400;
            }
          }
        }
        .careerpoints {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          justify-content: space-between;
          width: 76px;
        }
        .points {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 5px 0;
          color: #ffffff;
          font-size: 20px;
          font-weight: 400;
          width: 30px;
          height: 30px;
          background: rgba(38, 195, 226, 1);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 50%;
        }
      }
    }
    .middle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 92px;
      .brokenline {
        width: 1010px;
        height: 92px;
      }
    }
  }
}
/* 1440px */
@media (max-width: 1440px) {
  .flex-center-x {
    position: relative;
    left: -80px;
  }
}
/* 1366px */
@media (max-width: 1366px) {
  .flex-center-x {
    position: relative;
    left: -90px;
  }
}
</style>
