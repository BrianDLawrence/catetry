<template>
  <div class="flex justify-center py-10">
    <div class="prose lg:prose-xl">
      <h1>Cat Poems</h1>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="prose">
      <h2>Search</h2>
    </div>
  </div>
  <PoemSearchWidget></PoemSearchWidget>
  <div class="flex justify-center">
    <div class="hidden lg:flex px-5">
      <CatPawsSvg></CatPawsSvg>
    </div>
    <div class="prose">
      <h2>Recent Poems</h2>
    </div>
    <div class="hidden lg:flex px-5">
      <CatPawsSvg></CatPawsSvg>
    </div>
  </div>
  <PoemLoadWidget :poemCount="6"></PoemLoadWidget>
</template>

<script setup lang="ts">
useHead({
  title: "Poems",
  meta: [
    {
      name: "description",
      content: "Cat poetry is purrfect, search previously crafted cat poems!",
    },
  ],
});
</script>

