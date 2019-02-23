// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import store from '@/vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/js/iconfont.js'
import { storage } from '@/services'

// Ueditor 
import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.js'
import '../static/ueditor/ueditor.parse.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'

// 添加导航守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.path == '/Login') {
    storage.remove('token');
  }
  let token = storage.get('token');
  if (!token && to.path != '/Login') {
    next({ path: '/Login' })
  } else {
    next()
  }
})

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
