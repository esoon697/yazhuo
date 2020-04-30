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
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli1.png'" />
          </p>
          <p class="p2 ellipsis">师资培训</p>
          <p
            class="p3 ellipsis-two"
          >steam能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。steam能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli2.png'" />
          </p>
          <p class="p2 ellipsis">校园文化</p>
          <p
            class="p3 ellipsis-two"
          >综合实践活动能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。综合实践活动能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli3.png'" />
          </p>
          <p class="p2 ellipsis">课程建设</p>
          <p
            class="p3 ellipsis-two"
          >小猛犸能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。小猛犸能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli4.png'" />
          </p>
          <p class="p2 ellipsis">平台定制</p>
          <p
            class="p3 ellipsis-two"
          >steam能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。steam能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli5.png'" />
          </p>
          <p class="p2 ellipsis">赛事辅导</p>
          <p
            class="p3 ellipsis-two"
          >综合实践活动能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。综合实践活动能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli6.png'" />
          </p>
          <p class="p2 ellipsis">人才培养</p>
          <p
            class="p3 ellipsis-two"
          >小猛犸能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。小猛犸能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli7.png'" />
          </p>
          <p class="p2 ellipsis">双师课堂</p>
          <p
            class="p3 ellipsis-two"
          >steam能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。steam能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli8.png'" />
          </p>
          <p class="p2 ellipsis">信息化提升</p>
          <p
            class="p3 ellipsis-two"
          >综合实践活动能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。综合实践活动能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
        </a>
        <a href="javascript:;" class="boxlink anisca">
          <p class="p1">
            <img :src="this.base+'solveli9.png'" />
          </p>
          <p class="p2 ellipsis">名师解码名师解码名师解码名师解码名师解码名师解码名师解码</p>
          <p
            class="p3 ellipsis-two"
          >小猛犸能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。小猛犸能力和核心素养是统一的，相互促进的，是一种跨学科整合能力。</p>
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
    return {};
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
    &:hover {
      color: #0182fa;
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
    .p3 {
      box-sizing: content-box !important;
      width: 90%;
      padding-left: 5%;
      padding-right: 5%;
      margin: 0 auto;
    }
    .p2 {
      text-align: center;
      font-size: 25px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .p3 {
      text-align: justify;
      line-height: 30px;
      height: 60px;
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