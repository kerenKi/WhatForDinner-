import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RecipeDetails from '../src/components/RecipeDetails.vue';
import RecipesByCategory from '../src/components/RecipesByCategory.vue';
import Sitemap from '../src/views/Sitemap.vue';

Vue.use(Router);

const router: Router = new Router({
// export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/categories',
      name: 'categories',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Categories.vue'),
    },
    {
      path: '/random',
      name: 'random',
      component: () => import(/* webpackChunkName: "about" */ './views/Random.vue'),
    },
    {
      path: '/recipeDetails/:id',
      name: 'recipeDetails',
      component: RecipeDetails,
    },
    {
      path: '/recipes/:category',
      name: '/recipesByCategory',
      component: RecipesByCategory,
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: Sitemap,
    },
  ],
});

export default router;
