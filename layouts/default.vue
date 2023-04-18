<template>
  <div class="container">
    <va-card color="background-element" style="padding: 0.75rem">
      <va-navbar color="secondary" shape class="mb-2">
        <template #left>
          <va-navbar-item class="logo"> CATETRY </va-navbar-item>
        </template>
        <template #right>
          <va-navbar-item>Generate</va-navbar-item>
          <va-navbar-item>Archive</va-navbar-item>
          <va-navbar-item>About</va-navbar-item>
          <va-navbar-item> </va-navbar-item>
        </template>
      </va-navbar>
    </va-card>
    <div class="container">
      <NuxtPage />
    </div>
  </div>
</template>
<script>
export default {
  computed: {},
};
</script>

<style scoped>
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>