<template>
  <div class="footer">
    <span>{{ OneYan.hitokoto }}——————————《{{OneYan.from}}》</span>
    <img src="../../assets/ghost.gif" class="ghost" alt="来摸鱼吧~~" @click="GetOneYan"/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      OneYan: "",
    };
  },
  methods: {
    GetOneYan() {
      axios.get("https://v1.hitokoto.cn").then((res) => {
        this.OneYan = res.data;
      });
    },
  },
  beforeMount() {
    this.GetOneYan();
  },
};
</script>

<style scoped>
.footer {
  position: relative;
  height: 100%;
}
.ghost {
  position: absolute;
  right: 0;
  height: 100%;
}
</style>