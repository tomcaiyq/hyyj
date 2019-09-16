<template>
  <div class="home content">
    <div class="button">
      <button size="small" class="btnTitle   btnActive"><router-link  to='/VideoNews'>视频新闻</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/ImgShow'>海洋图片</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/OceanNews'>海洋新闻</router-link></button>
      <button size="small" class="btnTitle"><router-link  to='/Knowledge'>百科知识</router-link></button>
    </div>
    <div style="font-size:20px;color:#000;font-weight:bold;margin:15px;">{{name}}</div>
    <!-- <video-player
      class="video-player vjs-custom-skin"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
    ></video-player> -->
  </div>
</template>
<script>
import { demo, formatData } from "../../utils";
import Api from "../../api";
export default {
  data() {
    return {
      name: "",
      url: "",
      ref:"",
    };
  },
  methods: {
    loadVideo() {}
  },
  created() {
    this.name = this.$route.query.name;
    console.log(this.name);
    this.url = this.$route.query.url;
    console.log(this.url);
  }
};
</script>
<style scoped>
.home {
  height: 1200px;
}
</style>