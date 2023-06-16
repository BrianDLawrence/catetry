<template>
  <div>
    <div class="container mx-auto pb-8">
      <ThePoemGenerator></ThePoemGenerator>
    </div>
    <div class="container mx-auto pb-8">
      <AGoogleAdBar></AGoogleAdBar>
    </div>
    <div class="container mx-auto pb-8">
      <center><h1 class="prose">Recent Poems</h1></center>
      <PoemLoadWidget :poemCount="3"></PoemLoadWidget>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Cats and Poetry is Catetry",
  meta: [
    {
      name: "description",
      content: "WELCOME - Cats and poetry come together to create Catetry.",
    },
  ],
});
</script>

