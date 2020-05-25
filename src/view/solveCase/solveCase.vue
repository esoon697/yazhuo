<template>
  <div class="main">
    <!-- 头部 -->
    <header-asideMenu />
    <!-- 横幅banner 开始-->
    <div class="solveBanner"></div>
    <!-- 横幅banner 结束-->
    <!-- 图文列表 开始 -->
    <div class="solveWid100">
      <div class="solveList">
        <a href="javascript:;" class="boxlink anisca" v-for="(solve, index) in solveList" :key="index">
          <p class="p1">
            <img :src="solve.url" />
          </p>
          <p class="p2 ellipsis">{{solve.title}}</p>
          <p class="p-sub ellipsis">{{solve.subtitle}}</p>
          <!-- <p
            class="p3 ellipsis-two"
          >{{solve.content}}</p> -->
          <a-popover placement="bottom">
            <template slot="content">
              <p style="width: 300px; textIndent: 20px">{{solve.content}}</p>
              <p style="width: 300px; textIndent: 20px">{{solve.content1}}</p>
            </template>
            <p class="p3 ellipsis-two">{{solve.content}}</p>
          </a-popover>
        </a>
      </div>
    </div>
    <!-- 图文列表 结束 -->
    <!-- 底部 -->
    <tail />
    <!-- 回到顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
export default {
  data() {
    return {
      solveList: [
        {
          url: this.base+'solveli1.jpg',
          title: '教育部“STEAM教育课程教学改革”项目:',
          subtitle: '小学STEAM教育整体解决方案',
          content: '该方案包含由教材、实验活动、实验材料、数字教育资源库和线下增值服务五个部分，帮助学生运用跨学科知识及思维解决生活中的实际问题。',
          content1: '该项目受到教育部基础教育课程教材发展中心的认可，目前已在全国各课改实验区113所学校完成了全面实验教学。'
        },
        {
          url: this.base+'solveli2.jpg',
          title: '中等职业教育特色品牌学校建设创新课题:',
          subtitle: '中职学生职业素养培养示范学校建设方案',
          content: '该项目基于华东师范大学职成教研究所研究课题“中国职业教育学生发展核心素养”的核心思想，从学生、教师、学校三个层面入手，以两年为建设周期，帮助学生全面提高职业素养，助力学校在中等职业教育领域树立良好的特色品牌。',
          content1: '该项目受到教育部基础教育课程教材发展中心的认可，目前已在全国各课改实验区113所学校完成了全面实验教学。',
        },
        {
          url: this.base+'solveli3.jpg',
          title: '中职学校班主任工作创新改革实验校项目:',
          subtitle: '班主任成长梦工场',
          content: '该方案在北京师范大学公民与道德教育研究中心、广东省中职学校德育研究会的指导下开发，包含线下培训、数字教育资源、实务工具包、教学管理软件、评测系统以及数字教学中心，全方位提升中职学校班主任的职业能力。',
          content1: '该项目受到教育部基础教育课程教材发展中心的认可，目前已在全国各课改实验区113所学校完成了全面实验教学。目前，该项目已有60余所中职学校参与。'
        },
        {
          url: this.base+'solveli4.jpg',
          title: '全国技工院校德育工作创新发展计划:',
          subtitle: '班主任工作整体解决方案',
          content: '该项目在中国职业技术教育学会德育工作委员会副主任、班主任与师德建设中心主任汪永智教授指导下研发，包括线下培训方案、班主任工具合集、数字教育资源、在线课程、评测系统、管理系统、网络平台七大模块，解决技工学校德育课程资源缺乏、班主任队伍质量等问题。',
          content1: '该项目受到教育部基础教育课程教材发展中心的认可，目前已在全国各课改实验区113所学校完成了全面实验教学。',
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
// 页面公共类huang
a {
  text-decoration: none;
  color: #333333;
}
img {
  border: none;
  outline: none;
}
* {
  font-family: "microsoft yehei", "微软雅黑" !important;
}
.solveWid100 {
  width: 100%;
  background: #f4f4f4;
}
// 横幅banner
.solveBanner {
  height: 600px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(http://182.148.48.236:54321/source/images/solveBg.jpg);
}
// 图文列表
.solveList {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 60px;
  overflow: hidden;
  .boxlink {
    width: 386px;
    height: auto;
    margin-bottom: 60px;
    padding-bottom: 20px;
    background: #ffffff;
    box-shadow: 0 0 10px #cccccc;
    // 兼容IE9
    margin-right: 21px;
    float: left;
    // 兼容IE9
    &:nth-child(3n) {
      margin-right: 0;
    }
    p {
      width: 100%;
    }
    .p1 {
      height: 295px;
      overflow: hidden;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    .p2,
    .p3,
    .p-sub {
      box-sizing: content-box !important;
      width: 90%;
      padding-left: 5%;
      padding-right: 5%;
      margin: 0 auto;
    }
    .p2 {
      text-align: center;
      font-size: 18px;
      padding-top: 20px;
      padding-bottom: 20px;
      font-weight: bold;
    }
    .p3 {
      text-align: justify;
      line-height: 30px;
      height: 60px;
    }
    .p-sub{
      display: flex;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      transform: translateY(-35%);
      color: #666;
    }
    &:hover {
      color: #0182fa;
      .p-sub{
        color: #0182fa;
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .solveList{
    width: 100%;
    .boxlink{
      width: 47%;
      margin-right: 0;
    }
  }
}
</style>