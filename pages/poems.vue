<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Poems</h1>
        <p class="py-6">
          <span style="white-space: pre">{{ data }}</span>
        </p>
      </div>
    </div>
  </div>
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

