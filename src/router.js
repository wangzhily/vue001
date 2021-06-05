import VueRouter from 'vue-router'

import Home from './components/tabbar/home.vue'
import Member from './components/tabbar/member.vue'
import Search from './components/tabbar/search.vue'
import ShopCar from './components/tabbar/shopcar.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path: '/home', component: Home },
    {path: '/member', component: Member},
    {path: '/search', component: Search},
    {path: '/shopcar', component: ShopCar},
  ],
  linkActiveClass: 'mui-active' //修改默认高亮的类
})

// 把路由对象暴露出去
export default router