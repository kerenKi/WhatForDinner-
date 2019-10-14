<template>
  <div class="categories-list" >
    <div class="categories" v-for="categorie in categories" v-bind:key="categorie.index">  
      <h2>{{ categorie.strCategory }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mealApi } from '../api';

@Component
export default class CategoriesList extends Vue {
  public categories: object[] = [];

  public mounted() {
    const self = this;
    mealApi.get('list.php?c=list')
    .then((response) => {
      self.categories = response.data.meals;
    })
    .catch( (error) => {
      // console.log(error);
    });
  }
}
</script>

<style scoped lang="scss">

</style>
