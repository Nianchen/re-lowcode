<template>
  <div id="app">
    <AppHome></AppHome>
  </div>
</template>

<script>
import AppHome from "@/Views/AppHome.vue";
export default {
  name: "App",
  components: {
    AppHome,
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
