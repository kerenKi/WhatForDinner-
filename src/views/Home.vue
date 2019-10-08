<template>
  <div class="home">
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
