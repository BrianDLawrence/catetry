<template>
  <i-container>
    <i-row center>
      <i-column xs="4">
        <i-button @click="generatePoem">Generate Poem</i-button>
      </i-column>
      <i-column xs="4">
        <div v-if="isLoading"><i-loader color="primary" /></div>
        <div v-else>
          <span style="white-space: pre">{{ poem }}</span>
        </div>
      </i-column>
    </i-row>
    <br />
    <br />
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
        this.isLoading = false;
      }
    },
  },
};
</script>