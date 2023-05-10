<template>
  <div class="container mx-auto px-2">
    <div class="grid md:grid-cols-2 gap-4">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Cat's Name</span>
        </label>
        <input
          v-model="catName"
          type="text"
          placeholder="Your cat's name"
          class="input input-primary"
        />
        <label class="label">
          <span class="label-text">Breed</span>
        </label>
        <select
          class="select select-primary w-full max-w-xs"
          v-model="breed_selected"
        >
          <option value="" selected disabled>Select your cat's breed</option>
          <option
            v-for="option in breed_options"
            :value="option.value"
            :key="option.id"
          >
            {{ option.value }}
          </option>
        </select>
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Brief description</span>
          <span class="label-text-alt">Cat Behaviors or Traits</span>
        </label>
        <textarea
          v-model="behavior_traits"
          class="textarea textarea-primary h-32"
          placeholder="Behaviors, Traits"
        ></textarea>
      </div>
      <div class="mx-auto justify-items-center md:col-span-2">
        <button class="btn" @click="generatePoem">Generate Poem</button>
      </div>
      <div class="mx-auto justify-items-center md:col-span-2" v-if="isLoading">
        <progress progress-success class="progress w-56"></progress>
      </div>
      <div class="mx-auto justify-items-center md:col-span-2" v-else>
        <p class="font-semibold">
          <span style="white-space: pre">{{ poem }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Poem Generator",
  data() {
    return {
      poem: "",
      catName: "",
      isLoading: false,
      breed_selected: "",
      breed_options: [
        { id: 1, value: "American Shorthair" },
        { id: 2, value: "Siamese" },
        { id: 3, value: "Burmese" },
        { id: 4, value: "Bengal" },
        { id: 5, value: "Cornish Rex" },
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