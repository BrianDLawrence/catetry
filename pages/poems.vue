<template>
  <div>
    <div class="flex justify-center">
      <div class="prose">
        <h1>Search previously crafted</h1>
      </div>
    </div>
    <PoemSearchWidget></PoemSearchWidget>
    <div class="flex justify-center">
      <div class="prose">
        <h2>Recent Poems</h2>
      </div>
    </div>
    <PoemLoadWidget :poemCount="6"></PoemLoadWidget>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Poems",
  meta: [
    {
      name: "description",
      content: "Cat poetry is purrfect",
    },
  ],
});
</script>

