<template>
  <div class="recipes">
    <h1>What would you like to make?</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Recipes extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">

</style>
