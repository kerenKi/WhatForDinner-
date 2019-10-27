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
      <div class="ingredients">
        <P><strong>Ingredients:</strong></P>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient.index">
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>

    <div class="instructions"> 
      <strong> Instructions: </strong>{{ recipe.instructions }}
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Recipe } from '../models/recipe';

@Component({
  props: ['recipe'],
})
export default class RecipeBase extends Vue {

}
</script>

