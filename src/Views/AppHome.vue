<template>
  <el-container>
    <el-aside>
      <LeftAside></LeftAside>
    </el-aside>
    <el-container>
      <el-header>
        <TopHead></TopHead>
        <div class="git">
          <a href="https://github.com/Nianchen"
            ><img src="../assets/github.png" style="height: 100%"
          /></a>
        </div>
      </el-header>
      <el-main><MidMain></MidMain></el-main>
      <el-footer>
        <ButFoot></ButFoot>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import LeftAside from "@/components/left_aside/left_aside.vue";
import MidMain from "@/components/mid_main/mid_main.vue";
import ButFoot from "@/components/but_foot/but_footer.vue";
import TopHead from "@/components/top_head/top_head.vue";
export default {
  name: "AppHome",
  components: {
    LeftAside,
    MidMain,
    ButFoot,
    TopHead,
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #79bbff;
  color: white;
  text-align: center;
  line-height: 60px;
  width: 100%;
  position: relative;
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
  width: 30%;
}

.el-main {
  background-color: #e4edf6;
  color: #333;
}

.el-menu {
  background-color: #d3dce6;
}
.git {
  position: absolute;
  height: 60%;
  top: 20%;
  right: 10px;
}
</style>
