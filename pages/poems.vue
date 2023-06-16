<template>
  <AGoogleAdBar></AGoogleAdBar>
  <PoemLoadWidget :poemCount="6"></PoemLoadWidget>
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

