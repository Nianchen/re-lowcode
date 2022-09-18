<template>
  <div class="content">
    <div class="left">
      <draggable
        :group="Groop"
        v-model="ShowList"
        ghostClass="ghost"
        class="midshow"
      >
        <transition-group class="group" :style="style">
          <elitem
            v-for="item in ShowList"
            :key="item.id"
            :Option="item"
          ></elitem>
        </transition-group>
      </draggable>
    </div>
   

      <div class="right">
        <div class="midconfig"><rightaside></rightaside></div>
      </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
import elitem from "../el_item/el_index.vue";
import rightaside from "../right_aside/right_aside.vue";
export default {
  data() {
    return {
      Groop: {
        name: "lowcode",
      },
      style: "min-height: 1000px; display: block;",
      ShowList: [],
      
    };
  },
  computed: {},
  components: {
    draggable,
    elitem,
    rightaside,
  },
  methods: {
    
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  position: relative;
}
.left {
  height: 100%;
  width: 75%;
  overflow: scroll;
  position: absolute;
}
.midshow {
  position: relative;
  height: 1000px;
  width: 99%;
}
.right {
  height: 100%;
  width: 25%;
  position: absolute;
  right: 0;
}
.midconfig {
  margin-left: 10px;
  height: 100%;
  width: 100%;
  background-color: #d9ecff;
}
.group {
  background-color: white;
}
.ConfigSlider {
  position: absolute;
  font-size: 30px;
  right: 0;
  top: 1%;
  color: #409eff;
  cursor:pointer;
  z-index: 2;
}


</style>
