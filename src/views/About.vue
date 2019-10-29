<template>
  <div>
    <p>This website allows you to explore recipes from different categories.</p>
    <p>This way, you can easily decide what to make for dinner, lunch or a special event!</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>

<style>
p {
  font-size: 24px;
}
</style>
