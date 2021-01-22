<template>
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </head>
    <div id="app">
      <Header />
      <router-view />
    </div>
  </html>
</template>
<script>
import Header from "./views/Header.vue";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style></style>
