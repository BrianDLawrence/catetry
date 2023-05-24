<template>
  <div class="flex justify-center">
    <div v-if="pending" class="pb-8">Loading ...</div>
    <div v-else class="pb-8 prose">
      <h2>{{ data.name }}</h2>
      <span style="white-space: pre"> {{ data.poem }} </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { pending, data } = await useLazyFetch("/api/poem", {
  query: {
    poemid: route.params.name,
  },
});

var value;

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
