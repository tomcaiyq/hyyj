<template>
    <div class="home content">
        <div class="leftBtn" :class="{isFixed: isFixed}" id="leftMenu">
             <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#0064cf"
      text-color="#fff"
      active-text-color="#ffd04b"
      style="border:1px solid #5797dc;">
      <el-submenu index="1">
        <template slot="title">
          <span style="font-size:16px;">大气模式</span>
        </template>
        <el-menu-item-group id="selectMenu">
          <el-menu-item index="1-1"  class="moreOn"  @click="tenClick()">10米风场</el-menu-item>
          <el-menu-item index="1-2"  class="more" @click="FiveClick()">500hPa位势高度、温度、风场</el-menu-item>
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
import {demo,formatData} from '../../utils'
import Api from '../../api'
export default {
    data(){
       return{
           
       }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 十米风场点击路由跳转事件
      tenClick(){
        this.$router.push({
        path: "/WindFieldTen", 
      });
      },
      // 500hPa位势高度、温度、风场
      FiveClick(){
        this.$router.push({
        path: "/WindFieldFive",
      });
      },
    }
}
</script>
<style scoped>
/* 左右布局的公共样式 */
@import '../../assets/css/silkRoadScon.css';
</style>
<style>

@import '../../assets/css/silkRoad.css';
.el-menu-item{
  font-size:15px;
}
</style>