<template>
  <div class="categories-list" >
    <div class="categories" v-for="categorie in categories" v-bind:key="categorie.index">  
      <a class="category-link" @click="goToCategory(categorie.strCategory)" href="#top">{{ categorie.strCategory }}</a>
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

  public goToCategory(category: string) {
    this.$router.push({ path: `/recipes/${category}`});
  }
}
</script>

<style scoped lang="scss">

  .category-link {
  display: flex;
  justify-content: center;
  float: left;
  width: 40%;
  height: 30px;
  text-decoration: none;
  background-color: rgba(68, 109, 96, 0.9);
  color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
  margin-left:60px;
  font-size: 18px;
  font-weight: 700;
}

.category-link:hover {
  cursor: pointer;
  background-color: rgba(102, 159, 141, 0.9);
}

@media screen and (max-width: 770px) {
  
  .category-link {
    width: 30%;
    margin: 20px;
  }
}
</style>
