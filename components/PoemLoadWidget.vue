<template>
  <div
    class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5"
  >
    <div
      class="card w-128 bg-base-100 shadow-xl card-bordered"
      v-for="poem in data"
      :key="poem.id"
    >
      <NuxtLink :to="`/p${poem._id}`">
        <div class="card-body">
          <h2 class="card-title">{{ poem.name }}</h2>
          <article
            class="prose text-sm md:text-base text-overflow: ellipsis truncate hover:text-clip"
          >
            <span style="white-space: pre">{{ poem.poem }}</span>
          </article>
          <div class="card-actions justify-end text-xs">
            Poem generated on {{ poem.date }} for {{ poem.breed }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  poemCount: Number,
});

const { data } = await useFetch("/api/poems", {
  query: {
    poemCount: props.poemCount,
  },
});
</script>