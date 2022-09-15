<template>
  <div class="content">
    <div class="left">
      <div class="midshow">页面</div>
    </div>
    <div class="right">
      <div class="midconfig">配置</div>
    </div>
  </div>
</template>

<script>
export default {};
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
  background-color: rgb(98, 97, 109);
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
