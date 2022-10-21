<template>
  <div class="Config">
    <el-tabs type="border-card" :stretch="true" style="height:100%">
      <el-tab-pane label="组件配置">
        <div v-if="ComOption == undefined">
          <el-result icon="info" title="信息提示" subTitle="请点击左侧组件获取具体配置信息">
          </el-result>
        </div>
        <div v-else>
          <ComConfigIndex></ComConfigIndex>
          <div class="Comdel">
            <el-button type="danger" @click="Comdel">删除组件</el-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="页面配置">
        <el-form label-position="right" label-width="80px" :model="ComOption">
          <el-form-item v-for="(obj, key) in PageConfg" :key="key" :label="key=='backgroundColor'?'背景颜色':key">
            <el-input v-model="PageConfg[key]" v-if="key!='backgroundColor'"></el-input>
            <el-color-picker v-model="PageConfg['backgroundColor']" v-else></el-color-picker>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import ComConfigIndex from '../el_item_option/el_config_index.vue'
export default {
  data() {
    return {
      activeName: "second",
    };
  },
  components: {
    ComConfigIndex
  },
  computed: {
    ComOption() {
      return this.$store.state.RightConfig;
    },
    PageConfg() {
      return this.$store.state.PageConfig
    },
    Comindex() {
      return this.$store.state.Rightindex
    }
  },
  methods: {
    ...mapMutations(['ShowListDel']),
    Comdel() {
      this.$nextTick(() => {
        this.ShowListDel(this.Comindex)
      })
    }
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