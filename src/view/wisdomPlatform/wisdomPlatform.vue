<template>
  <div>
      <headerAsideMenu/>
      <div class="wisdomPlatform-container">
          <div class="wp-header"></div>
          <div class="wp-systemModule">
              <div class="center-box">
                  <div class="left-line-box">
                    <div class="left-line" v-for="(item, index) in smLeftList" :key="index" :data-text="item">
                      <img :src="base + 'wp-sm-leftLine.png'">
                      <!-- <span class="line-text">亚卓学院</span> -->
                    </div>
                  </div>
                  <div class="right-line-box">
                    <div class="right-line" v-for="(item, index) in smRightList" :key="index" :data-text="item">
                      <img :src="base + 'wp-sm-rightLine.png'">
                      <!-- <span class="line-text">教学中心</span> -->
                    </div>
                  </div>
                  <div class="text-box">
                      <span class="up-text">系统模块</span>
                      <span class="down-text">system module</span>
                  </div>
              </div>
          </div>
          <div class="wp-coreFunction">
              <!-- <div class="cf-header">
                  <div class="cf-titie">
                      <span>核/心/功/能</span>
                  </div>
                  <div class="line"></div>
              </div> -->
              <partTitle :isWhite='false' :titleText="'核心功能'"/>
              <div class="cf-box" @mouseleave="leaveHandle">
                    <div class="cf-item" v-for="(item, index) in cfList" :key="index" @mouseenter="enterHandle(index)">
                        <div class="cf-inner" :style="'borderColor: '+item.lineColor">
                        <img :src="item.url">
                        <p class="cf-name">{{item.name}}</p>
                        <p class="cf-content">{{item.content}}</p>
                        </div>
                    </div>
                    <!-- <transition name="fade"> -->
                    <div ref="cfHover" class="cf-item" :class="{ cfHover: isShow }" v-show="isShow" @mouseleave="leaveHandle">
                        <div class="cf-inner" :style="'borderColor: '+currentData.lineColor">
                        <img :src="currentData.url">
                        <p class="cf-name">{{currentData.name}}</p>
                        <p class="cf-content">{{currentData.content}}</p>
                        </div>
                    </div>
                    <!-- </transition> -->
              </div>
          </div>
          <div class="wp-specialAdvantage">
              <!-- <div class="sa-header">
                  <div class="sa-titie">
                      <span>特/色/优/势</span>
                  </div>
                  <div class="line"></div>
              </div> -->
              <partTitle :isWhite='false' :titleText="'特色优势'"/>
              <div class="sa-box">
                  <div class="sa-box-left">
                      <!-- <div class="left-title">
                          <div class="">
                              <img src="" alt="">
                              <span>优势</span>
                          </div>
                      </div> -->
                      <ul>
                          <li class="left-title">
                              <!-- <div class="little-icon"></div> -->
                              <img :src="base + 'wp-sa-icon1.png'" alt="">
                              <span>优势</span>
                              <div class="line"></div>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img :src="base + 'wp-sa-icon2.png'" alt="">
                              <span>操作简单</span>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img :src="base + 'wp-sa-icon3.png'" alt="">
                              <span>交互教学</span>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img :src="base + 'wp-sa-icon4.png'" alt="">
                              <span>安全稳定</span>
                          </li>
                          <li>
                              <!-- <div class="little-icon"></div> -->
                              <img :src="base + 'wp-sa-icon5.png'" alt="">
                              <span>一站式</span>
                          </li>
                      </ul>
                  </div>
                  <div class="sa-box-right"></div>
              </div>
          </div>
      </div>
      <backTop/>
      <tail/>
  </div>
</template>

