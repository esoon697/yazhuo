<template>
  <div>
    <!-- 头部 -->
    <header-asideMenu />
    <div class="middle">
      <!-- tab选项卡 开始 -->
      <div class="middle-top">
        <img :src="this.base+'resBg.png'" />
        <div class="fence flex-center-y">
          <div
            :class="['fence-left flex-center-col', active == 0 ? 'fence-active' : '']"
            @click="choose(0)"
          >
            <img :src="[active == 0 ? m1 : m3]" />
            <span>职业教育</span>
          </div>
          <div
            :class="['fence-right flex-center-col', active == 1 ? 'fence-active' : '']"
            @click="choose(1)"
          >
            <img :src="[active == 1 ? m4 : m2]" />
            <span>基础教育</span>
          </div>
          <div
            :class="['fence-right flex-center-col', active == 2 ? 'fence-active' : '']"
            @click="choose(2)"
          >
            <img :src="[active == 2 ? m6 : m5]" />
            <span>家庭教育</span>
          </div>
        </div>
      </div>
      <!-- tab选项卡 结束 -->
      <!-- tab内容区 开始 -->
      <profess-system v-show="active == 0"></profess-system>
      <basic-system v-show="active == 1"></basic-system>
      <familySystem v-show="active == 2"></familySystem>
      <!-- tab内容区 结束 -->
    </div>
    <!-- 底部 -->
    <tail />
    <!-- 回到顶部 -->
    <back-top></back-top>
  </div>
</template>

<script>
import basicSystem from "./components/basicSystem";
import professSystem from "./components/professSystem";
import familySystem from "./components/familySystem";
export default {
  data() {
    return {
      active: 0,
      m1: `${this.base + "tabm1.png"}`,
      m2: `${this.base + "tabm2.png"}`,
      m3: `${this.base + "tabm3.png"}`,
      m4: `${this.base + "tabm4.png"}`,
      m5: `${this.base + "tabm7.png"}`,
      m6: `${this.base + "tabm8.png"}`
    };
  },
  components: {
    basicSystem,
    professSystem,
    familySystem
  },
  methods: {
    choose(index) {
      this.active = index;
    }
  }
};
</script>

<style lang="less" scoped>
* {
  font-family: "microsoft yehei", "微软雅黑" !important;
}
.middle {
  .middle-top {
    width: 100%;
    height: auto;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .fence {
      box-sizing: border-box;
      width: 1200px;
      height: 160px;
      background-color: #fff;
      position: absolute;
      bottom: -80px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;
      .fence-left,
      .fence-right {
        width: 50%;
        height: 100%;
        font-size: 18px;
        color: #333;
        cursor: pointer;
        border: 1px solid #aaaaaa;
      }
      .fence-active {
        background: #007ab7;
        color: #fff;
        border: 1px solid #007ab7;
      }
      .fence-left img,
      .fence-right img {
        width: 90px;
        height: 75px;
        margin-bottom: 7px;
      }
    }
    @media screen and (max-width: 1200px) {
      .fence{
        width: 100%;
      }
    }
  }
}
</style>