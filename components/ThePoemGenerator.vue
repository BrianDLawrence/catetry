<template>
  <i-container>
    <i-row center>
      <i-column xs="2">
        <i-form>
          <i-form-group required>
            <i-form-label>Name</i-form-label>
            <i-input v-model="catName" placeholder="Cat Name" />
          </i-form-group>

          <i-form-group required>
            <i-form-label>Breed</i-form-label>
            <i-select
              v-model="breed_selected"
              :options="breed_options"
              placeholder="Choose breed.."
            />
          </i-form-group>
        </i-form>
        <br />
      </i-column>
      <i-column xs="4">
        <i-form>
          <i-form-group required>
            <i-form-label>Brief description (behaviors, traits)</i-form-label>
            <i-textarea
              v-model="behavior_traits"
              placeholder="enter behaviors and traits"
            />
          </i-form-group>
        </i-form>
        <br />
      </i-column>
    </i-row>
    <i-row center>
      <i-column xs="4">
        <i-button center @click="generatePoem">Generate Poem</i-button>
        <div v-if="isLoading"><i-loader color="primary" /></div>
        <div v-else>
          <span style="white-space: pre">{{ poem }}</span>
        </div>
        <br />
      </i-column>
    </i-row>
    <i-row center>
      <i-column xs="4">
        <i-button @click="savePoem">Save Poem</i-button>
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
      catName: "",
      isLoading: false,
      breed_selected: null,
      breed_options: [
        { id: 1, label: "American Shorthair" },
        { id: 2, label: "Siamese" },
        { id: 3, label: "Burmese" },
        { id: 4, label: "Bengal" },
        { id: 5, label: "Cornish Rex" },
      ],
      behavior_traits: "",
    };
  },
  methods: {
    async generatePoem() {
      this.isLoading = true;

      const { data: response } = await useFetch("/api/generatepoem", {
        query: {
          name: this.catName,
          breed: this.breed_selected,
          attributes: this.behavior_traits,
        },
      });
      if (response) {
        this.poem = response.value;
        this.isLoading = false;
      }
    },
    async savePoem() {
      const { data: response } = await useFetch("/api/poem", {
        method: "post",
        body: { test: 123 },
      });
      if (response) {
        console.log(response.value);
      }
    },
  },
};
</script>