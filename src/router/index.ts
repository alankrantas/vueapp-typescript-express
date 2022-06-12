import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProductList from "../views/ProductList.vue";
import OrderDetails from "../views/OrderDetails.vue";
import SummaryPage from "../views/SummaryPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/products',
    component: ProductList
  },
  { 
    path: "/order", 
    component: OrderDetails 
  },
  { 
    path: "/summary", 
    component: SummaryPage 
  },
  {
    path: '/',
    redirect: '/products'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
