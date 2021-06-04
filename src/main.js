// 入口文件
import Vue from 'vue'

import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
}
)