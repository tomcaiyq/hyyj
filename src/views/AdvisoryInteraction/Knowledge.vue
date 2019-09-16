<template>
  <div class="home content">
    <div class="button">
      <button size="small" class="btnTitle">
        <router-link to="/VideoNews">视频新闻</router-link>
      </button>
      <button size="small" class="btnTitle">
        <router-link to="/ImgShow">海洋图片</router-link>
      </button>
      <button size="small" class="btnTitle">
        <router-link to="/OceanNews">海洋新闻</router-link>
      </button>
      <button size="small" class="btnTitle btnActive">
        <router-link to="/Knowledge">百科知识</router-link>
      </button>
    </div>
    <div style="height:130px;">
      <div class="inputCon">
        <div class="inputText">
          <el-input placeholder="请输入想要查找的内容" v-model="input" clearable style="float:left;"></el-input>
        </div>
        <div>
          <el-button type="primary" style="float:right;" @click="searchFor()">搜索词条</el-button>
        </div>
      </div>
      <div class="cl">
        <p style="color: rgb(0, 0, 0);">热门词条:</p>
        <span
          v-for="item in titleSelect"
          :key="item.id"
          @click="spanSearch(item.value)"
        >{{item.value}}</span>
      </div>
    </div>
    <div class="ebcyLeft">
      <h3>百科知识分类</h3>
      <div class="ebcyCon">
        <p>海洋灾害</p>
        <div style="padding-left:20px;">
          <span v-for="item in disaster" :key="item.id" @click="spanSearch(item.name)">{{item.name}}</span>
        </div>
      </div>
      <div class="ebcyCon">
        <p>海洋科普</p>
        <div style="padding-left:20px;">
          <span v-for="item in science" :key="item.id" @click="spanSearch(item.name)">{{item.name}}</span>
        </div>
      </div>
      <div class="ebcyCon">
        <p>海洋现象</p>
        <div style="padding-left:20px;">
          <span v-for="item in phenomenon" :key="item.id" @click="spanSearch(item.name)">{{item.name}}</span>
        </div>
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
      input: "",
      titleSelect: [
        {
          id: 0,
          value: "台风"
        },
        {
          id: 1,
          value: "海啸"
        },
        {
          id: 2,
          value: "风暴潮"
        },
        {
          id: 3,
          value: "海洋"
        },
        {
          id: 4,
          value: "海洋潮汐"
        },
        {
          id: 5,
          value: "拉尼娜现象"
        },
        {
          id: 6,
          value: "海冰"
        }
      ],
      // 海洋灾害
      disaster: [
        {
          id: 0,
          name: "台风"
        },
        {
          id: 1,
          name: "海啸"
        },
        {
          id: 2,
          name: "风暴潮"
        },
        {
          id: 3,
          name: "拉尼娜现象"
        },
        {
          id: 4,
          name: "海冰"
        },
        {
          id: 5,
          name: "厄尔尼诺现象"
        },
        {
          id: 6,
          name: "赤潮"
        },
        {
          id: 7,
          name: "灾害性海浪"
        },
        {
          id: 8,
          name: "海底地震"
        },
        {
          id: 9,
          name: "台风"
        }
      ],
      // 海洋科普
      science: [
        {
          id: 0,
          name: "海洋"
        },
        {
          id: 1,
          name: "台风"
        },
        {
          id: 2,
          name: "海啸"
        },
        {
          id: 3,
          name: "风暴潮"
        },
        {
          id: 4,
          name: "海洋潮汐"
        },
        {
          id: 5,
          name: "拉尼娜现象"
        },
        {
          id: 6,
          name: "海冰"
        },
        {
          id: 7,
          name: "厄尔尼诺现象"
        },
        {
          id: 8,
          name: "赤潮"
        },
        {
          id: 9,
          name: "海底地震"
        },
        {
          id: 10,
          name: "洋流"
        }
      ],
      // 海洋现象
      phenomenon: [
        {
          id: 0,
          name: "台风"
        },
        {
          id: 1,
          name: "海啸"
        },
        {
          id: 2,
          name: "风暴潮"
        },
        {
          id: 3,
          name: "海洋潮汐"
        },
        {
          id: 4,
          name: "拉尼娜现象"
        },
        {
          id: 5,
          name: "海冰"
        },
        {
          id: 6,
          name: "厄尔尼诺现象"
        },
        {
          id: 7,
          name: "赤潮"
        },
        {
          id: 8,
          name: "海啸"
        },
        {
          id: 9,
          name: "海啸"
        }
      ]
    };
  },
  methods: {
    searchFor() {
      // 获取输入框的值
      console.log(this.input);
    },
    spanSearch(value){
       // 获取点击的值
      console.log(value);
    }
  }
};
</script>
<style scoped>
.home {
  height: 1200px;
}
.inputText {
  width: 380px;
}
.inputCon {
  width: 478px;
  margin-left: 50%;
  transform: translate(-240px);
  margin-top: 20px;
}
.cl p {
  display: inline-block;
  font-size: 14px;
  cursor: default;
}
.cl {
  float: left;
  text-align: center;
  margin-left: 260px;
  margin-top: 10px;
  font-size: 14px;
}
.cl span {
  display: inline-block;
  margin: 0px 8px;
  cursor: default;
}
 span:hover {
  color: rgb(0, 100, 207);
}
.ebcyLeft {
  width: 640px;
  margin-left: 185px;
}
.ebcyCon p{
  width:100%;
  height: 30px;
  line-height: 30px;
  background-color: #f7f7f7;
  color: #000;
  font-weight: bold;
  margin-top: 15px;
  cursor: default;
  padding-left: 10px;
}
.ebcyCon span{
  display: inline-block;
  margin:10px 15px;
  cursor: default;
}
</style>
