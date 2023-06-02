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
      <TheFacebookShare
        :articleUrl="data.sharableurl"
        :articleTitle="data.name"
        :articleImage="'https://catetry.vercel.app/images/SiamesePoetSmall.png'"
        :articleDescription="'Cat poetry is purrfect'"
      ></TheFacebookShare>
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
    {
      name: "og:url",
      content: "https://catetry.vercel.app/",
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:title",
      content: "Catetry is Cat Peotry",
    },
    {
      name: "og:image",
      content: "https://catetry.vercel.app/images/SiamesePoetSmall.png",
    },
  ],
});

const copyURL = () => {
  const copyText = document.getElementById("share-url") as HTMLInputElement;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
};

(function (d: Document, s: string, id: string): void {
  let js: HTMLScriptElement;
  let fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s) as HTMLScriptElement;
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode?.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
</script>
