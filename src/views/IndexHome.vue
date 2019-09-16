<template>
  <div class="home content">这个页面是首页</div>
</template>
<script>
import { demo, formatData } from "../utils";
import Api from "../api";
export default {
  data() {
    return {};
  },
  methods:{

  },
  created(){
    console.log("11111111111111");

    // Api.getInfo({}).then((response)=>{
    //   console.log('执行成功');
    // },(response) =>{
    //    console.log('失败回调');
    // });

  },
  mounted (){
      console.log("qqqqqqqqqqqqqqqqqqqq");
  },
};
</script>
<style scoped>
.home {
  height: 1200px;
  border: 1px solid red;
}
</style>