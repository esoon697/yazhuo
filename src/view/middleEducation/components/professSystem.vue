<template>
  <div>
    <!-- 产品体系 开始 -->
    <div class="system">
      <!-- 定位闹钟 -->
      <!-- <div class="systemtime" :style="{background:`url(${this.base+'sysTiem.png'})`}"></div> -->
      <!-- 定位背景1 -->
      <div class="systembgs systembg1" :style="{background:`url(${this.base+'eduflbg2.png'})`}"></div>
      <!-- 定位背景2 -->
      <div class="systembgs systembg2" :style="{background:`url(${this.base+'eduflbg1.png'})`}"></div>
      <!-- 以下开始正文了 -->
      <!-- <p class="flex-center system-title">产品体系</p> -->
      <partTitle :isWhite='false' :titleText="'系列课程'"/>
      <div class="system-content" :style="{backgroundImage:`url(${this.base+'edulines.png'})`}">
        <div class="system-two flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'proSys2.png'" />
            <span>班主任成长梦工场</span>
          </div>
          <p>教育信息化背景下的“班主任职业能力构建与提升”，班主任成长路上好伙伴</p>
        </div>
        <div class="system-one flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'proSys1.png'" />
            <span>素养播种计划</span>
          </div>
          <p>从职业角色、工作胜任、生涯发展三维度培养学生职业素养</p>
        </div>
        <div class="system-three flex-between">
          <div class="flex-center-y">
            <img :src="this.base+'proSys3.png'" />
            <span>公共基础课程辅助数字资源库</span>
          </div>
          <p>聚焦新课标学科素养 挖掘公共基础课育人价值</p>
        </div>
      </div>
    </div>
    <!-- 产品体系 结束 -->
    <!-- 课程结构 开始 -->
    <div class="lesson">
      <!-- <p class="lesson-title flex-center">课程结构</p> -->
      <partTitle :isWhite='false' :titleText="'课程结构'"/>
      <!-- 多套一层避免里面的元素定位距离小屏幕不兼容 -->
      <div class="lesson-inner-wrap" :style="{background:`url(${this.base+'lessonBg.png'})`}">
        <div class="lesson-inner">
          <!-- 顺序为顺时针，最后一个div是中间最大的 -->
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
    <!-- 课程结构 结束 -->
    <!-- 亮点优势 开始 -->
    <div class="advantage">
      <!-- <p class="advantage-title flex-center">亮点优势</p> -->
      <partTitle :isWhite='false' :titleText="'亮点优势'"/>
      <div class="advantage-inner flex-center-y">
        <!-- 1/4海量资源 -->
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
          url: this.base+'linagfl1.png',
          title: '海量资源',
          content: '汇集近千个精心打磨的教学设计、丰富的案例、有趣的活动、大量的拓展资源等，满足教师课前备课、课中授课以及学生课后拓展学习、提升自我素养的需求。',
        },
        {
          url: this.base+'linagfl2.png',
          title: '权威专家',
          content: '由中国人民大学心理研究所所长俞国良教授、北京师范大学公民与道德教育研究中心主任檀传宝教授、华东师范大学职业教育与成人教育研究所徐国庆教授、中国职教学会德育工作委员会副主任汪永智教授领衔，北大、清华、北师大、人民大学、中国教育科学研究院、华东师大、北航、电子科大、华南理工、西南大学等50余位知名专家学者教育科技机构国内、众多中职德育领域课程研究与课。',
        },
        {
          url: this.base+'linagfl3.png',
          title: '系统科学',
          content: '遵照教育部颁发的《中等职业学校公共基础课课程方案》、《中国职业教育学生发展核心素养》等文件纲领要求，根据中职学生的身心特点和职业发展需求设计，适应新时代发展趋势，通过高质量、系统性的课程资源，提高中等职业学校德育、公共基础课及职业素养建设水平。',
        },
        {
          url: this.base+'linagfl4.png',
          title: '信息化学习',
          content: '坚持以学定教，结合学习平台（手机端、PC端），满足教师和学生在线学习、在线课程建设、教学管理等功能，促进广大中职学校教育信息化的发展。',
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
  .systemtime {
    width: 261px;
    height: 194px;
    top: 115px;
    right: 17px;
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
    max-width: 1200px;
    margin: 0 auto;
    height: 430px;
    background-repeat: no-repeat !important;
    background-size: 100% 100% !important;
    margin: 0 auto;
    padding: 83px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .system-one {
      padding: 0 40px 0 93px;
      img {
        width: 44px;
        height: 44px;
      }
      span {
        font-size: 20px;
        color: #fff;
        margin-left: 20px;
      }
      p {
        font-size: 14px;
        color: #fff;
        width: 480px;
      }
    }
    .system-two {
      padding: 0 40px 0 93px;
      img {
        width: 44px;
        height: 44px;
      }
      span {
        font-size: 20px;
        color: #fff;
        margin-left: 20px;
      }
      p {
        font-size: 14px;
        color: #fff;
        width: 480px;
      }
    }
    .system-three {
      padding: 0 40px 0 93px;
      img {
        width: 44px;
        height: 44px;
      }
      span {
        font-size: 20px;
        color: #fff;
        margin-left: 20px;
      }
      p {
        font-size: 14px;
        color: #fff;
        width: 480px;
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
  .system .systemtime {
    width: 221px;
    height: 164px;
  }
}
</style>