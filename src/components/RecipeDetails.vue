<template>
  <div class="recipe">

    <RecipeBase :recipe="recipe"/>

    <div class="extra">
      <h1 > More from the {{ recipe.category }} category:</h1>
      <section class="more-recipes-container">
        <div v-for="option in moreRecipes" :key="option.id">
          <article class="card">
            <a @click="goToRecipe(option.id)" href="#top">
              <div >
                <p><img :src="option.image" style="width:100%"/></p>
                <h4>{{ option.title }}</h4>
              </div>
            </a>
          </article>  
        </div>
      </section>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mealApi } from '../api';
import { Recipe } from '../models/recipe';
import { RecipeTeaser } from '../models/recipesTeaser';
import constructRecipeFromAPIResponse from '../helpers';
import RecipeBase from './RecipeBase.vue';

@Component({
  components: {
    RecipeBase,
  },
})
export default class RecipeDetails extends Vue {

  public recipe: Recipe = {
    title: '',
    category: '',
    instructions: '',
    image: '',
    ingredients: [],
  };

  public moreRecipes: RecipeTeaser[] = [];

  public getCategory() {
      mealApi.get(`filter.php?c=${this.recipe.category}`)
      .then((response) => {
        const meals = response.data.meals;
        for (let i = 0; i < 3; i++) {
          const meal = meals.splice(Math.floor(Math.random() * meals.length), 1);
          const mealTeaser = {
            id: meal[0].idMeal,
            title: meal[0].strMeal,
            image: meal[0].strMealThumb,
          };
          this.moreRecipes.push(mealTeaser);
        }
      })
      .catch( (error) => {
        // console.log(error);
      });
    }

  public getMealById() {
    const self = this;
    mealApi.get(`lookup.php?i=${this.$route.params.id}`)
    .then((response) => {
      const meal = response.data.meals[0];
      const fullRecipe = constructRecipeFromAPIResponse(meal);
      self.recipe = fullRecipe;
      this.getCategory();
    })
    .catch( (error) => {
      // console.log(error);
    });
  }

  public mounted() {
    this.getMealById();
  }

  public goToRecipe(id: string) {
    this.$router.push({ path: `/recipeDetails/${id}`});
    this.moreRecipes = [];
    this.getMealById();
  }
}
</script>

<style scoped lang="scss">
  
.more-recipes-container {
  width: 80%;
  // position: relative;
  // left: 20vw;
}

@media screen and (max-width: 780px) {
  .more-recipes-container {
    position: relative;
    left: 20px;
  }
}

</style>