<script>
export default {
    data () {
        return {
            isShow: false,
            smLeftList: ['亚卓学院', '数据中心', '测试中心'],
            smRightList: ['教学中心', '管理中心', '评价中心'],
            cfList: [
              {
                url: this.base + 'wp-cf-icon1.png',
                name: '智能化教学',
                content: '亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。',
                lineColor: '#007AB7'
              },
              {
                url: this.base + 'wp-cf-icon2.png',
                name: '一体化管理',
                content: '亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。',
                lineColor: '#00B79B'
              },
              {
                url: this.base + 'wp-cf-icon3.png',
                name: '素材库',
                content: '亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。',
                lineColor: '#008EB7'
              },
              {
                url: this.base + 'wp-cf-icon4.png',
                name: '选择式备课',
                content: '亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。',
                lineColor: '#6139B2'
              },
              {
                url: this.base + 'wp-cf-icon5.png',
                name: '生涯教育',
                content: '亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。',
                lineColor: '#AA3FD1'
              },
              {
                url: this.base + 'wp-cf-icon6.png',
                name: '大数据中心',
                content: '亚卓教育利用AR技术来配合学生学习课程内容，学生更好的理解，更直观的感受。',
                lineColor: '#EC4F8A'
              }
            ],
            currentData: {}
        }
    },
    methods: {
        enterHandle (index) {
            this.isShow = true
            this.currentData = this.cfList[index]
            let flag_x = index % 3
            let flag_y = parseInt(index / 3)
            let x = 2 * flag_x * 200 + 'px'
            let y = (2 * flag_y) * 150 + 'px'
            this.$refs.cfHover.style.top = y
            this.$refs.cfHover.style.left = x

        },
        leaveHandle () {
            this.isShow = false
            this.currentData = {}
        }
    }

}
</script>

