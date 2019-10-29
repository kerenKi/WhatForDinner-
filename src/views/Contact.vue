<template>
  <div>
    <h3> Have a question or a comment about the meal planner?</h3>
    <h3> contact us:</h3>
    <p>Example street 2 <br>
      1082 XX Amsterdam <br>
      Netherlands <br>
      +31 20 123 4567 <br>
      info@mealplanner.com</p>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Contact extends Vue {}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Staatliches&display=swap');
h3 {
  font-family: 'Staatliches', cursive;
  font-weight: 300;
}

</style>
