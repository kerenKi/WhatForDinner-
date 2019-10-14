<template>
  <div class="recipe">
    <h1>Today's meal:</h1>
    <h3>{{ recipe.title }}</h3>
    <img :src="recipe.image"/>
    <p> <strong> Category:</strong> {{ recipe.category }}</p>
    <P><strong>Ingredients:</strong></P>
    <ul>
      <li v-for="ingridient in recipe.ingredients" v-bind:key="ingridient.index">
        {{ ingridient }}
      </li>
    </ul>
    <span> <strong> Instruction: </strong>{{ recipe.instructions }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mealApi } from '../api';
import { Recipe } from '../models/recipe';

@Component
export default class RandomRecipe extends Vue {
  public recipe: Recipe = {
    title: '',
    category: '',
    instructions: '',
    image: '',
    ingredients: [],

  };

  public mounted() {
    const self = this;
    mealApi.get('random.php')
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
      self.recipe.ingredients = self.recipe.ingredients.filter( (ingridient) => ingridient !== '');
    })
    .catch( (error) => {
      // console.log(error);
    });
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
</style>
