<template>
  <i-container>
    <i-layout>
      <i-layout-header>
        <i-navbar>
          <i-navbar-brand to="/"> CATETRY </i-navbar-brand>
          <i-navbar-collapsible class="_justify-content:flex-end">
            <i-nav>
              <i-nav-item to="/poems"> Poems </i-nav-item>
              <i-nav-item to="/about"> About </i-nav-item>
            </i-nav>
            <i-input placeholder="Type something..">
              <template #append>
                <i-button color="secondary">
                  <i-icon name="ink-search" />
                </i-button>
              </template>
            </i-input>
          </i-navbar-collapsible>
        </i-navbar>
      </i-layout-header>
      <i-layout-content>
        <NuxtPage />
      </i-layout-content>
      <i-layout-footer class="_background:light">
        <center>
          <i-nav color="light" class="_justify-content:center">
            <i-nav-item href="https://inkline.io">Link</i-nav-item>
            <i-nav-item>Item</i-nav-item>
            <i-nav-item>Item</i-nav-item>
            <i-nav-item disabled>Disabled</i-nav-item>
          </i-nav>
        </center>
      </i-layout-footer>
    </i-layout>
  </i-container>
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