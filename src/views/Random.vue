<template>
  <div class="random">
    <RandomRecipe/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RandomRecipe from '@/components/RandomRecipe.vue'; // @ is an alias to /src

@Component({
  components: {
    RandomRecipe,
  },
})
export default class Random extends Vue {}
</script>
