<template>
  <div>
    <el-form label-position="right" label-width="80px" :model="ShowOption">
        <el-form-item label="文本内容">
        <el-input v-model="ShowOption.DetailOptions.txt"></el-input>
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="ShowOption.DetailOptions.type" placeholder="请选择按钮类型">
          <el-option label="正常" value="primary"></el-option>
          <el-option label="成功" value="success"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="显示模式">
        <el-select v-model="ShowOption.LayOptions.display" placeholder="请选择显示模式">
          <el-option label="inline-block" value="inline-block"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="定位模式">
        <el-select v-model="ShowOption.LayOptions.position" placeholder="请选择定位模式">
          <el-option label="relative" value="relative"></el-option>
          <el-option label="absolute" value="absolute"></el-option>
          <el-option label="fixed" value="fixed"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="外边距">
        <el-input-number v-model="num" @change="handleChange" label="描述文字" :min='0' style="width:80%" size="mini"></el-input-number> px
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        num:5,
    };
  },
  computed:{
    ShowOption() {
      return this.$store.state.RightConfig;
    },
  },
  methods:{
    handleChange(value) {
      this.ShowOption.LayOptions.margin=value+'px'
      }
  }
};
</script>

<style>
#方法{
  position: fixed;
}
</style>