<template>
  <div class="recipe">
    <h1>Today's meal:</h1>
    <h3>{{ recipe.title }}</h3>
    <div class="full-recipe">
      <div class="meal-info">
        <img :src="recipe.image"/>
        <p> <strong> Category:</strong> {{ recipe.category }}</p>
        <P><strong>Ingredients:</strong></P>
        <ul>
          <li v-for="ingridient in recipe.ingredients" :key="ingridient.index">
            {{ ingridient }}
          </li>
        </ul>
      </div>

      <div class="instructions"> <strong> Instructions: </strong>{{ recipe.instructions }}
      </div>
    </div>
    <div>
      <h1 class="more-recipes-title"> More from the {{ recipe.category }} category:</h1>
      <section class="cards-container">
        <div v-for="option in moreRecipes" :key="option.id">
          <article class="card">
            <a @click="goToRecipe(option.id)">
              <div class="flex-container">
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
        const pool = meals.length;
        function random(): number {
          return Math.floor(Math.random() * pool);
        }
        // Creating a uniqe set of random numbers
        const randomSet: Set<number> = new Set([random(), random(), random(), random(), random(), random()]);

        const randomArray: number[] = Array.from(randomSet);
        for (let i = 0; i < 3; i++) {
          const randomNumber: number = randomArray[i];
          const mealTeaser = {
            id: response.data.meals[randomNumber].idMeal,
            title: response.data.meals[randomNumber].strMeal,
            image: response.data.meals[randomNumber].strMealThumb,
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
  img {
    width: 20%;
  }

  ul {
    list-style: none;
  }

  .meal-info {
    display: flex;
    float: left;
    width: 40%;
    margin: 15px;
    border: 1px solid red;
  }

  .instructions {
    display: flex;
    float: right;
    margin: 15px;
    width: 50%;
    border: 1px solid red;

  }
  .more-recipes-title {
    position: relative;
    top: 40px;
    right: 255px;
  }

  .cards-container {
    position: relative;
    left: 250px;
  }
  
</style>
