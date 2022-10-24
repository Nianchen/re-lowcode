<template>
    <div>
        <el-form label-position="right" label-width="80px" :model="ShowOption">
      <el-form-item label="类型">
        <el-select v-model="ShowOption.DetailOptions.type" placeholder="请选择按钮类型">
          <el-option label="线形" value="line"></el-option>
          <el-option label="圆形" value="success"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="进度">
        <el-input v-model="ShowOption.DetailOptions.percentage" style="width: 80%;"></el-input> %
      </el-form-item>
      <el-form-item label="宽度">
        <el-input v-model="ShowOption.LayOptions.width" style="width: 80%;"></el-input> px
      </el-form-item>
    </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    computed:{
    ShowOption() {
      return this.$store.state.RightConfig;
    },
  },

}
</script>
<style scoped>

</style>
