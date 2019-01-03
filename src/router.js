import Vue from 'vue'
import Router from 'vue-router'

// import { link } from 'fs';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'mui-active',
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:()=>import('./components/tabbar/HomeContainer')},
    {path:'/member',component:()=>import('./components/tabbar/MemberContainer')},
    {path:'/search',component:()=>import('./components/tabbar/SearchContainer')},
    {path:'/shopcar',component:()=>import('./components/tabbar/ShopcarContainer')},
    {path:'/home/newslist',component:()=>import('./components/news/NewsList.vue')},
    
  ]
})
