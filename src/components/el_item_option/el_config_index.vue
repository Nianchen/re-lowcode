<template>
  <div class="el_config" >
    <component :is="DetaliCofigName"></component>
  </div>
</template>

<script>
import elbutton from './el_button.vue'
import eltxt from './el_txt.vue'
import elprogress from './el_progress.vue'
export default {
    components:{
        elbutton,
        eltxt,
        elprogress
    },
    computed:{
    DetaliCofigName() {
      return this.$store.state.RightConfig.tag;
    },
    }
}
</script>

<style>
.el_config .el-form-item{
  margin-bottom: 5px;
}
</style>