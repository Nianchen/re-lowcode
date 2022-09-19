<template>
  <div class="content">
    <draggable :group="Group" v-model="Ellist"  :clone="DeepClone" ghostClass="ghost" >
      <transition-group tag="div" class="ellist">
        <div v-for="(item) in Ellist" :key="item.id" class="el_list_item" :id="item.name">{{ item.title }}</div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState } from 'vuex'
export default {
  data() {
    return {
      Group: {
        name: "lowcode",
        pull: "clone",
        put: false,
      },
    };
  },
  computed:mapState({
    Ellist:state=>state.Ellist
  }),
  components: {
    draggable,
  },
  methods:{
    DeepClone(origin) {
      const data = JSON.parse(JSON.stringify(origin));
      data.id = parseInt(
        new Date().getMilliseconds() + "" + Math.ceil(Math.random() * 100000)
      ).toString(16);
      return data;
    },
  }
};
</script>

<style scoped>
  .content{
    position: relative;
    text-align: center;

  }

  .el_list_item{
    position: relative;
    left: 10%;
    margin-top: 10px;
    width: 80%;
    height: 150px;
    border-radius: 5%;
    border-style:inset;
    border-color: #7cbdff;
    text-align: center;
    line-height: 150px;
    color:#7cbdff;
    font-size: 20px;
    cursor: pointer;
  }
  .ghost{
  border: 1px dashed rgb(64 158 255 / 60%);
  border-radius: 1px;
}
</style>
