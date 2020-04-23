<template>
  <div class="app">
    <div class="curriculum">
      <!-- 标题 开始 -->
      <partTitle :isWhite='false' :titleText="'精品课程展示'"/>
      <!-- 标题 结束 -->
      <div class="class">
        <!-- tab切换 开始 -->
        <div class="boxHead">
          <div
            :class="['tablink', choose2 == index ? 'tablink-active' : '']"
            @click="changeTab(index)"
            v-for="(items,index) in typeList"
            :key="index"
          >{{items.type}}</div>
        </div>
        <!-- tab切换 结束 -->
        <div class="boxBody">
          <!-- 左侧 开始 -->
          <div class="leftVideo anisca" @click.prevent="videoPlay">
            <div class="play-block"></div>
            <!--  @click="opean" -->
            <video id="video" class="videoplayer" controls loop>
              <source :src="url" type="video/mp4" />
            </video>
            <!-- <div class="videoplayer">
              <img class="img" :src="poster" />
            </div> -->
            <div class="videoplaybtn" v-show="!isPlay">
              <img :src="this.base+'playbtn.png'"/>
              <!-- <img :src="this.base+'playbtn.png'" v-else/> -->
            </div>
          </div>
          <!-- 左侧 结束 -->
          <!-- 右侧 开始 -->
          <div class="rightList">
            <div
              :style="{color:(index==click?style.color:'#ffffff') ,background:(index == click?style.backgroundcolor: items.color)}"
              class="classname ellipsis"
              :class="{'active' : click == index}"
              v-for="(items, index) in namelist"
              :key="index"
              @click="choose(index)"
            >
              <div class="icon ellipsis" :style=" {display:(index == click ? 'block' : 'none')} ">
                <i class="iconfont iconjiantou1"></i>
              </div>
              <span v-if="items.name">
                  {{items.name}}
              </span>
            </div>
          </div>
          <!-- 右侧 结束 -->
        </div>
      </div>
    </div>
    <!-- <div v-show="popup"> -->
      <!--这里是要展示的内容层-->
      <!-- <div class="mock">
        <video id="video" class="videoplayer" controls loop="loop" :poster="poster">
          <source :src="url" type="video/mp4" />
        </video>
      </div> -->
      <!--这里是半透明背景层-->
      <!-- <div class="over" @click="closemock"></div>
    </div> -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "curriculum",
  components: {},
  data() {
    return {
      getData: "",
      ind: 0,
      title: [],
      url: "",
      poster: "",
      typeList: [], //tab切换
      namelist: [],
      click: 0,
      popup: 0,
      choose2: 0, //tab切换索引
      //   课程标题改变的样式
      style: {
        color: "#000000",
        backgroundcolor: "#ffffff",
        fontsize: {},
        display: "block"
      },
      colorList: [
        '#30b9db',
        '#28A3D4',
        '#208ECD',
        '#0C7EBF',
        '#0C6FBD',
        '#0561A9'
      ],
      courseList: [],
      isPlay: false,
    };
  },
  created () {
    // this.getmessage();
    this.changeTab(this.choose2);
  },
  methods: {
    getmessage() {
      this.$api.getInfmAndSubList({
        infmTypeId: 8
      }).then(res => {
        if (res.code == 200) {
          let courseList = res.data.list.map(e => {
            return {
              type: e.firstInfm.infmTitle,
              list: e.subList.map((e, index) => {
                return {
                  name: e.infmTitle,
                  url: e.infmUri,
                  color: this.colorList[index],
                  picture: e.infmImgUri
                }
              })
            }
          })
          this.getData = courseList
          this.typeList = this.getData; //tab切换
          this.namelist = this.getData[this.choose2].list;
          this.url = this.getData[this.choose2].list[0].url;
          this.poster = this.getData[this.choose2].list[0].picture;
          this.choose(0)
        }
      })
    },
    // 改变左边播放的内容
    choose(index) {
      // var that = this;
      this.click = index;
      let player = document.querySelector("#video");
      // player.play();
      this.url = this.getData[this.choose2].list[index].url;
      if (!this.url) {
        return
      }
      player.src = this.url;
      player.pause()
      this.isPlay = false
      // this.poster = this.getData[this.choose2].list[index].picture;
    },
    videoPlay () {
      let player = document.querySelector("#video");
      console.log(player.currentSrc)
      if (!player.currentSrc) {
        this.$error('暂无资源，敬请期待！')
        return
      }
      // console.log(player.networkState, 'ppppp')
      // if (player.networkState == 0) {
      //   this.$error('视频错误，请联系管理员')
      //   return
      // } else if (player.networkState == 1) {
      //   this.$error('没有网络，请检查网络')
      //   return
      // } else if (player.networkState == 2) {
      //   this.$msg('正在下载数据，请稍后')
      //   return
      // } else if (player.networkState == 3) {
      //   this.$error('暂未找到视频资源')
      //   return
      // }
      if (player.networkState == 3) {
        this.$error('暂未找到视频资源')
        return
      }
      if (player.paused) {
        player.play();
        this.isPlay = true
      } else {
        player.pause()
        this.isPlay = false
      }
    },
    // tab切换
    changeTab(index) {
      this.choose2 = index;
      this.getmessage();
    },
    // opean() {
    //   // this.popup = 1;
    // },
    // closemock() {
    //   this.popup = 0;
    //   this.errormessage = "";
    // }
  },
};
</script>

