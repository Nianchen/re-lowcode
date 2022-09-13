<template>
  <div class="content">
    <draggable   :group="Group">
      <transition-group>
        <div v-for="(item, index) in ElList" :key="index">{{ item.name }}</div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      ElList: [
        {
          name: "button",
        },
      ],
      Group: {
        name: "lowcode",
        pull: "clone",
        put: false,
      },
    };
  },
  components: {
    draggable,
  },
};
</script>

<style scoped>
</style>