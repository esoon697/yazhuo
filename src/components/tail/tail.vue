<template>
  <div class="footer">
    <div class="footerLink">
      <!-- 左侧开始 -->
      <div class="footerLeft">
        <div class="lines one">
          <a href="javascript:;">
            <img :src="this.base+'footlog.png'" />
          </a>
        </div>
        <div class="lines two">
          <a href="javascript:;">关于亚卓</a>
          <a href="javascript:;">帮助中心</a>
        </div>
        <div class="lines linecut">
          <i></i>
        </div>
        <div class="three">
          <p class="p1">联系我们:</p>
          <p class="p2">tel:400-086-7229</p>
          <p class="p3">地址:成都市天府三街太平洋保险金融大厦</p>
        </div>
      </div>
      <!-- 左侧结束 -->
      <!-- 右侧开始 -->
      <div class="footerRight">
        <div class="onebox onebox1">
          <p class="p1">
            <span class="s1">关注我们 :</span>
            <span class="s2">
              <i class="wx" :style="{background:`url(${this.base+'iconwx.png'})`}"></i>
            </span>
          </p>
          <p class="p2" style="padding: 0 20px;box-sizing: border-box;">
            <img :src="tailInfo.infmWechatQrCode" />
          </p>
        </div>
        <div class="onebox onebox2">
          <p class="p1">
            <span class="s1">在线客服 :</span>
            <span class="s2">
              <i class="qq" :style="{background:`url(${this.base+'iconqq.png'})`}"></i>
            </span>
          </p>
          <p class="p2">
            <img :src="tailInfo.infmQqQrCode" />
          </p>
        </div>
        <div class="onebox onebox3">
          <p class="p1">
            <span class="s1">钉钉客服 :</span>
            <span class="s2">
              <i class="dd" :style="{background:`url(${this.base+'iconding.png'})`}"></i>
            </span>
          </p>
          <p class="p2">
            <img :src="tailInfo.infmDingQrCode" />
          </p>
        </div>
      </div>
      <!-- 右侧结束 -->
    </div>
    <!-- 版权开始 -->
    <div class="footerCopy">
      <p>四川亚卓教育科技股份有限公司 Copyright &copy; 2019 亚卓教育 All RIGHTS RESERVED. 蜀ICP备13026910号-2</p>
    </div>
    <!-- 版权结束 -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "tail",
  components: {},
  data() {
    return {
      tailInfo: {}
    };
  },
  created() {
    this.getmessage();
  },
  methods: {
    getmessage() {
      // let that = this;
      // Axios.get(
      //   "https://mock.aarnio.cn/mock/5e4a4a71a7e3066df43697b8/example/title",
      //   {
      //     params: {}, // 参数
      //     timeout: 3000 // 配置
      //   }
      // ).then(res => {
      //   that["res"] = res.data.data[0];
      //   console.log('````````````````````````````````````````````````````````````````````', that["res"])
      // });
      this.$api.getInfmByParams({
        infmTypeId: 12
      }).then(res => {
        if (res.code == 200) {
          this.tailInfo = res.data.list[0]
        }
      })
    }
  }
};
</script>

<style scoped>
/* 页面公共huang */
* {
  font-family: "microsoft yehei", "微软雅黑" !important;
}
a {
  text-decoration: none;
  color: #333;
}
img {
  border: none;
  vertical-align: middle;
}
input,
button {
  outline: none;
  border: none;
}
p {
  margin: 0;
}
/* footer */
.footer {
  background: -#ddd;
  padding: 40px 0 20px;
}
.footer .footerLink {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.footerCopy {
  width: 100%;
  clear: both;
  border-top: 1px solid #e0e0e0;
}
.footerCopy p {
  width: 1200px;
  margin: 0 auto;
  color: #969696;
  font-size: 16px;
  padding: 10px 0;
}
/* 左侧 */
.footerLeft {
  float: left;
  width: 40%;
}
.footerLeft .lines {
  padding-bottom: 15px;
}
.footerLeft .one a {
  display: inline-block;
  width: 233px;
  height: 15px;
}
.footerLeft .one a img {
  display: block;
  width: 100%;
  height: 100%;
}
.footerLeft .two a {
  color: #969696;
  font-size: 16px;
  display: inline-block;
  margin-right: 20px;
}
.footerLeft .two a:hover {
  color: #1e9fff;
}
.footerLeft .linecut i {
  display: inline-block;
  width: 106px;
  height: 1px;
  background: #a4a4a4;
}
.footerLeft .three {
  overflow: hidden;
  padding-top: 1px;
}
.footerLeft .three p {
  float: left;
}
.footerLeft .three .p1,
.footerLeft .three .p2 {
  padding-right: 20px;
}
.footerLeft .three .p1 {
  color: #969696;
}

.footerLeft .three .p2,
.footerLeft .three .p3 {
  color: #5c5c5c;
}
/* 右侧 */
.footerRight {
  /* float: right; */
  display: flex;
  width: 60%;
  overflow: hidden;
}
.footerRight .onebox {
  /* float: left; */
  display:flex;
  overflow: hidden;
}
.footerRight .onebox .p1 {
  float: left;
}
.footerRight .onebox .p1 span {
  display: block;
}
.footerRight .onebox .p1 .s1 {
  color: #797979;
  font-size: 16px;
  padding-bottom: 5px;
}
.footerRight .onebox .p1 .s2 {
  text-align: right;
}
.footerRight .onebox .p1 .s2 i {
  display: inline-block;
  width: 32px;
  height: 32px;
  /* border: 1px solid #797979; */
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  border-radius: 100%;
  font-size: 22px;
  color: #797979;
}
.footerRight .onebox .p1 .s2 i.wx {
  width: 31px;
  height: 32px;
}
.footerRight .onebox .p1 .s2 i.qq {
  width: 34px;
  height: 34px;
}
.footerRight .onebox .p1 .s2 i.dd {
  width: 33px;
  height: 33px;
}
.footerRight .onebox .p2 {
  float: right;
  padding: 0 8px;
}
.footerRight .onebox .p2 img {
  display: inline-block;
}
.footerRight .onebox1 .p2 img {
  width: 130px;
  height: 130px;
}
.footerRight .onebox2 .p2 img {
  width: 120px;
  height: 130px;
}
.footerRight .onebox3 .p2 img {
  width: 130px;
  height: 130px;
}
</style>
