import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 完整引入mint-ui
import MintUI from "mint-ui"
// 单独引入mint-ui的style.css文件
import "mint-ui/lib/style.css"
// 引入字体图标文件
import "./font/fontlib/iconfont.css"
// 使用mint-ui
Vue.use(MintUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
