import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueJsonp from 'vue-jsonp'


Vue.use(VueRouter)
Vue.use(VueJsonp)
Vue.use(VueJsonp, 5000)


import Main from './pages/Main'
import Authorization from './pages/Authorization'

const routes = [
  { path: '/', redirect: '/main' },
  { path: '/main', component: Main },
  { path: '/authorization', component: Authorization },
  { path: '*', redirect: '/main' },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
