import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PedidoView from '../views/PedidoView.vue'
import OrderView from '../views/PasteleroView.vue'
import '@/assets/css/bootstrap-grid.css'
//import '@/assets/css/bootstrap-utilities.css'
//import '@/assets/css/bootstrap.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/pedido',
    name: 'Pedido',
    component: PedidoView
  },
  {
    path: '/pastelero',
    name: 'Pastelero',
    component: OrderView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
