<template>
  <div class="content">
    <draggable :group="Group">
      <transition-group>
        <div v-for="(item, index) in Ellist" :key="index">{{ item.name }}</div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      Group: {
        name: "lowcode",
        pull: "clone",
        put: false,
      },
    };
  },
  computed:{
    Ellist(){
        return this.$store.state.Ellist
    },
  },
  components: {
    draggable,
  },
 
};
</script>

<style scoped>
</style>