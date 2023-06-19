<template>
  <div>
    <div class="container mx-auto pb-8">
      <ThePoemGenerator></ThePoemGenerator>
    </div>
    <div class="container mx-auto pb-8">
      <div class="flex justify-center">
        <div class="prose">
          <h2>Recent Poems</h2>
        </div>
      </div>
      <PoemLoadWidget :poemCount="3"></PoemLoadWidget>
    </div>
    <div class="container mx-auto pb-8">
      <AGoogleAdBar></AGoogleAdBar>
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Cats and Poetry is Catetry",
  meta: [
    {
      name: "description",
      content: "WELCOME - Cats and poetry come together to create Catetry.",
    },
  ],
});
</script>

