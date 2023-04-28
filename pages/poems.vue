<template>
  <i-layout>
    <i-layout-header class="_text-align:center">
      <h1>Poems</h1>
    </i-layout-header>

    <i-layout-content>
      <p class="_text-align:left">
        <span style="white-space: pre">{{ data }}</span>
      </p>
    </i-layout-content>
  </i-layout>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/poems", {
  query: {
    user: "Brian",
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

