// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
// import request from './request'
// import 'element-ui/lib/theme-chalk/index.css'
import '../theme/index.css'
import VideoPlayer from 'vue-video-player'
import Vant from 'vant';
import 'vant/lib/index.css';
import '../src/assets/alibaba-font.css'
import $ from 'jquery';

// require('vue-video-player/node_modules/video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(ElementUI)
Vue.use(Vant);
// 导入 axios
Vue.config.productionTip = false


// Vue.prototype.$post = request.posty
// Vue.prototype.$get = request.get
// Vue.prototype.$put = request.put
// Vue.prototype.$delete = request.delete
// Vue.prototype.$export = request.export
// Vue.prototype.$download = request.download
// Vue.prototype.$upload = request.upload

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
