<template>
  <div class="recipe">

    <div class="title">
      <h1>Today's meal:</h1>
      <h3>{{ recipe.title }}</h3>
    </div>

    <div class="category-ingredients">
      <div class="image-category">
        <p> <img class="recipe-image" :src="recipe.image"/> </p>   
        <p> <strong> Category:</strong> {{ recipe.category }} </p>
      </div>
        <div class="ingridients">
        <P><strong> Ingredients: </strong></P>
        <ul>
          <li v-for="ingridient in recipe.ingredients" v-bind:key="ingridient.index">
            {{ ingridient }}
          </li>
        </ul>
      </div>
    </div>

    <div class="instructions"> 
      <strong> Instruction: </strong> {{ recipe.instructions }}
    </div>

    <a href="#top" class="extra"> 
      <button @click="onClick"> Show me another random recipe </button>
    </a>

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

  public getMeal(): void {
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
      self.recipe.ingredients = self.recipe.ingredients.filter( (ingridient) => ingridient !== ''
      && ingridient !== null);
    })
    .catch( (error) => {
      // console.log(error);
    });
  }

  public mounted() {
    this.getMeal();
  }

  public onClick() {
    this.getMeal();
  }
}
</script>

<style scoped lang="scss">

button {
  border: 0;
  cursor: pointer;
  outline: 0;
  -webkit-appearance: none;
  margin:35px;
  display: inline-block;
  position: relative;
  padding: 20px 38px;
  top: 0;
  font-size: 30px;
  font-family: "Open Sans", Helvetica;
  border-radius: 4px;
  border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
  background: rgba(66, 103, 90, 0.9);
  color: #fff;
  box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
  
  -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
          transform: translateZ(0);
  
  -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
      -ms-transition: all 0.2s ease;
          transition: all 0.2s ease;
}

button:hover {
  top: -10px;
  box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
  
  -webkit-transform: rotateX(20deg);
    -moz-transform: rotateX(20deg);
      -ms-transform: rotateX(20deg);
          transform: rotateX(20deg);
}
</style>
