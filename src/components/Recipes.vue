<template>
  <div class="recipes" >
    <select name="category" id="">
      <option value="default">Pick a category</option>
      <option value="beef">Beef</option>
      <option value="breakfast">Breakfast</option>
      <option value="chicken">Chicken</option>
      <option value="dessert">Dessert</option>
      <option value="goat">Goat</option>
      <option value="lamb">Lamb</option>
      <option value="miscellaneous">Miscellaneous</option>
      <option value="pasta">Pasta</option>
      <option value="pork">Pork</option>
      <option value="seafood">Seafood</option>
      <option value="side">Side</option>
      <option value="starter">Starter</option>
      <option value="vegan">Vegan</option>
      <option value="vegetarian">Vegetarian</option>
    </select>
      <ul>
        <li v-for="option in moreRecipes" :key="option.id">
          <a @click="goToRecipe(option.id)">
            {{ option.title }}
            <img :src="option.image"/>
          </a>
        </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mealApi } from '../api';
import { RecipeTeaser } from '../models/recipesTeaser';

@Component
export default class Recipes extends Vue {

  public moreRecipes: RecipeTeaser[] = [];

  public mealsSet = new Set();

  public getTenMeals() {
    for (let i = 0; i < 15; i++) {
      mealApi.get('random.php')
      .then( (response) => {
        if (this.mealsSet.has(response.data.meals[0].idMeal)) {
          return true;
        } else if (this.mealsSet.size >= 10) {
          return true;
        } else {
          this.mealsSet.add(response.data.meals[0].idMeal);
          const mealTeaser = {
              id: response.data.meals[0].idMeal,
              title: response.data.meals[0].strMeal,
              image: response.data.meals[0].strMealThumb,
            };
          this.moreRecipes.push(mealTeaser);
        }
      })
      .catch( (error) => {
        // console.log(error);
      });
    }
  }

  public mounted() {
    this.getTenMeals();
  }

  public goToRecipe(id: string) {
    this.$router.push({ path: `/recipeDetails/${id}`});
    this.moreRecipes = [];
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
