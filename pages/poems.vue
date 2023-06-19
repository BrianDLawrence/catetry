<template>
  <div>
    <div class="container mx-auto py-8">
      <AGoogleAdBar></AGoogleAdBar>
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

