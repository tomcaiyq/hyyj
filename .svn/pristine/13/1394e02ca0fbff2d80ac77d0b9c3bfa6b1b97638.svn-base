<template>
  <div class="home content">
    <div class="button">
      <button size="small" class="btnTitle">
        <router-link to="/VideoNews">视频新闻</router-link>
      </button>
      <button size="small" class="btnTitle btnActive">
        <router-link to="/ImgShow">海洋图片</router-link>
      </button>
      <button size="small" class="btnTitle">
        <router-link to="/OceanNews">海洋新闻</router-link>
      </button>
      <button size="small" class="btnTitle">
        <router-link to="/Knowledge">百科知识</router-link>
      </button>
    </div>
    <!-- 新闻报道 -->
    <div class="cont">
      <h2 class="vodeoTit">
        新闻报道
        <span @click="selectMore(0)">查看更多 ></span>
      </h2>
      <div>
        <ul>
          <li
            v-for="(item,index) in ForecastVideo"
            :key="item.id"
            v-if="index<=6"
            @click="showImgs(item.id)"
          >
            <div class="imgCon">
              <img :src="item.path" />
            </div>
            <div>
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 海洋灾害 -->
    <div class="cont">
      <h2 class="vodeoTit">
        海洋灾害
        <span @click="selectMore(1)">查看更多 ></span>
      </h2>
      <div>
        <ul>
          <li
            v-for="(item,index) in MarineDisasters"
            :key="item.id"
            v-if="index<=6"
            @click="showImgs(item.id)"
          >
            <div class="imgCon">
              <img :src="item.path" />
            </div>
            <div>
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 灾害防御 -->
    <div>
      <h2 class="vodeoTit">
        灾害防御
        <span @click="selectMore(2)">查看更多 ></span>
      </h2>
      <div>
        <ul>
          <li
            v-for="(item,index) in DisasterPre"
            :key="item.id"
            v-if="index<=6"
            @click="showImgs(item.id)"
          >
            <div class="imgCon">
              <img :src="item.path" />
            </div>
            <div>
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="slideShow" class="slideShow" id="slide">
      <el-carousel :interval="5000" arrow="always" indicator-position="none">
        <el-carousel-item v-for="item in MarineDisasters" :key="item">
          <img :src="item.path" />
          <span class="close" @click="close()">X</span>
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
      ForecastVideo: [
        {
          id: 0,
          name: "凤凰卫视海洋预报",
          path: require("@/assets/haidao.png"),
          url: "https://media.w3.org/2010/05/sintel/trailer.mp4"
        },
        {
          id: 1,
          name: "2019年9月05日美丽海岛环境预",
          path: require("@/assets/haidao.png")
        },
        {
          id: 2,
          name: "2019年9月05日海上丝绸之路环境预",
          path: require("@/assets/haidao.png")
        },
        {
          id: 3,
          name: "2019年9月05日美丽海岛环境预",
          path: require("@/assets/haidao.png")
        },
        {
          id: 4,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 5,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 6,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 7,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 8,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 9,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 10,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        }
      ],
      MarineDisasters: [
        {
          id: 0,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 1,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 2,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 3,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 4,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 5,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 6,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 7,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 8,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 9,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 10,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        }
      ],
      DisasterPre: [
        {
          id: 0,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 1,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 2,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 3,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 4,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 5,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 6,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 7,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        }
      ],
      slideShow: false
    };
  },
  methods: {
    // 查看更多跳转
    selectMore(id) {
      this.$router.push({
        path: "/ImgShowMore", //跳转的路径
        query: { id: id }
      });
    },
    // 查看播放页面跳转
    showImgs(id) {
      this.slideShow = true;
      console.log(id);
    },
    // 点击关闭轮播图弹框
    close() {
      this.slideShow = false;
    }
  }
};
</script>
<style scoped>
p {
  font-size: 14px;
}
.title {
  margin-bottom: 15px;
  width: 100%;
  background-color: #ccc;
  height: 30px;
  line-height: 30px;
  color: #fff;
}
.cont {
  margin-bottom: 20px;
  height: 395px;
}
span {
  cursor: default;
}
.home {
  height: 1200px;
  position: relative;
}
ul li {
  width: 190px;
  height: 160px;
  float: left;
  margin-right: 19px;
  margin-bottom: 21px;
}
ul li:first-child {
  width: 376px;
  height: 335px;
}
ul li:nth-child(4) {
  margin-right: 0px;
}
ul li:nth-child(7) {
  margin-right: 0px;
}
ul li:first-child .imgCon {
  width: 376px;
  height: 301px;
}
ul li:first-child .imgCon img {
  width: 100%;
  height: 100%;
}
.imgCon img {
  width: 100%;
  height: 120px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.slideShow {
  width: 700px;
  height: 600px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.close {
  position: absolute;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 30px;
  right: 10px;
  top: 10px;
}
</style>
<style>
#slide .el-carousel__container {
  position: relative;
  height: 400px;
}
</style>