<style scoped lang="less">
.wisdomPlatform-container{
    user-select: none;
    // min-width: 1200px;
    .wp-header{
        height: 600px;
        background-image: url(http://182.148.48.236:54321/source/images/wp-header-bg.png);
        background-size: 100% 100%;
    }
    .wp-systemModule{
        // max-width: 1200px;
        width: 100%;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F4F4F4;
        .center-box{
            position: relative;
            width: 584px;
            height: 558px;
            background-image: url(http://182.148.48.236:54321/source/images/wp-sm-centerBox.png);
            // transition: all 1s linear;
            // &:hover{
            //     transform: rotateZ(90deg);
            // }
            .left-line-box{
              position: absolute;
              top: 95px;
              left: -80px;
              .left-line{
                position: relative;
                transition: all .3s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                }
                &:nth-child(2){
                  margin: 45px 0 10px;
                }
                &::before{
                  content: attr(data-text);
                  display: block;
                  position: absolute;
                  top: -15px;
                  left: -110px;
                  font-size:24px;
                  font-family:Microsoft YaHei;
                  font-weight:400;
                  color:rgba(51,51,51,1);
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
              }
              img{
                width: 222px;
              }
            }
            .right-line-box{
              position: absolute;
              top: 95px;
              right: -75px;
              .right-line{
                position: relative;
                transition: all .3s ease-in-out;
                &:hover{
                    transform: scale(1.1);
                }
                &::before{
                  content: attr(data-text);
                  display: block;
                  position: absolute;
                  width: 99px;
                  top: -15px;
                  left: 240px;
                  font-size:24px;
                  font-family:Microsoft YaHei;
                  font-weight:400;
                  color:rgba(51,51,51,1);
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
                &:nth-child(2){
                  margin: 45px 0 10px;
                }
              }
              img{
                width: 222px;
              }
            }
            .line-text{
              font-size:24px;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(51,51,51,1);
              line-height:86px;
            }
            .text-box{
                display: flex;
                flex-direction: column;
                align-items: center;
                position: absolute;
                top: 38%;
                left: 31%;
                .up-text{
                    font-size:35px;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:30px;
                    margin-bottom: 8px;
                }
                .down-text{
                    font-size:20px;
                    font-family:Source Han Sans CN;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:22px;
                    letter-spacing: 3px;
                }
            }
        }
    }
    .wp-coreFunction{
        height: 737px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        // .cf-header{
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     position: relative;
        //     height: 50px;
        //     width: 1200px;
        //     margin-bottom: 20px;
        //     .line{
        //         border-top: 1px solid rgba(221,221,221,1);
        //     }
        //     .cf-titie{
        //         width: 160px;
        //         position: absolute;
        //         top: 8px;
        //         left: 50%;
        //         transform: translate(-50%);
        //         background-color: #fff;
        //         font-size:24px;
        //         font-family:Microsoft YaHei;
        //         font-weight:400;
        //         color:rgba(51,51,51,1);
        //         text-align: center;
        //     }
        // }
        .cf-box{
            position: relative;
            width: 1200px;
            display: flex;
            flex-wrap: wrap;
            .cf-item{
                // flex: 1; //ie11 以下不兼容
                display: flex;
                justify-content: center;
                align-items: center;
                align-content: center;
                width: 400px;
                height: 300px;
                border:1px solid rgba(213,213,213,1);
                background-color: #fff;
                box-sizing: border-box;
                cursor: pointer;
                // transition: all .3s ease-in-out;
                
                &:nth-child(n+4){
                    border-top: none;
                }
                &:nth-child(3n+2){
                    border-left: none;
                    border-right: none;
                }
                .cf-inner{
                    width: 320px;
                    height: 280px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border-top: 4px solid #007AB7;
                    img{
                        margin-top: 30px;
                    }
                    .cf-name{
                        margin: 10px 0 55px;
                        font-size:20px;
                        font-family:Microsoft YaHei;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                    }
                    .cf-content{
                        width: 100%;
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(68,68,68,1);
                        overflow: hidden;
                        text-overflow:ellipsis;
                    }
                }
            }
            // .fade-enter-active, .fade-leave-active{
            //     transition: all .5s;
            // }
            // .fade-enter, .fade-leave-to{
            //     opacity: 0;
            // }
            .cfHover{
                position: absolute;
                z-index: 2;
                width: 440px;
                height: 330px;
                box-shadow: 0 0 15px #333;
                transform: translate(-15px, -15px);
                // transition: all .5s;
            }
        }
    }
    
    .wp-specialAdvantage{
        height: 683px;
        background-color: #F4F4F4;
        height: 737px;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        // .sa-header{
        //     display: flex;
        //     flex-direction: column;
        //     justify-content: center;
        //     position: relative;
        //     height: 50px;
        //     width: 1200px;
        //     margin-bottom: 20px;
        //     .line{
        //         border-top: 1px solid rgba(221,221,221,1);
        //     }
        //     .sa-titie{
        //         width: 160px;
        //         position: absolute;
        //         top: 8px;
        //         left: 50%;
        //         transform: translate(-50%);
        //         background-color: #F4F4F4;
        //         font-size:24px;
        //         font-family:Microsoft YaHei;
        //         font-weight:400;
        //         color:rgba(51,51,51,1);
        //         text-align: center;
        //     }
        // }
        .sa-box{
            position: relative;
            // max-width: 1200px;
            width: 1200px;
            margin: auto;
            display: flex;
            padding: 0 50px 0 50px;
            .sa-box-left{
                flex: 6;
                padding-top: 50px;
                box-sizing: border-box;
                ul{
                    list-style:none;
                    li{
                        margin-bottom: 20px;
                        img{
                            width: 24px;
                            // height: 30px;
                            margin-right: 5px;
                            vertical-align: middle;
                        }
                        span{
                            width:106px;
                            height:25px;
                            font-size:26px;
                            font-family:Adobe Heiti Std;
                            font-weight:normal;
                            color:rgba(51,51,51,1);
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            vertical-align: middle;
                        }
                    }
                }
                .left-title{
                    margin-bottom: 60px;
                    .line{
                        width: 130px;
                        border-top: 10px solid #2F2E41;
                        margin-top: 10px;
                    }
                }
            }
            @media screen and (max-width: 1200px) {
            .sa-box-left {
                flex: 2;
            }
            }
            .sa-box-right{
                flex: 4;
                width: 508px;
                height: 524px;
                background-image: url(http://182.148.48.236:54321/source/images/wp-sa-img1.png);
                background-repeat: no-repeat;
            }
        }
    }
}
</style>