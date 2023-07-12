<template>
  <PoemDisplayWidget :data="data"></PoemDisplayWidget>
</template>

<script setup lang="ts">
const props = defineProps({
  poemCount: Number,
  catName: String,
  catBreed: String,
});

const { data } = await useFetch("/api/poems", {
  query: {
    poemCount: props.poemCount,
    catName: props.catName,
    catBreed: props.catBreed,
  },
});
</script>