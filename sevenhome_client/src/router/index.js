import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/index/Index.vue";
import blogDetail from "../components/blogDetail";
import hotel from "../components/hotel";
import services from "../components/services";
import blog from "../components/blog";
import contact from "../components/contact";
import Login from "../components/login/Login.vue";
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Index', component: Index},
    {path: '/login',component: Login},
    {path: '/blogDetail', name: blogDetail.name, component: blogDetail},
    {path: '/hotel', name: hotel.name, component: hotel},
    {path: '/services', name: services.name, component: services},
    {path: '/blog', name: blog.name, component: blog},
    {path: '/contact', name: contact.name, component: contact},
  ]
})
