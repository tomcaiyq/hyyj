<template>
  <div class="home content">
    <div class="button">
      <button size="small" class="btnTitle btnActive"><router-link  to='/VideoNews'>视频新闻</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/ImgShow'>海洋图片</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/OceanNews'>海洋新闻</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/Knowledge'>百科知识</router-link></button>
    </div>
    <!-- 预报视频 -->
    <div ref="container"
         class="scorll">
      <div class="box">
        <ul class="clearfix">
          <li v-for="item in ForecastVideo"
              :key="item.id"  @click="videoShow(item.url,item.name)">
              <div class="imgCon">
                <img :src="item.path" />
              </div>
              <div>
                <p>{{item.name}}</p>
              </div>
          </li>
        </ul>
        <!-- loading -->
        <p class="load"
           v-if="isLoading">加载中...</p>
      </div>
    </div>
  </div>
</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return {
      isLoading: false,
      ForecastVideo: [
        {
          id: 0,
          name: "第一个",
          path: require("@/assets/haidao.png")
        },
        {
          id: 1,
          name: "第二个",
          path: require("@/assets/haidao.png")
        },
        {
          id: 2,
          name: "第三个",
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
        },
        {
          id: 11,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 12,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 13,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 14,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 15,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 16,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 17,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 18,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 19,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 20,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 21,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 22,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 23,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 24,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        },
        {
          id: 25,
          name: "2019年9月30日凤凰卫视海洋预报",
          path: require("@/assets/haidao.png")
        }
      ],
      id: ""
    };
  },
  //   computed:{
  //       imgList:function(){
  //           return index<=6;
  //       }
  //   },
  methods: {
    getInfo() {
      const obj = [
        {
          id: this.ForecastVideo.length + 1,
          name: `薛嘉--${this.ForecastVideo.length +
            1}`,
          path: require("@/assets/haidao.png")
        },
        {
          id: this.ForecastVideo.length + 2,
          name: `第二个--${this.ForecastVideo.length +
            2}`,
          path: require("@/assets/haidao.png")
        },
        {
          id: this.ForecastVideo.length + 3,
          name: `第三个吧--${this.ForecastVideo.length +
            3}`,
          path: require("@/assets/haidao.png")
        }
      ];
      setTimeout(()=>{
        this.ForecastVideo = this.ForecastVideo.concat(obj)
      },1000)
    },
    scrollTopHei() {
      let scrollTop = document.querySelector(".scorll").scrollTop;
      let clientHeight = document.querySelector(".box").clientHeight;
      let scrollHeight = document.querySelector(".scorll").clientHeight;
      if (scrollTop + scrollHeight >= clientHeight) {
        this.isLoading = true;
        this.getInfo();
      } else {
        this.isLoading = false;
      }
    },
    // 查看播放页面跳转
    videoShow(url,name) {
      console.log(url);
      console.log(name);
      this.$router.push({
        path: "/VideoShow", //跳转的路径
        query: {url:url,name:name}
      });
    }
  },
  mounted() {
    this.$refs.container.addEventListener("scroll", this.scrollTopHei);
  },
  created() {
    this.id = this.$route.query.id;
  }
};
</script>
<style scoped>
.home {
  /* height: 800px;
    overflow-x: scroll;  */
}
.scorll {
  overflow-x: hidden;
  height: 800px;
}
.scorll::-webkit-scrollbar{
  width:10px;
  height:10px;
  /**/
}
.scorll::-webkit-scrollbar-track{
  background: #fff;
  border-radius:2px;
}
.scorll::-webkit-scrollbar-thumb{
  background: #fff;
  border-radius:1px;
}
.scorll::-webkit-scrollbar-thumb:hover{
  background:#fff;
}
.scorll::-webkit-scrollbar-corner{
  background: #fff;
}
ul {
  display: block;
}
ul li {
  display: inline-block;
  /* float:left; */
}
.imgCon img {
  width: 100%;
  height: 120px;
}
ul li {
  width: 180px;
  height: 160px;
  float: left;
  margin-right: 16px;
  margin-bottom: 13px;
}
.load {
  text-align: center;
  margin: 10px 0;
}
</style>