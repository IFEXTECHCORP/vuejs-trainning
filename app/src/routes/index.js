import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const importComponent = (path) => () => import(path);

const Home = () => import(/* webpackChunkName: 'HomePage' */ '../views/Home.vue');
const Tasks = () => import('../views/Task.vue');
const Products = () => import("../views/Products");
const ProductsTable = importComponent('../views/ProductsTable.vue');

// CODE SPLIT: import('')
export const router = new VueRouter({
  // #(hash) -> /(history)
  mode: "history",
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/tasks',
      component: Tasks
    },
    {
      path: '/products',
      component: Products,
      children: [
        {
          path: 'table',   // /products/table
          component: ProductsTable
        }
      ]
    },
    {
      path: '/:id',
      component: () => import('../views/Parameters.vue'),
      props: true // Injeta os parametros da rota direto no componente como propriedade
    },
    {
      path: '*',
      component: () => import('../views/NotFound.vue')
    }
  ]

});

