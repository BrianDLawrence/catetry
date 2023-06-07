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
      <div class="mx-auto justify-items-center md:col-span-2" v-if="!isLoading">
        <button
          class="btn"
          @click="generatePoem"
          :disabled="isGenerateDisabled"
        >
          Generate Poem
        </button>
      </div>
      <div class="mx-auto justify-items-center md:col-span-2" v-if="isLoading">
        <ALoadingIndicator :message="'Generating...'"></ALoadingIndicator>
      </div>
      <div class="mx-auto justify-items-center md:col-span-2" v-else>
        <p class="font-semibold">
          <span style="white-space: pre">{{ poem }}</span>
        </p>
        <div class="py-3" v-if="shareableurl != ''">
          <ACopyURLWidget :shareableurl="shareableurl"></ACopyURLWidget>
          <TheFacebookShare
            :articleUrl="shareableurl"
            :articleTitle="catName"
            :articleImage="'https://catetry.vercel.app/images/SiamesePoetSmall.png'"
            :articleDescription="'Cat poetry is purrfect'"
          ></TheFacebookShare>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
const { data: breed_options } = await useFetch("/api/breeds");
const poem = ref("");
const catName = ref("");
const isLoading = ref(false);
const breed_selected = ref("");
const behavior_traits = ref("");
const shareableurl = ref("");

const isGenerateDisabled = computed(() => {
  return (
    catName.value == "" ||
    breed_selected.value == "" ||
    behavior_traits.value == ""
  );
});

const generatePoem = async () => {
  isLoading.value = true;

  const { data: response } = await useFetch("/api/generatepoem", {
    query: {
      name: catName.value,
      breed: breed_selected.value,
      attributes: behavior_traits.value,
    },
  });
  if (response) {
    poem.value = response.value!;
    savePoem();
    isLoading.value = false;
  }
};

const savePoem = async () => {
  const { data: response } = await useFetch("/api/poem", {
    method: "post",
    body: {
      poem: poem.value,
      name: catName.value,
      breed: breed_selected.value,
      attributes: behavior_traits.value,
      date: new Date().toUTCString(),
    },
  });
  if (response) {
    console.log(response.value);
    shareableurl.value = response.value?.sharableurl!;
  }
};
</script>