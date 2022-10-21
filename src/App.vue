<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {

  },
};
</script>

<style>
html,
body,
#app {
  height: 100vh;
  margin: 0;
  padding: 0;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
 
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease;
}
::-webkit-scrollbar {

display: none; /* Chrome Safari */

}
</style>
