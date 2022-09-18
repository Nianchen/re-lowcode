<template>
  <div class="Config">
    <div v-if="ComOption == undefined">
      <el-result
        icon="info"
        title="信息提示"
        subTitle="请点击左侧组件获取具体配置信息"
      >
      </el-result>
    </div>
    <div v-else>
      <span>!!主要配置</span>
      {{ComOption}}
      <el-form label-position="right" label-width="80px" :model="ComOption">
        <el-form-item
          v-for="(obj, key) in ComOption.DetailOptions"
          :key="key"
          :label="key"
        >
          <el-input v-model="ComOption.DetailOptions[key]"></el-input>
        </el-form-item>
        <el-form-item label="按钮类型" v-show="ComOption.tag=='elbutton'">
          <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select> -->
          123
        </el-form-item>

        <el-form-item
          v-for="(obj, key) in ComOption.LayOptions"
          :key="key"
          :label="key"
        >
          <el-input v-model="ComOption.LayOptions[key]"></el-input>
        </el-form-item>
      </el-form>
    </div>
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