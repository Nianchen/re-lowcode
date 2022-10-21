<template>
  <div @dblclick="test">
    <div v-show="!inputshow">
      {{ComOptions.txt}}
    </div>
    <div v-show="inputshow">
      <el-input v-model="changetxt" @blur="change"></el-input>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      changetxt: "ComOptions",
      inputshow: false
    }
  },
  methods: {
    test(e) {
      let NowTxt = e.target.innerText
      this.changetxt = NowTxt
      this.inputshow = !this.inputshow
    },
    change() {
      this.inputshow = !this.inputshow
     this.$store.state.RightConfig.DetailOptions.txt = this.changetxt
    }
  },
  props: {
    ComOptions: Object,
  },
}
</script>
 
<style>

</style>