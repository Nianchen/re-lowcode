<template>
  <div class="content">
    <div class="leftaside">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @select="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
        style="height: 100%"
      >
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">页面</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">组件</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">数据源</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">拓展</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="leftmain">
      <div v-if="AsideChose == 1">页面</div>
      <div v-else-if="AsideChose == 2">组件</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      AsideChose: undefined,
    };
  },
  methods: {
    handleOpen(key) {
      console.log(key);
      this.AsideChose = key;
    },
    handleClose(key) {
      console.log(key);
    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.content {
  height: 100%;
}
.leftaside {
  height: 100%;
  float: left;
}
.leftmain {
  height: 100%;
  background-color: white;
}
</style>
