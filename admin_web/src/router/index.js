import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import ClubInfo from '@/pages/club_info/ClubInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta:{
        title:"管理员登录"
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:"首页"
      },
      children:[
        {
          path: '/ClubInfo',
          name: 'ClubInfo',
          component: ClubInfo,
          meta:{
            title:"社团信息"
          }
        },
      ]
    }
  ]
})
