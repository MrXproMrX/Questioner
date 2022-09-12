import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexViews'

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
