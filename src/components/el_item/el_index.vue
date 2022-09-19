<template>
  <div @click="config" :style="Option.ShowOption.LayOptions"  class="Compotion">
    <component :is="Option.name" :ComOptions="Option.ShowOption.DetailOptions"></component>
    <div class="Comdel">
      <i class="el-icon-delete" :id="index" @click.stop="Comdel"></i>
    </div>
  </div>
</template>

<script>
import elbutton from "./el_Button.vue";
import eltxt from "./el_Txt.vue";
import elpagination from './el_Pagination.vue'
import elprogress from './el_Progress.vue'
import elswiper from './el_swiper.vue'
import elcard from './el_card.vue'
import { mapMutations } from "vuex";
export default {
  components: {
    elbutton,
    eltxt,
    elpagination,
    elprogress,
    elswiper,
    elcard
  },
  props: {
    Option: Object,
    index:Number
  },
  methods: {
    ...mapMutations(["ComConfig"]),
    config() {
      this.ComConfig(this.Option.ShowOption);
    },
    Comdel(){
     this.$emit("Comdel",this.index)
   
    }
  },
};
</script>

<style scoped>
  .Compotion{
    position: relative;
    box-shadow: 0 2px 4px rgba(10, 203, 224, 0.12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .Comdel{
    position: absolute;
    right: 0;
    bottom: 0;
    color: red;
    z-index: 2;
  }
</style>