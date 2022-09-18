<template>
  <div class="Config">
        <div v-if="ComOption==undefined">请点击组件获取配置详情！</div>
        <div v-else>{{ComOption}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    ComOption() {
      return this.$store.state.RightConfig;
    },
  },
};
</script>

<style scoped>
.Config {
  position: relative;
  width: 96%;
  height: 96%;
  left: 2%;
  top: 2%;
}
</style>