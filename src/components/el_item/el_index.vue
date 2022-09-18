<template>
  <div @click="config" :style="Option.ShowOption.LayOptions">
    <component :is="Option.name" :ComOptions="Option.ShowOption.DetailOptions"></component>
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
      this.ComConfig(this.Option.ShowOption);
    },
  },
};
</script>

<style>
</style>