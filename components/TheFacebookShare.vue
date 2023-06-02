<template>
  <div id="1">
    <div id="fb-root"></div>
    <div
      class="fb-share-button"
      :data-href="this.articleUrl"
      data-layout="button"
      data-size="small"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["articleUrl", "articleTitle", "articleImage", "articleDescription"],
  head() {
    return {
      meta: [
        { property: "og:url", content: this.articleUrl },
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.articleTitle },
        { property: "og:description", content: this.articleDescription },
        { property: "og:image", content: this.articleImage },
        { property: "fb:app_id", content: "751667833367" },
      ],
      script: [
        {
          hid: "fb",
          src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0",
          defer: true,
          // changed after script load
          callback: () => {
            FB.XFBML.parse();
          },
        },
      ],
    };
  },
};
</script>