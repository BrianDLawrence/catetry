<template>
  <div v-if="!nodocuments"
    class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
    <div class="card w-128 bg-base-100 shadow-xl card-bordered" v-for="poem in data" :key="poem.id">
      <NuxtLink :to="`/p${poem.shortcode}`">
        <div class="card-body">
          <h2 class="card-title">{{ poem.name }}</h2>
          <article class="prose text-sm md:text-base text-overflow: ellipsis truncate hover:text-clip">
            <div class="whitespace-pre-wrap w-fit">{{ poem.poem }}</div>
          </article>
          <div class="card-actions justify-end text-xs">
            Poem generated on {{ poem.date }} for {{ poem.breed }}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
  <div class="flex justify-center" v-if="nodocuments">
    <div class="prose">
      <h3>No poems found, please try again!</h3>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  data: Array,
});

const nodocuments = computed(() => {
  return props.data?.length == 0;
});
</script>