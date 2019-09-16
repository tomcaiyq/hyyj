<template>
  <div class="home content">
    <div class="button">
      <button size="small" class="btnTitle btnActive"><router-link  to='/VideoNews'>视频新闻</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/ImgShow'>海洋图片</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/OceanNews'>海洋新闻</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/Knowledge'>百科知识</router-link></button>
    </div>
    <!-- 预报视频 -->
    <div class="cont">
      <h2 class="vodeoTit">预报视频 <span @click="selectMore(0)">查看更多 > </span></h2>
      <div>
        <ul>
          <li
            v-for="(item,index) in ForecastVideo"
            :key="item.id"
            v-if="index<=6"
            @click="videoShow(item.url,item.name)"
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
      <h2 class="vodeoTit">海洋灾害 <span @click="selectMore(1)">查看更多 > </span></h2>
      <div>
        <ul>
          <li
            v-for="(item,index) in MarineDisasters"
            :key="item.id"
            v-if="index<=6"
            @click="videoShow(item.url,item.name)"
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
     <h2 class="vodeoTit">灾害防御<span @click="selectMore(2)">查看更多 > </span></h2>
      <div>
        <ul>
          <li
            v-for="(item,index) in DisasterPre"
            :key="item.id"
            v-if="index<=6"
            @click="videoShow(2)"
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
      ]
    };
  },
  //   computed:{
  //       imgList:function(){
  //           return index<=6;
  //       }
  //   },
  methods: {
    // 查看更多跳转
    selectMore(id) {
      this.$router.push({
        path: "/VideoMore", //跳转的路径
        query: { id: id }
      });
    },
    // 查看播放页面跳转
    videoShow(url, name) {
      console.log(url);
      console.log(name);
      this.$router.push({
        path: "/VideoShow", //跳转的路径
        query: { url: url, name: name }
      });
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
  background-color: #0046cf;
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
  height: 1300px;
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
</style>