<template>
  <div>
    <!-- 产品体系 开始-->
    <div class="system">
      <!-- 定位闹钟 -->
      <div class="systeperson" :style="{background:`url(${this.base+'sysPerson.png'})`}"></div>
      <!-- 定位背景1 -->
      <div class="systembgs systembg1" :style="{background:`url(${this.base+'edufrbg2.png'})`}"></div>
      <!-- 定位背景2 -->
      <div class="systembgs systembg2" :style="{background:`url(${this.base+'edufrbg1.png'})`}"></div>
      <!-- 以下开始正文了 -->
      <!-- <p class="flex-center system-title">产/品/体/系</p> -->
      <partTitle :isWhite='false' :titleText="'系列课程'"/>
      <div class="system-content">
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'famSys1.png'" />
            <span>财商系列</span>
          </div>
          <p>锻炼财商思维，培养理财技能，规避财富风险，拥抱财富人生</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'famSys2.png'" />
            <span>青春健康系列</span>
          </div>
          <p>用青春健康知识，守护孩子身心健康</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'famSys3.png'" />
            <span>艺术审美系列</span>
          </div>
          <p>奠定美育基础，提高审美情趣</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'famSys4.png'" />
            <span>品格培养系列</span>
          </div>
          <p>培养诚实、负责、自信、乐观的品质，铸就孩子的幸福人生</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'famSys5.png'" />
            <span>科技系列</span>
          </div>
          <p>了解科技发展的前世今生，适应未来生活</p>
        </div>
      </div>
    </div>
    <!-- 产品体系 结束-->
    <!-- 课程结构 开始-->
    <div class="lesson">
      <!-- <p class="lesson-title flex-center">课/程/结/构</p> -->
      <partTitle :isWhite='false' :titleText="'课程结构'"/>
      <!-- 多套一层避免里面的元素定位距离小屏幕不兼容 -->
      <div class="lesson-inner-wrap" :style="{background:`url(${this.base+'basicBg.png'})`}">
        <div class="lesson-inner">
          <!-- 顺序为顺时针，最后一个div是中间最大的 -->
          <!-- 原图片 basicSmall.png -->
          <!-- basicBig.png -->
          <!-- 现修正为 syssmall.png、sysbig.png -->
          <div
            class="lesson-item flex-center"
            :style="{background:`url(${this.base+'syssmall.png'})`}"
          >公众号</div>
          <div
            class="lesson-item flex-center"
            :style="{background:`url(${this.base+'syssmall.png'})`}"
          >教学素材</div>
          <div
            class="lesson-item flex-center"
            :style="{background:`url(${this.base+'syssmall.png'})`}"
          >微课</div>
          <div
            class="lesson-item flex-center-col"
            :style="{background:`url(${this.base+'syssmall.png'})`}"
          >
            <span>在线开放</span>
            <span>课程</span>
          </div>
          <div
            class="lesson-item flex-center"
            :style="{background:`url(${this.base+'syssmall.png'})`}"
          >专题网站</div>
          <div
            class="lesson-item flex-center"
            :style="{background:`url(${this.base+'syssmall.png'})`}"
          >移动端</div>
          <div
            class="lesson-item-center flex-center"
            :style="{background:`url(${this.base+'sysbig.png'})`}"
          >集成数字化课程资源</div>
        </div>
      </div>
    </div>
    <!-- 课程结构 结束-->
    <!-- 亮点优势 开始 -->
    <div class="advantage">
      <!-- <p class="advantage-title flex-center">亮/点/优/势</p> -->
      <partTitle :isWhite='false' :titleText="'亮点优势'"/>
      <div class="advantage-inner flex-center-y">
        <div class="advantage-inner-item" v-for="(advantage, index) in advantageList" :key="index">
          <img :src="advantage.url" />
          <span>{{advantage.title}}</span>
          <div class="line"></div>
          <a-popover placement="bottom">
            <template slot="content">
              <p style="width: 300px">{{advantage.content}}</p>
            </template>
            <p>{{advantage.content}}</p>
          </a-popover>
        </div>
      </div>
    </div>
    <!-- 亮点优势 结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      advantageList: [
        {
          url: this.base+'liangfr1.png',
          title: '海量资源',
          content: '共438集，包含5000分钟微课视频，涉及领域广、内容丰富，全方位地培养孩子的综合素养。',
        },
        {
          url: this.base+'liangfr2.png',
          title: '权威性',
          content: '由国内顶尖专家和20余省近百位优秀名师遵照国际通用的《21世纪核心素养》的内容研发。',
        },
        {
          url: this.base+'liangfr3.png',
          title: '实用性',
          content: '根据孩子的心理行为和智力发展水平进行设计，帮助家长有效开展家庭教育。',
        },
        {
          url: this.base+'liangfr4.png',
          title: '顺应“碎片化”学习习惯',
          content: '10-20分钟不等时长的视频，多平台投放，实现处处能学、时时可学。',
        },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
* {
  font-family: "microsoft yehei", "微软雅黑" !important;
}
.system {
  width: 100%;
  padding: 80px 0 30px;
  background-position: 0 bottom;
  background-repeat: no-repeat !important;
  position: relative;
  .systembgs {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    z-index: -2;
  }
  .systembg1 {
    height: 349px;
  }
  .systembg2 {
    height: 285px;
  }
  .systeperson {
    width: 231px;
    height: 245px;
    bottom: 0;
    left: 60px;
    display: block;
    position: absolute;
    background-repeat: no-repeat !important;
    background-size: 100% 100% !important;
    z-index: 9;
  }
  .system-title {
    margin: 0 auto 50px;
    padding-top: 50px;
    width: 323px;
    border-bottom: 2px solid #8C8C8C;
    position: relative;
    span{
      width: 123px;
      background-color: #fff;
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      color: #333;
      font-weight: bold;
      font-size: 24px;
    }
  }
  .system-content {
    background: rgba(12, 102, 192, 1);
    opacity: 0.77;
    max-width: 1200px;
    margin: 0 auto;
    height: 430px;
    background-repeat: no-repeat !important;
    padding: 83px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .system-three {
      padding: 0 40px 0 93px;
      img {
        width: 41px;
        height: 37px;
      }
      span {
        font-size: 20px;
        color: #fff;
        margin-left: 20px;
      }
      p {
        font-size: 14px;
        color: #fff;
        width: 410px;
      }
    }
  }
}
// 课程结构
.lesson-title {
  padding: 50px 0 0;
  margin: 0 auto 45px;
  position: relative;
  width: 323px;
  border-bottom: 2px solid #8c8c8c;
  span{
    width: 123px;
    background-color: #fff;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    font-size: 24px;
    color: #333;
  }
}
.lesson-inner-wrap {
  width: 100%;
  height: 646px;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
}
.lesson-inner-wrap .lesson-inner {
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
@media screen and (max-width: 1200px) {
  .lesson-inner {
    left: -80px;
  }
}
.lesson-inner-wrap .lesson-inner .lesson-item {
  width: 139px;
  height: 139px;
  font-size: 22px;
  color: #fff;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
  position: absolute;
}
.lesson-item-center {
  width: 300px;
  height: 300px;
  font-size: 22px;
  color: #fff;
  position: absolute;
  top: 163px;
  left: 410px;
  background-repeat: no-repeat !important;
  background-size: 100% 100% !important;
}
.lesson-item:nth-child(1) {
  left: 278px;
  top: 13px;
}
.lesson-item:nth-child(2) {
  right: 308px;
  top: 67px;
}
.lesson-item:nth-child(3) {
  right: 215px;
  top: 275px;
}
.lesson-item:nth-child(4) {
  right: 363px;
  top: 477px;
}
.lesson-item:nth-child(5) {
  left: 286px;
  top: 474px;
}
.lesson-item:nth-child(6) {
  left: 142px;
  top: 238px;
}
// 亮点优势
.advantage {
  background-color: #fafafa;
  width: 100%;
  padding-bottom: 40px;
}
.advantage-title {
  padding: 50px 0 0;
  margin: 0 auto 45px;
  position: relative;
  width: 323px;
  border-bottom: 2px solid #8c8c8c;
  span{
    width: 123px;
    background-color: #fafafa;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-weight: bold;
    font-size: 24px;
    color: #333;
  }
}
.advantage-inner {
  max-width: 1200px;
  margin: 0 auto;
}
.advantage-inner-item {
  width: 285px;
  height: 400px;
  margin-right: 20px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:last-child{
    margin-right: 0;
  }
}
.advantage-inner-item img {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 20px;
}
.advantage-inner-item span {
  font-size: 24px;
  margin-bottom: 7px;
}
.advantage-inner-item .line {
  width: 162px;
  height: 3px;
  background-color: #5a3acf;
  margin-bottom: 20px;
}
.advantage-inner-item p {
  font-size: 14px;
  width: 100%;
  overflow: hidden;
  text-align: justify;
  color: #666666;
  max-height: 100%;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
}
/* 1600px */
@media (max-width: 1600px) {
  .system .systeperson {
    width: 186px;
    height: 186px;
    left: 30px;
  }
}
/* 1366px */
@media (max-width: 1366px) {
  .system .systeperson {
    width: 160px;
    height: 160px;
    left: 30px;
  }
}
</style>