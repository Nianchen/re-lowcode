<template>
  <el-progress :percentage="progress"></el-progress>
</template>

<script>
export default {
    data() {
        return {
            progress:50
        }
    },
    methods:{
        format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
    }
}
</script>

<style>

</style>