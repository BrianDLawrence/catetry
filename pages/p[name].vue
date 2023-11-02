<template>
  <div class="flex justify-center">
    <div v-if="pending" class="pb-8">
      <ALoadingIndicator :message="'Loading...'"></ALoadingIndicator>
    </div>
    <div v-else class="pb-8 prose py-2 px-2 text-sm md:text-base">
      <h2>{{ data.name }}</h2>
      <div class="whitespace-pre-wrap w-fit"> {{ data.poem }} </div>
      <TheFacebookShare :articleUrl="data.sharableurl" :articleTitle="data.name"
        :articleImage="'https://catetry.com/images/SiamesePoetSmall.png'" :articleDescription="'Cat poetry is purrfect'">
      </TheFacebookShare>
      <div class="py-3">
        <ACopyURLWidget :shareableurl="data.sharableurl"></ACopyURLWidget>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
