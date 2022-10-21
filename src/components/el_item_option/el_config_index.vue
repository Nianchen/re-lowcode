<template>
  <div>
    <component :is="DetaliCofigName"></component>
  </div>
</template>

<script>
import elbutton from './el_button.vue'
import eltxt from './el_txt.vue'
export default {
    components:{
        elbutton,
        eltxt
    },
    computed:{
    DetaliCofigName() {
      return this.$store.state.RightConfig.tag;
    },
    }
}
</script>

<style>

</style>