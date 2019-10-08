<template>
  <div class="recipe">
    <h1>What would you like to make?</h1>
    {{ recipe }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class RandomRecipe extends Vue {
  public recipe: string = '';

  public mounted() {
    this.recipe = 'test';
  }
}
</script>

<style scoped lang="scss">

</style>
