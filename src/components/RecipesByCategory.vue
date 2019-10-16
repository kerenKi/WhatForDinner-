<template>
  <div class="recipes-by-category" >

    <h1>{{this.$route.params.category}} recipes </h1>
      
      <section class="cards-container">
        <div v-for="recipe in recipes" :key="recipe.id" >
          <article class="card">
            <a @click="goToRecipe(recipe.id)">
              <div class="flex-container">
                <p><img :src="recipe.image" style="width:100%"/></p>            
                <h4>
                  {{ recipe.title }}
                </h4>
              </div>  
            </a>
          </article>  
        </div>
      </section>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mealApi } from '../api';
import { RecipeTeaser } from '../models/recipesTeaser';

@Component
export default class RecipesByCategory extends Vue {
  public recipes: RecipeTeaser[] = [];

  public getRecipesBtCategory() {
    mealApi.get(`filter.php?c=${this.$route.params.category}`)
    .then( (response) => {
      for (const meal of response.data.meals) {
        const mealTeaser = {
              id: meal.idMeal,
              title: meal.strMeal,
              image: meal.strMealThumb,
            };
        this.recipes.push(mealTeaser);
      }
    });
  }

  public mounted() {
    this.getRecipesBtCategory();
  }

  public goToRecipe(id: string) {
    this.$router.push({ path: `/recipeDetails/${id}`});
  }
}
</script>

<style scoped lang="scss">

</style>
