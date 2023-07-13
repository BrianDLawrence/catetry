<template>
  <div class="container mx-auto px-2 py-2">
    <div class="mx-auto justify-items-center">
      <div class="form-control flex justify-center">
        <label class="label" for="catnameinput">
          <span class="label-text">Cat's Name</span>
        </label>
        <input
          id="catnameinput"
          v-model="catName"
          type="text"
          placeholder="Your cat's name"
          class="input input-primary"
        />
        <label class="label" for="breedinput">
          <span class="label-text">Breed</span>
        </label>
        <select
          id="breedinput"
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
      <div class="flex justify-center pt-4 pb-2" v-if="!isLoading">
        <button class="btn" @click="searchPoem" :disabled="isGenerateDisabled">
          Search
        </button>
      </div>
      <div class="flex justify-center py-2" v-if="isLoading">
        <ALoadingIndicator
          :message="'Loading with love...'"
        ></ALoadingIndicator>
      </div>
      <div class="mx-auto justify-items-center" v-if="searchInvoked">
        <PoemDisplayWidget :data="poem_array"></PoemDisplayWidget>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const { data: breed_options } = await useFetch("/api/breeds");
const catName = ref("");
const searchInvoked = ref(false);
const isLoading = ref(false);
const breed_selected = ref("");
var poem_array;

const isGenerateDisabled = computed(() => {
  return catName.value == "" || breed_selected.value == "";
});

const searchPoem = async () => {
  isLoading.value = true;
  searchInvoked.value = false;

  const { data } = await useFetch("/api/poems", {
    query: {
      poemCount: 10,
      catName: catName,
      catBreed: breed_selected,
    },
  });

  if (data) {
    poem_array = data.value!;
  }

  isLoading.value = false;
  searchInvoked.value = true;
};
</script>