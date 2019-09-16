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
    <div id="carousel">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imgList" :key="item.id">
          <img :src="item.path"  style="width:100%;height:100%;"  @click="imgNewsDeat(item.id)"/>
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
      imgList: [
        {
          id: 0,
          name:
            "“利奇马”海浪预警级别升级为红色 自然资源部启动海洋灾害二级应急响应",
          path: require("@/assets/img/imgList1.png")
        },
        {
          id: 1,
          name:
            "“利奇马”海浪预警级别升级为红色 自然资源部启动海洋灾害二级应急响应",
          path: require("@/assets/img/imgList.jpg")
        },
        {
          id: 2,
          name:
            "“利奇马”海浪预警级别升级为红色 自然资源部启动海洋灾害二级应急响应",
          path: require("@/assets/img/imgList3.jpeg")
        }
      ],
    };
  },
  methods:{
    imgNewsDeat(id){
      this.$router.push({
        path: "/OceanNewsDetails", //跳转的路径
        query: { id: id }
      });
    }
  }
};
</script>
<style scoped>
.home {
  height: 1200px;
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
</style>
<style>
#carousel .el-carousel__container {
    position: relative;
    height: 450px;
}
</style>