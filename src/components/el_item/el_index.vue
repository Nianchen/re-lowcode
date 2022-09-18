<template>
  <div @click="config" :style="Option.LayOptions">
    <component :is="Option.name"></component>
  </div>
</template>

<script>
import elbutton from "./el_Button.vue";
import eltext from "./el_text.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    elbutton,
    eltext,
  },
  props: {
    Option: Object,
  },
  methods: {
    ...mapMutations(["ComConfig"]),
    config() {
      this.ComConfig(this.Option);
    },
  },
};
</script>

<style>
</style>