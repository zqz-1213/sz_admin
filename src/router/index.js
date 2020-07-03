import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Login = ()=>import('views/login/Login')

const routes = [
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/login'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
