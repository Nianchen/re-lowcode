<template>
  <div class="content">
    <div class="midshow">
      <draggable :group="Groop">
        <transition-group :style="style"> 
            
        </transition-group>
      </draggable>
    </div>
    <div class="midconfig">配置</div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      Groop: {
        name: "lowcode",
        put: true,
      },
      style: "min-height:320px;display: block;",
    };
  },
  components: {
    draggable,
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
}
.midshow {
  height: 100%;
  width: 75%;
  float: left;
  background-color: rgb(104, 104, 104);
}
.midconfig {
  height: 100%;
  width: 24%;
  background-color: rgb(240, 200, 200);
  margin-left: 1%;
  float: left;
}
</style>