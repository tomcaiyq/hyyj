<template>
  <div class="home content">
    <div class="button">
      <button size="small" class="btnTitle">
        <router-link to="/VideoNews">视频新闻</router-link>
      </button>
      <button size="small" class="btnTitle">
        <router-link to="/ImgShow">海洋图片</router-link>
      </button>
      <button size="small" class="btnTitle btnActive">
        <router-link to="/OceanNews">海洋新闻</router-link>
      </button>
      <button size="small" class="btnTitle">
        <router-link to="/Knowledge">百科知识</router-link>
      </button>
    </div>
    <div class="titleSource">
      <h2 class="text">{{title}}</h2>
      <div style="float:left;">时间：{{time}}&nbsp;&nbsp;&nbsp;来源：{{source}}</div>
      <div class="box" style="float:right;">
        <ul>
          <li class="showSize">
            <span>字体:</span>
            <span class="h big" @click="toggleTab(0)" :style="styleobj1">大</span>
            <span
              class="h middle"
              style="background-color:#333"
              @click="toggleTab(1)"
              :style="styleobj2"
            >中</span>
            <span class="h small" @click="toggleTab(2)" :style="styleobj3">小</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-html="content" class="contents" :style="styleobj4">{{content}}</div>
    <div class="ewm">
      <span>查询海洋预报</span>
      <span>关注“国家海洋预报台”官方微信</span>
      <span>
        <img src="../../assets/img/hyyjEr.png" />
      </span>
    </div>
    <div class="text" style="margin-top: 40px;">
		转载请注明"来源：{{source}}" <span style="float:right;">编辑：未知</span>
	</div>
  </div>
</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return {
      title: "前三季度全国海洋生产总值6万亿元 海洋经济平稳运行",
      time: "2018-12-04 18:32",
      source: "战略经济司",
      styleobj1: "",
      styleobj2: "",
      styleobj3: "",
      styleobj4: "",
      content:
        "<h1>1、风暴潮预报</h1><p>预计8月份我国沿海将有2-3次台风风暴潮过程，0-1次灾害性温带风暴潮过程。</p><h1>2、各海区海浪预报</h1><p>预计6月份各海区有4米以上的灾害性海浪过程的次数：<br/>渤海、黄海海域将有0-1次；</p>"
    };
  },
  methods: {
    selectStyle() {
      console.log("Ddddddddd");
      var a = $(".text").text();
    },
    toggleTab(index) {
      if (index == 0) {
        (this.styleobj1 = { "background-color": "#000" }),
          (this.styleobj2 = { "background-color": "#AAAAAA" }),
          (this.styleobj3 = { "background-color": "#AAAAAA" }),
          (this.styleobj4 = { "font-size": "20px" });
        $(".contents p").css({ "font-size": "20px", "line-height": "34px" });
        $(".contents h1").css({ "font-size": "20px", "line-height": "34px" });
        $(".newsContent div").css({
          "font-size": "20px",
          "line-height": "34px"
        });
        $(".newsContent span").css({
          "font-size": "20px",
          "line-height": "34px"
        });
      } else if (index == 1) {
        (this.styleobj1 = { "background-color": "#AAAAAA" }),
          (this.styleobj2 = { "background-color": "#000" }),
          (this.styleobj3 = { "background-color": "#AAAAAA" }),
          (this.styleobj4 = { "font-size": "14px" });
        $(".contents p").css({ "font-size": "14px", "line-height": "26px" });
        $(".contents h1").css({ "font-size": "14px", "line-height": "26px" });
        $(".newsContent div").css({
          "font-size": "14px",
          "line-height": "26px"
        });
        $(".newsContent span").css({
          "font-size": "14px",
          "line-height": "26px"
        });
      } else {
        (this.styleobj1 = { "background-color": "#AAAAAA" }),
          (this.styleobj2 = { "background-color": "#AAAAAA" }),
          (this.styleobj3 = { "background-color": "#000" }),
          (this.styleobj4 = { "font-size": "12px" });
        $(".contents p").css({ "font-size": "12px", "line-height": "20px" });
        $(".contents h1").css({ "font-size": "12px", "line-height": "20px" });
        $(".newsContent div").css({
          "font-size": "12px",
          "line-height": "20px"
        });
        $(".newsContent span").css({
          "font-size": "12px",
          "line-height": "20px"
        });
      }
    }
  }
};
</script>
<style scoped>
.home {
  height: 1200px;
}
.titleSource {
  height: 80px;
  line-height: 40px;
}
.wechatSpe {
  display: none;
}
.showSize .h {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(170, 170, 170);
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}
.h.active {
  background: #aa3535;
}
.contents p {
  font-size: 14px;
  line-height: 26px;
}
.ewm span {
    text-align: center;
    display: block;
    margin-top: 6px;
}
</style>