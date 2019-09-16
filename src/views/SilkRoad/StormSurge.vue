<template>
  <div class="home content">
    <div class="left" :class="{isFixed: isFixed}" id="leftMenu">
      <el-menu
        default-active="1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#0064cf"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border: 1px solid #5797dc;"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>风暴潮</span>
          </template>
          <el-menu-item-group id="selectMenu">
            <el-menu-item index="1-1" class="moreOn" @click="singleStationClick()">单站增水预报</el-menu-item>
            <el-menu-item index="1-2" class="moreOn" @click="increaseWaterClick()">增水场预报</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return { isFixed: false, offsetTop: 0 };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    singleStationClick() {
      this.$router.push({
        path: "/SingleStation"
      });
    },
    increaseWaterClick() {
      this.$router.push({
        path: "/IncreaseWater"
      });
    },
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      if (scrollTop > this.offsetTop) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.offsetTop = document.querySelector("#leftMenu").offsetTop;
  }
};
</script>
<style scoped>
.home {
  margin-top: 10px;
}

.left {
  position: static;
  width: 205px;
  float: left;
  font-size: 15px;
}

.right {
  width: 790px;
  float: right;
  height: 100%;
}

.isFixed {
  position: fixed;
  top: 0;
}
</style>

<style>
@import "../../assets/css/silkRoad.css";
</style>