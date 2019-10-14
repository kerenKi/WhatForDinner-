<template>
  <div class="home">
    <h1>What would you like to make?</h1>
    <Recipes />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Recipes from '@/components/Recipes.vue'; // @ is an alias to /src

@Component({
  components: {
    Recipes,
  },
})
export default class Home extends Vue {}
</script>
