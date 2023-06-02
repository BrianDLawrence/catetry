<template>
  <div id="1">
    <div id="fb-root"></div>
    <div
      class="fb-share-button"
      :data-href="articleUrl"
      data-layout="button"
      data-size="small"
    ></div>
  </div>
</template>

<script lang='ts' setup>
const props = defineProps({
  articleUrl: String,
  articleTitle: String,
  articleImage: String,
  articleDescription: String,
});

useHead({
  meta: [
    { property: "og:url", content: props.articleUrl },
    { property: "og:type", content: "website" },
    { property: "og:title", content: props.articleTitle },
    { property: "og:description", content: props.articleDescription },
    { property: "og:image", content: props.articleImage },
    { property: "fb:app_id", content: "751667833367" },
  ],
  script: [
    {
      hid: "fb",
      src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",
      defer: true,
      onload: () => {
        (window as any).FB.XFBML.parse();
      },
    },
  ],
});
</script>