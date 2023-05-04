<template>
  <i-container>
    <i-row center>
      <i-column xs="4">
        <i-button @click="generatePoem">Generate Poem</i-button>
      </i-column>
      <i-column xs="4">
        <div v-if="isLoading">Loading...</div>
        <div v-else>
          {{ poem }}
        </div>
      </i-column>
    </i-row>
  </i-container>
</template>

<script>
export default {
  name: "Poem Generator",
  data() {
    return {
      poem: "",
      isLoading: false,
    };
  },
  methods: {
    async generatePoem() {
      this.isLoading = true;

      const { data: response } = await useFetch("/api/generatepoem", {
        query: {
          attributes: { color: "tan", type: "Siamese" },
        },
      });
      if (response) {
        this.poem = response.value;
      }
    },
  },
};
</script>