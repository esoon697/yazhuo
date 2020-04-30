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
            <img :src="this.base+'proBas1.png'" />
            <span>创意科学实验课程</span>
          </div>
          <p>创新科学课堂，融合STEAM理念，培养创新思维，促进全面发展</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'proBas2.png'" />
            <span>小学综合实践活动课</span>
          </div>
          <p>动手操作实践，解决实际问题，服务学习和生活</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'proBas3.png'" />
            <span>中学生核心素养培养数字资源库</span>
          </div>
          <p>适应终身发展和社会发展需要，落实立德树人根本任务</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'proBas4.png'" />
            <span>玩出来的小科学家</span>
          </div>
          <p>绘本、游戏化教学，帮助学前儿童智能和情绪发展</p>
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
        <!-- 1/4海量资源 -->
        <div class="advantage-inner-item">
          <img :src="this.base+'liangfr1.png'" />
          <span>海量资源</span>
          <div class="line"></div>
          <p>四大产品共728学时，包含6000分钟微课视频，728个资源包，汇集近千个精心打磨的教学设计、丰富的案例、有趣的活动、大量的拓展资源、AR互动游戏等，满足教师课前备课、课中授课以及学生课后拓展学习的需求。</p>
        </div>
        <!-- 2/4权威专家 -->
        <div class="advantage-inner-item">
          <img :src="this.base+'liangfr2.png'" />
          <span>权威专家</span>
          <div class="line"></div>
          <p>由“中国学生发展核心素养”项目负责人林崇德教授担任总顾问，《义务教育小学科学》课标组负责人胡卫平领衔，STEAM教育评价专家会员36位资深专家及国内50多位基础教育领域的课程研究与课程教学的专家及近200位一线优秀教师共同研发。</p>
        </div>
        <!-- 3/4系统科学 -->
        <div class="advantage-inner-item">
          <img :src="this.base+'liangfr3.png'" />
          <span>系统科学</span>
          <div class="line"></div>
          <p>根据学前儿童及中小学生认知水平、身心发展特点分学段进阶式设计，通过高质量、系统性的课程资源库建设，弥补STEAM教育、素养类课程师资的缺乏，深化基础教育课程的广度和深度。</p>
        </div>
        <!-- 4/4信息化学习 -->
        <div class="advantage-inner-item">
          <img :src="this.base+'liangfr4.png'" />
          <span>信息化学习</span>
          <div class="line"></div>
          <p>坚持以学定教，结合学习平台（手机端、PC端）、AR技术等信息化手段实现教师、学生、家长之间的互动与协作。</p>
        </div>
      </div>
    </div>
    <!-- 亮点优势 结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
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