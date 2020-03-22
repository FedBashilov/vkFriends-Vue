// Импортируем зависимости
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueJsonp from 'vue-jsonp'


Vue.use(VueRouter)
Vue.use(VueJsonp)
Vue.use(VueJsonp, 5000)

// импортируем Hello компонент
import Main from './pages/Main'
import Authorization from './pages/Authorization'
// инициализируем роуты
const routes = [
// указываем, что компонент hello будет отображаться на нашей главной странице
  { path: '/', redirect: '/main' },
  { path: '/main', component: Main },
  { path: '/authorization', component: Authorization },
  { path: '**', redirect: '/main' },
]
// Создаем экземпляр роутера и передайте опцию `routes`
const router = new VueRouter({
  routes,
  mode: 'history'
})
// Создаем экземпляр vue
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
