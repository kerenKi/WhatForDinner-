<template>
  <div class="categories">
    <h1>Categories:</h1>
    <CategoriesList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import CategoriesList from '@/components/CategoriesList.vue'; // @ is an alias to /src

@Component({
  components: {
    CategoriesList,
  },
})
export default class Categories extends Vue {}
</script>
