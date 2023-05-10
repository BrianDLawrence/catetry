<template>
  <div class="pb-8">
    <ThePoemGenerator></ThePoemGenerator>
  </div>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "IndexPage",
  components: {},
};
</script>
<script setup>
import ThePoemGenerator from "@/components/ThePoemGenerator.vue";
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

