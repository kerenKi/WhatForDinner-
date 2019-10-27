<template>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <ul>
          <li v-for="route in list" :key="route.index">
            {{ route }}
          </li>
      </ul>   
    </urlset>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component
export default class Sitemap extends Vue {
  public list: string = '';

  public getRoutesList(routes: any, pre: string) {
    return routes.reduce( (array: string[], route: any) => {
      const path = `${pre}${route.path}`;
      if (route.path !== '*') {
      array.push(path);
    }

      if (route.children) {
      array.push(...this.getRoutesList(route.children, `${path}/`));
    }

      return array;
    }, []);
  }

  public generateXMLMap() {
    const routesList = this.getRoutesList(router.options.routes, 'https://dinner-plans.netlify.com/')
      .map((route: string) => `<url><loc>${route}</loc></url>`);
    return routesList;
  }

  public mounted() {
    const XMLList = this.generateXMLMap();
    this.list = XMLList;
  }
}
</script>

<style scoped lang="scss">
  .sitemap {
    margin:70px;
  }
</style>


