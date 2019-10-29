import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import RegularRecipe from '../src/components/RegularRecipe.vue';
import RecipesByCategory from '../src/components/RecipesByCategory.vue';

Vue.use(Router);

const router: Router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Categories.vue'),
    },
    {
      path: '/random',
      name: 'random',
      component: () => import('./views/Random.vue'),
    },
    {
      path: '/regular-recipe/:id',
      name: 'regular-recipe',
      component: RegularRecipe,
    },
    {
      path: '/recipes/:category',
      name: '/recipesByCategory',
      component: RecipesByCategory,
    },
  ],
});


export default router;
