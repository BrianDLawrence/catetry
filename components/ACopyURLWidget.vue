<template>
  <div class="py-2">
    <button id="copy-button" class="btn btn-primary" @click="copyURL">
      Copy Shareable Link
    </button>
  </div>
</template>
<script lang='ts' setup>
const props = defineProps({
  shareableurl: String,
});

const copyURL = async () => {
  const copyButton = document.getElementById("copy-button") as HTMLInputElement;
  try {
    await navigator.clipboard.writeText(props.shareableurl!);
    copyButton.innerHTML = "✔ Copied!";
  } catch (err) {
    console.error("Failed to copy: ", err);
    copyButton.innerHTML = "Can't Copy!";
  }
};
</script>