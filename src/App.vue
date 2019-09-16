<template>
  <div id="app">
    <el-container>
      <el-header><TopBanner /></el-header>
      <el-main>  <router-view /></el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
// 引入组件页面直接放就行
import TopBanner from "./components/common/TopBanner";
import Footer from "./components/common/Footer";
export default {
  name: "App",
  components: {
    TopBanner,
    Footer
  }
};
</script>

<style>
#app {
  font-family: AlibabaSans-Normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
