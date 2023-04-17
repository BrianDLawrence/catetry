<template>
  <va-card color="background-element" style="padding: 0.75rem">
    <h1 class="title">Cats and Poetry create Catetry</h1>
  </va-card>
</template>
<script>
import { defineComponent } from "@vue/composition-api";

export default {
  name: "IndexPage",
  components: {},
  head() {
    return {
      title: "Cats and Poetry is Catetry",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "Cats and poetry come together to create Catetry.",
        },
      ],
    };
  },
};
</script>
