<template>
  <h1 class="title">Cats and Poetry create Catetry</h1>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "IndexPage",
  components: {},
};
</script>
<script setup>
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

