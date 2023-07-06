<template>
  <div>
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

