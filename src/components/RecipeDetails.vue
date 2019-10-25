<template>
  <div class="recipe">

    <div class="title">
      <h1>Today's meal:</h1>
      <h3>{{ recipe.title }}</h3>
    </div>

    <div class="category-ingredients">
      <div class="image-category">
        <p><img :src="recipe.image"/></p>
        <p> <strong> Category:</strong> {{ recipe.category }}</p>
      </div>
      <div class="ingridients">
        <P><strong>Ingredients:</strong></P>
        <ul>
          <li v-for="ingridient in recipe.ingredients" :key="ingridient.index">
            {{ ingridient }}
          </li>
        </ul>
      </div>
    </div>

    <div class="instructions"> 
      <strong> Instructions: </strong>{{ recipe.instructions }}
    </div>

    <div class="extra">
      <h1 > More from the {{ recipe.category }} category:</h1>
      <section class="cards-container">
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

@Component
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
      self.recipe.title = meal.strMeal;
      self.recipe.category = meal.strCategory;
      self.recipe.instructions = meal.strInstructions;
      self.recipe.image = meal.strMealThumb;
      self.recipe.ingredients = [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
        ];
      self.recipe.ingredients = self.recipe.ingredients.filter( (ingridient) => ingridient !== ''
      && ingridient !== null);
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
  
.cards-container {
  position: relative;
  left: 250px;
}

</style>
