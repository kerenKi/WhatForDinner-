<template>
  <div>
      <ul>
          <li v-for="route in list" :key="route.index">
            <a :href="route">{{ route }}</a>
          </li>
      </ul>   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component
export default class Sitemap extends Vue {
  public list: string[] = [
    'https://dinner-plans.netlify.com/',
    'https://dinner-plans.netlify.com/categories',
    'https://dinner-plans.netlify.com/random',
    'https://dinner-plans.netlify.com/recipeDetails/:id',
    'https://dinner-plans.netlify.com/recipes/:category',
    'https://dinner-plans.netlify.com/sitemap',
  ];

  // public getRoutesList(routes: any, pre: string) {
  //   return routes.reduce( (array: string[], route: any) => {
  //     const path = `${pre}${route.path}`;
  //     if (route.path !== '*') {
  //     array.push(path);
  //   }

  //     if (route.children) {
  //     array.push(...this.getRoutesList(route.children, `${path}/`));
  //   }

  //     return array;
  //   }, []);
  // }

  // public mounted() {
  //   console.log(router)
  //   // const siteRoutes = this.$router.options.routes
  //   // console.log(siteRoutes)

  //   this.list = this.getRoutesList(siteRoutes, 'https://dinner-plans.netlify.com');
  // }
}
</script>

<style scoped lang="scss">
  .sitemap {
    margin:70px;
  }
</style>


