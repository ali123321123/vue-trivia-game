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
      <router-view />
    </div>
  </html>
</template>
<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
* {
  margin: 0;
}

html,
body {
  height: 100%;
}

#app {
  min-height: 100%;
  height: auto !important;
  height: 100%;
  margin: 0 auto -30px;
}
</style>
