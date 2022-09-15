<template>
  <div class="content">
    <div class="left">
      <div class="midshow">
        <draggable :group="Groop" @add="Onadd" v-model="ShowList"  ghostClass="ghost">
          <transition-group :style="style">
            <div v-for="item in ShowList" :key="item.id">{{item.name}}</div>
          </transition-group>
        </draggable>
      </div>
    </div>
    <div class="right">
      <div class="midconfig">配置</div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      Groop: {
        name: "lowcode",
      },
      ShowList:[],
      style: "min-height:320px;display: block;",
    };
  },
  components: {
    draggable,
  },
  methods:{
    Onadd(){
      console.log(this.ShowList);
    }
  }
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
  height: 1000px;
  width: 1000px;
}
.right {
  height: 100%;
  width: 25%;
  position: absolute;
  right: 0;
}
.midconfig {
  height: 100%;
  width: 100%;
  background-color: rgb(56, 28, 28);
}

</style>
