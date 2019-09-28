import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
import Exam01 from "./components/exam/Exam01.vue"
import Exam02 from "./components/exam/Exam02.vue"
import Exam03 from "./components/exam/Exam03.vue"
import Exam04 from "./components/exam/Exam04.vue"
import Exam05 from "./components/exam/Exam05.vue"
import Exam07 from "./components/exam/Exam07.vue"
import Fa08 from "./components/exam/Fa08.vue"
import Fa09 from "./components/exam/Fa09.vue"

import IcHome from "./components/message/Home.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:"/Exam01",component:Exam01},
    {path:"/Exam02",component:Exam02},
    {path:"/Exam03",component:Exam03},
    {path:"/Exam04",component:Exam04},
    {path:"/Exam05",component:Exam05},
    {path:"/Exam07",component:Exam07},
    {path:"/Fa08",component:Fa08},
    {path:"/Fa09",component:Fa09},
    {path:"/IcHome",component:IcHome},
  ]
})
