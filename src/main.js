import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'  //引入脚本文件     名字对应package.json中的属性名
import 'element-ui/lib/theme-chalk/index.css'//引入css
import {Button} from 'element-ui'
import {Tab,TabPane} from 'element-ui'

Vue.use(ElementUI)
Vue.use(Button)


new Vue({
  el: '#app',
  render: h => h(App)
})
