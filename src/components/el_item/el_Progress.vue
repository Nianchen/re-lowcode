<template>
  <el-progress :percentage="parseInt(ComOptions.percentage) " :type="ComOptions.type" ></el-progress>
</template>

<script>
export default {
    props: {
    ComOptions: Object,
  },
  
}
</script>

<style>

</style>