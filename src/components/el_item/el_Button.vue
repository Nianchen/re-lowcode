<template>
  <el-button :type="ComOptions.按钮类型">{{ ComOptions.文本内容 }}</el-button>
</template>

<script>
export default {
  props: {
    ComOptions: Object,
  },
};
</script>

<style>
</style>