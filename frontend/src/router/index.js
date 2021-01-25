import Vue from 'vue'
import VueRouter from 'vue-router'
import Cart from '../views/Cart.vue';
import Products from '../views/Products.vue';
import ProductDetails from '../views/ProductDetails.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails
    
  },
  {
    path: '/cart',
    name: 'My Cart',
    component: Cart
  } ,
  {
    path: '/',
    redirect: '/products',
  
  },
  {
    path: '*',
    component: NotFound,
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