<style scoped lang="less">
* {
  font-family: "microsoft yahei", "微软雅黑";
}
.app {
  .curriculum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: -pink;
    padding-bottom: 60px;
    // .titles {
    //   width: 100%;
    //   text-align: center;
    //   color: #333333;
    //   font-size: 24px;
    //   background: -orange;
    //   padding: 30px 0;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   span {
    //     padding: 0 50px;
    //   }
    //   i {
    //     display: inline-block;
    //     width: 480px;
    //     height: 1px;
    //     background: rgba(221, 221, 221, 1);
    //   }
    // }
    .class {
      text-align: center;
      width: 1200px;
      .boxHead {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        .tablink-active {
          background-color: #007ab7 !important;
          color: #fff !important;
          border: 1px solid #007ab7 !important;
        }
        .tablink {
          height: 50px;
          width: 160px;
          color: #333;
          font-size: 22px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          border: 1px solid #ccc;
          border-bottom: none;
          .iconfont {
            margin-left: 8px;
            width: 15px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .boxBody {
        display: flex;
        justify-content: center;
        align-items: center;
        .leftVideo {
          flex: 1;
          // width: 680px;
          height: 462px;
          color: #ffffff;
          font-size: 22px;
          position: relative;
          .videoplayer {
            object-fit: fill;
            width: 100%;
            height: 100%;
            .img {
              width: 100%;
              height: 100%;
            }
          }
          .videoplaybtn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: inline-block;
            width: 100px;
            height: 100px;
            z-index: 100;
          }
        }
        .rightList {
          width: 487px;
          height: 462px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          // border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          background-color: #0561A9;
          overflow: auto;
          .classname {
            cursor: pointer;
            padding-left: 22px;
            height: 77px;
            background: #0c7ebf;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            &:hover{
              opacity: .7;
            }
            .icon {
              .iconfont {
                width: 22px;
                height: 42px;
                margin-right: 12px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #007ab7;
                font-weight: 600;
                font-size: 42px;
              }
            }
          }
        }
      }
    }
  }
  .rule {
    position: absolute;
    width: 0.82rem;
    height: 0.36rem;
    top: 0.08rem;
    right: 0rem;
    background: #111111;
  }
  .mock {
    position: fixed;
    font-size: 48px;
    height: 600px;
    width: 1200px;
    background: #ffffff;
    color: #007ab7;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }
  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background: #111111;
  }
  .play-block{
    width: 50px;
    height: 50px;
    background: rgba(0, 0, 0, 0);
    position: absolute;
    bottom: 25px;
    left: 0px;
    z-index: 10;
  }
}
</style>