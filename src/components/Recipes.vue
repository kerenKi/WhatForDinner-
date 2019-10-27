<template>
  <div class="recipes" >

    <div class="custom-select">
      <select name="category"  v-model="selected" @change="getMealsByCategory(selected)">
        <option value="">Pick a category</option>
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
    </div>

    <p class="sorting" @click="sortFromAToZ()">Sort from A - Z</p>
    <p class="sorting" @click="sortFromZToA()">Sort from Z - A</p>

    <section v-if="selected == ''" class="cards-container">
      <div v-for="option in recipes" :key="option.id">
        <article class="card">
          <a @click="goToRecipe(option.id)" href="#top">
            <div class="flex-container">
              <p><img :src="option.image" style="width:100%"/></p>
                <h4 class="grid-item">
                    {{ option.title }}
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
export default class Recipes extends Vue {
  public selected = '';

  public recipes: RecipeTeaser[] = [];

  public mealsSet = new Set();

  public compare( a, b ) {
  if ( a.title < b.title ) {
    return -1;
  }
  if ( a.title > b.title ) {
    return 1;
  }
  return 0;
  }

  public sortFromAToZ() {
    const sortAToZ = this.recipes.sort(this.compare);
    this.recipes = sortAToZ;
  }

  public reverseCompare( a, b ) {
  if ( a.title > b.title ) {
    return -1;
  }
  if ( a.title < b.title ) {
    return 1;
  }
  return 0;
  }

  public sortFromZToA() {
    const sortZToA = this.recipes.sort(this.reverseCompare);
    this.recipes = sortZToA;
  }

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
          this.recipes.push(mealTeaser);
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

  public getMealsByCategory(category: string) {
    this.$router.push({ path: `/recipes/${category}`});
  }

  public goToRecipe(id: string) {
    this.$router.push({ path: `/recipeDetails/${id}`});
    this.recipes = [];
  }
}
</script>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans+Condensed&display=swap');

  select {
    background-color: rgba(148, 252, 217, 0.338);
    width: 320px;
    height: 40px;
    border: 0.5 solid gray;
    font-family: 'Fira Sans Condensed', sans-serif;
    font-size: 18px;
    font-weight: 200;
    color: gray;
  }

  .sorting:hover {
    cursor: pointer;
  }
</style>
