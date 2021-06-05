// 入口文件
import Vue from 'vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueSource from 'vue-resource'
Vue.use(VueSource)

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'

import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import app from './App.vue'

import router from './router'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
}
)