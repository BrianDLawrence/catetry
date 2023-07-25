<template>
  <div>
    <button id="copy-button" class="btn btn-primary py-2" @click="copyURL">
      Copy Shareable Link
    </button>
    <label class="input-group input-group-xs">
      <input
        id="share-url"
        class="input-xs w-full bg-white text-gray-700 font-semibold py-2 px-3 rounded"
        type="text"
        readonly
        v-model="props.shareableurl"
      />
    </label>
  </div>
</template>
<script lang='ts' setup>
const props = defineProps({
  shareableurl: String,
});

const copyURL = () => {
  const copyText = document.getElementById("share-url") as HTMLInputElement;
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  const copyButton = document.getElementById("copy-button") as HTMLInputElement;
  copyButton.innerHTML = "✔ Copied!";
};
</script>