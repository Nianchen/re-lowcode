<template>
  <el-container>
    <el-aside>
      <LeftAside></LeftAside>
    </el-aside>
    <el-container>
      <el-header>Low-Code</el-header>
      <el-main><MidMain></MidMain></el-main>
      <el-footer>底部标识</el-footer>
    </el-container>
  </el-container>
</template>

<script>
import LeftAside from "@/components/left_aside/left_aside.vue";
import MidMain from "@/components/mid_main/mid_main.vue";

export default {
  name: "AppHome",
  components: {
    LeftAside,
    MidMain,
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-header{
  background-color: #79bbff;
  color: white;
  text-align: center;
  line-height: 60px;
}
.el-footer {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  width: 30%;
}

.el-main {
  background-color: #e4edf6;
  color: #333;

}

.el-menu {
  background-color: #d3dce6;
}
</style>
