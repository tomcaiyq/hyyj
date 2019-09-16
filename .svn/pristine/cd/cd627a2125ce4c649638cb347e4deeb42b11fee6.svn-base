<template>
  <div>
    <div class="title">
      <p>10米风场预报</p>
      <span class="left">起报时间：{{time}}</span>
      <span class="right">更多>></span>
    </div>
    <div class="bottom">
      <!-- 切换按钮 -->
      <div class="buttonMore">
        <p
          v-for="(item,index) in button"
          :key="index"
          :class="activeClass == index?'actived':''"
          @click="getItem(index)"
        >
          <span></span>
          {{item.value}}
        </p>
      </div>
      <!-- 静态图片展示区域 -->
      <div class="imgCon" v-show="imgSelect">
        <div class="timeLine">
          <span class="btn">
            <i class="el-icon-caret-left"></i>
          </span>
          <ul class="timeBtn">
            <li
              v-for="(item,index) in timeBtn"
              :key="index"
              :class="activeName == index?'actived':''"
              @click="getName(index)"
            >
              <button @click="btnImg(item.name,item.url)">{{item.name}}</button>
            </li>
          </ul>
          <span class="btn">
            <i class="el-icon-caret-right"></i>
          </span>
        </div>
        <p>{{timeShow}}</p>
        <div class="imgShow">
          <img :src="urlImg" @click="imgCursor()" />
        </div>
      </div>
      <!-- 动态区域展示区域 -->
      <div class="imgConGif" v-show="imgGif">
        <p style="text-align:center;font-size:19px;">10米风场预报图动画</p>
        <img :src="gifImg" />
      </div>
    </div>
    <!-- 图片下面展示的文字 -->
    <div class="textCon">
      <span class="left"></span>
      <span style="font-weight:bold;">预报产品说明</span>
      <p>图中预报要素为10米风场和风级，数据来自国家海洋环境预报中心IDWRF数值预报模式；</p>
      <p>10米风场：由风向杆表示。</p>
      <p>10米风级：风级根据“蒲福风级”划分，由填色阴影表示。阴影是从五级风力开始，即10米风场预报图突出强调了海平面之上约10米的强风。</p>
    </div>
    <!-- 轮播图 -->
    <div id="cursor">
      <el-carousel indicator-position="outside" v-show="carouImg">
        <el-carousel-item v-for="item in LunBoImg" :key="item.index">
          <span class="closeBtn" @click="close()">X</span>
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return {
      time: "2019年09月11日12时(UTC)",
      activeClass: 0,
      activeName: 0,
      imgSelect: true,
      imgGif: false,
      carouImg: false,
      timeShow: "2019-09-15 12(UTC)+024 ---> 2019-09-16 12(UTC)",
      urlImg: require("../../assets/haidao.png"),
      gifImg: require("../../assets/haidao.png"),
      button: [
        {
          id: 0,
          index: 0,
          value: "预报图"
        },
        {
          id: 1,
          index: 1,
          value: "预报图动画"
        }
      ],
      timeBtn: [
        {
          id: 0,
          index: 0,
          name: "+24",
          url: require("../../assets/img/imgList.jpg")
        },
        {
          id: 1,
          index: 1,
          name: "+48",
          url: require("../../assets/img/imgList1.png")
        },
        {
          id: 2,
          index: 2,
          name: "+74",
          url: require("../../assets/img/imgList3.jpeg")
        },
        {
          id: 3,
          index: 3,
          name: "+96",
          url: require("../../assets/img/imgList3.jpeg")
        },
        {
          id: 4,
          index: 4,
          name: "+120",
          url: require("../../assets/img/imgList1.png")
        },
        {
          id: 5,
          index: 5,
          name: "+144",
          url: require("../../assets/img/imgList3.jpeg")
        },
        {
          id: 6,
          index: 6,
          name: "+168",
          url: require("../../assets/img/imgList1.png")
        }
      ],
      LunBoImg: [
        {
          id: 0,
          index: 0,
          url: require("../../assets/img/imgList.jpg")
        },
        {
          id: 1,
          index: 1,
          url: require("../../assets/img/imgList3.jpeg")
        },
        {
          id: 2,
          index: 2,
          url: require("../../assets/img/imgList1.png")
        }
      ]
    };
  },
  methods: {
    getItem(index) {
      this.activeClass = index;
      if (index == 0) {
        this.imgSelect = true;
        this.imgGif = false;
      } else {
        this.imgSelect = false;
        this.imgGif = true;
      }
    },
    // 时效点击效果事件
    getName(index) {
      this.activeName = index;
    },
    // 点击时效按钮切换下面标题以及图片事件
    btnImg(name, url) {
      console.log(name, url);
      this.timeShow = "2019-09-15 12(UTC)" + name + " ---> 2019-09-16 12(UTC)";
      this.urlImg = url;
    },
    // 轮播图展示事件
    imgCursor() {
      this.carouImg = true;
    },
    // 轮播图关闭事件
    close(){
      this.carouImg = false;

    }
  }
};
</script>
<style scoped>
/* 左右布局的公共样式 */
@import '../../assets/css/silkRoadScon.css';
</style>
<style>
@import '../../assets/css/silkRoad.css';

</style>