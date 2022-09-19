<template>
  <div class="Config">
      <el-tabs type="border-card" :stretch="true" style="height:100%">
        <el-tab-pane label="组件配置">
          <div v-if="ComOption == undefined">
            <el-result
              icon="info"
              title="信息提示"
              subTitle="请点击左侧组件获取具体配置信息"
            >
            </el-result>
          </div>
          <div v-else>
            <el-form
              label-position="right"
              label-width="80px"
              :model="ComOption"
            >
              <el-form-item
                v-for="(obj, key) in ComOption.DetailOptions"
                :key="key"
                :label="key"
              >
                <el-input v-model="ComOption.DetailOptions[key]"></el-input>
              </el-form-item>
              <el-form-item
                v-for="(obj, key) in ComOption.LayOptions"
                :key="key"
                :label="key"
              >
                <el-input v-model="ComOption.LayOptions[key]"></el-input>
              </el-form-item>
            </el-form></div
        ></el-tab-pane>
        <el-tab-pane label="页面配置">
          <el-form
              label-position="right"
              label-width="80px"
              :model="ComOption"
            >
              <el-form-item
                v-for="(obj, key) in PageConfg"
                :key="key"
                :label="key"
              >
                <el-input v-model="PageConfg[key]"></el-input>
              </el-form-item>
            </el-form>

        </el-tab-pane>
      </el-tabs>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  computed: {
    ComOption() {
      return this.$store.state.RightConfig;
    },
    PageConfg(){
      return this.$store.state.PageConfig
    }
  },
  methods: {},
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