<template>
  <div class="flex justify-center">
    <div v-if="pending" class="pb-8">
      <ALoadingIndicator :message="'Loading...'"></ALoadingIndicator>
    </div>
    <div v-else class="pb-8 prose">
      <h2>{{ data.name }}</h2>
      <span style="white-space: pre"> {{ data.poem }} </span>
      <div class="py-3">
        <button
          id="copy-button"
          class="ml-2 copy-button text-secondary font-semibold py-2 px-2 rounded"
          @click="copyURL"
        >
          Copy Shareable Link
        </button>
        <label class="input-group input-group-xs">
          <input
            id="share-url"
            class="input-xs w-full bg-white text-gray-700 font-semibold py-2 px-3 rounded"
            type="text"
            readonly
            v-model="data.sharableurl"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const { pending, data } = await useLazyFetch("/api/poem", {
  query: {
    poemid: route.params.name,
  },
});

var value;

useHead({
  title: "Poems",
  meta: [
    {
      name: "description",
      content: "Cat poetry is purrfect",
    },
  ],
});

const copyURL = () => {
  const copyText = document.getElementById("share-url") as HTMLInputElement;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
};
</script>
