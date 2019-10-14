<template>
  <div class="recipes" >
    <router-link to="/recipeDetails" class="recipe" v-for="meal in meals" v-bind:key="meal">  
      <img src="" alt="Meal image"/>
      <h1>{{ meal }}</h1>
      <p>description goes here</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mealApi } from '../api';

@Component
export default class Recipes extends Vue {
  public meals: string[] = [
    'Lazania',
    'Shnitsel',
    'Pasta Bolonies',
    'Apple Pie',
    'Cabbage salad',
    'Hamburger',
    ];

  public mounted() {
    mealApi.get('random.php')
    .then((response) => {
    // console.log(response);
    })
    .catch( (error) => {
      // console.log(error);
    });
  }
}
</script>

<style scoped lang="scss">

</style>
