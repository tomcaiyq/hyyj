<template>
  <div class="home">
    <!-- 顶部蓝色时间显示 -->
    <div id="title">
      <div id="titleCont">
        <span>{{riqi.data}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{riqi.week}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;农历七月廿二{{riqi.cc}}</span>
      </div>
    </div>
    <!-- 顶部 -->
    <div id="topContent">
      <!-- 搜索框logo一排内容 -->
      <div id="content">
        <div class="top">
          <div style="float:left;">
            <a>
              <img :src="imgSrc" />
            </a>
            <span class="titleText">中国海洋预报</span>
          </div>
          <div class="selectCon" style="float:left;margin-left: 30px;">
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="搜索港口、渔场、浴场、海岛等"
              @select="handleSelect"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-autocomplete>
          </div>
        </div>
        <!-- 选择模块导航栏一排 -->
        <div class="searchTit">
          <div  @mouseleave="hideSub">
            <el-col :span="3" v-for="(item,index) in titleList" :key="item.id">
              <div
                :ref="'curr' + index"
                class="grid-content bg-purple"
                @click="showSubClick(item.path)"
                @mouseover="showSub(item.arr,index,item.path)"
               
              >{{item.name}}</div>
            </el-col>
            <ul ref="ulc" v-show="subTitleList.length" class="ul">
            <li
              v-for="(item,index) in subTitleList"
              :key="index"
              @click="toPath(item.value,item.path)"
            >{{item.label}}</li>
          </ul>
          </div>
          <!-- <ul ref="ulc" v-show="subTitleList.length" class="ul">
            <li
              v-for="(item,index) in subTitleList"
              :key="index"
              @click="toPath(item.value,item.path)"
            >{{item.label}}</li>
          </ul> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { demo, formatData, nongLiData } from "../../utils";
export default {
  name: "Home",
  data() {
    return {
      path: "",
      subTitleList: [],
      titleList: [
        {
          id: 0,
          name: "首页",
          path: "/IndexHome",
          arr: [
            {
              label: "",
              value: 0
            }
          ]
        },
        {
          id: 1,
          name: "灾害预警",
          path: "/WaveWarning",
          arr: [
            {
              label: "海浪警报",
              value: 0,
              path: "/WaveWarning"
            },
            {
              label: "风暴潮警报",
              value: 1,
              path: "/StormWarning"
            },
            {
              label: "海冰警报",
              value: 2,
              path: "/IceWarning"
            },
            {
              label: "海啸警报",
              value: 3,
              path: "/TsunamiWarning"
            }
          ]
        },
        {
          id: 2,
          name: "环境预报",
          path: "/SeaPrediction",
          arr: [
            {
              label: "海区预报",
              value: 0,
              path: "/SeaPrediction"
            },
            {
              label: "近岸预报",
              value: 1,
              path: "/NearshoreForecast"
            },
            {
              label: "周预报",
              value: 2,
              path: "/WeekForecast"
            },
            {
              label: "月预报",
              value: 3,
              path: "/MonthoForecast"
            },{
              label: "县级预报",
              value: 3,
              path: "/CountyForecast"
            }
          ]
        },
        {
          id: 3,
          name: "滨海旅游",
          path: "/BathForecast",
          arr: [
            {
              label: "浴场预报",
              value: 0,
              path: "/BathForecast"
            },
            {
              label: "度假区预报",
              value: 1,
              path: "/HolidayForecast"
            },
            {
              label: "旅游岛预报",
              value: 2,
              path: "/TourismForecast"
            },
            {
              label: "航线预报",
              value: 3,
              path: "/DomesticForecast"
            }
          ]
        },
        {
          id: 4,
          name: "渔业预报",
          path: "/FisheryForecast",
          arr: [
            {
              label: "渔场预报",
              value: 0,
              path: "/FisheryForecast"
            },
            {
              label: "近海预报",
              value: 1,
              path: "/OffshoreForecast"
            },{
              label: "国内港口预报",
              value: 2,
              path: "/DomesticPortFor"
            },{
              label: "天文潮预报",
              value: 3,
              path: "/TidePrediction"
            }
          ]
        },
        {
          id: 5,
          name: "海丝路",
          path: "/HesseRoadIndex",
          arr: [
            {
              label: "首页",
              value: 0,
              path: "/HesseRoadIndex"
            },
            {
              label: "风场",
              value: 1,
              path: "/WindField"
            },
            {
              label: "海浪",
              value: 2,
              path: "/SeaWave"
            },
            {
              label: "风暴潮",
              value: 3,
              path: "/StormSurge"
            },
            {
              label: "海啸",
              value: 4,
              path: "/Tsunami"
            },
            {
              label: "溢油",
              value: 5,
              path: "/SpilledOil"
            },
            {
              label: "搜救",
              value: 6,
              path: "/SearchFor"
            },
            {
              label: "三维温盐流",
              value: 7,
              path: "/ThermohalineFlow"
            }
          ]
        },
        {
          id:6,
          name: "冰丝路",
          path: "/IceSilkRoad",
          arr: [
            {
              label: "暂无",
              value: 0,
              path: ""
            }
          ]
        },
        {
          id: 7,
          name: "资讯互动",
          path: "/VideoNews",
          arr: [
            {
              label: "视频新闻",
              value: 0,
              path: "/VideoNews"
            },
            {
              label: "海洋图片",
              value: 1,
              path: "/ImgShow"
            },
            {
              label: "海洋新闻",
              value: 2,
              path: "/OceanNews"
            },
            {
              label: "百科知识",
              value: 3,
              path: "/Knowledge"
            }
          ]
        }
      ],
      message: "悬浮绑定的v-bind：title",
      imgSrc: require("@/assets/img/logo.png"),
      input4: "",
      dataTime: new Date().toLocaleDateString(),
      show: true,
      restaurants: [],
      state1: "",
      state2: "",
      riqi: {}
    };
  },
  methods: {
    hideSub(){
      debugger
      this.subTitleList = []
    },
    // start
    showSubClick(path) {
      this.$router.push({ path, query: { id: 0 } });
      this.subTitleList = [];
    },
    showSub(arr, index, path) {
      this.path = path;
      this.$refs.ulc.style.left =
        this.$refs["curr" + index][0].offsetLeft + "px";
      this.subTitleList = arr;
    },
    hideSub() {
      this.subTitleList = [];
    },
    toPath(value, path) {
      this.$router.push({ path: path, query: { id: value } });
      this.subTitleList = [];
    },
    // end
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三亚三亚龙湾", address: "长宁区新渔路144号" },
        { value: "三沙港", address: "上海市长宁区淞虹路661号" },
        { value: "皮口", address: "上海市长宁区淞虹路661号" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    seaZai() {
      this.$router.push("/Home/seaZai");
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  created() {
    this.riqi = formatData(new Date());
  }
};
</script>
<style lang="less">
@import "../../assets/css/home.css";
.ul {
  position: absolute;
  top: 50px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  display: inline-block;
  z-index: 100;
  li {
    border-bottom: 1px solid #ccc;
    width: 100px;
  }
  li:last-child {
    border-bottom: none;
  }
}
.searchTit {
  position: relative;
}

.el-autocomplete {
  width: 300px;
  position: relative;
  display: inline-block;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  top: 0px !important;
  margin-left: 0px !important;
  border-top-width: 0;
  border-bottom-color: #fff;
}
.el-popper .popper__arrow::after {
  content: " ";
  border-width: 0px !important;
}
.el-input__icon {
  height: 100%;
  width: 25px;
  text-align: center;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  line-height: 37px;
}
</style>
