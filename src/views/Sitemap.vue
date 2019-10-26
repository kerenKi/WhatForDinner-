<template>
  <div class="sitemap">
    {{ list }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from '../router';

@Component
export default class Sitemap extends Vue {
  public list: string = 'hello';

  public getRoutesList(routes, pre) {
    return routes.reduce( (array, route) => {
      const path = `${pre}${route.path}`;
      if (route.path !== '*') {
      array.push(path);
    }

      if (route.children) {
      array.push(...getRoutesList(route.children, `${path}/`));
    }

      return array;
    }, []);
  }

  public generateXMLMap() {
    const routesList = this.getRoutesList(router.options.routes, 'https://dinner-plans.netlify.com/')
      .map((route) => `<url><loc>${route}</loc></url>`)
      .join('\r\n');
    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${routesList}
    </urlset>`;
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


