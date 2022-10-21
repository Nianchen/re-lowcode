<template>
  <el-button :type="ComOptions.type">{{ ComOptions.txt }}</el-button>
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