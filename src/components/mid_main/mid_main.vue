<template>
  <div class="content">
    <div
      class="left"
      v-loading="Loading"
      element-loading-text="页面加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="white"
    >
      <draggable
        :group="Groop"
        v-model="ShowList"
        ghostClass="ghost"
        class="midshow"
      >
        <transition-group class="group" :style="PageConfig" style="display:block">
          <elitem
            v-for="(item, index) in ShowList"
            :key="item.id"
            :Option="item"
            :index="index"
          ></elitem>
        </transition-group>
      </draggable>
    </div>

    <div class="right">
      <div class="midconfig"><rightaside></rightaside></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import elitem from "../el_item/el_index.vue";
import rightaside from "../right_aside/right_aside.vue";
import { mapMutations,mapState } from "vuex"; 
export default {
  data() {
    return {
      Groop: {
        name: "lowcode",
      },
      loading: true,
    };
  },
  computed: {
    ...mapState(['PageConfig']),
    ShowList: {
      set(val) {
        this.ShowListPush(val);
      },
      get() {
        return this.$store.state.ShowList;
      },
    },
    Loading: {
      get() {
        return this.$store.state.PageLoding;
      },
    },
  },
  components: {
    draggable,
    elitem,
    rightaside,
  },
  methods: {
    ...mapMutations(["ShowListPush", "PageInit"]),
    Onadd() {
     
    },
    SaveLocal() {
      let local = JSON.stringify(this.ShowList);
      window.localStorage.setItem(this.$store.state.NowPage, local);
    },
  },
  beforeMount() {
    if (window.localStorage.getItem(this.$store.state.NowPage)) {
      let local = JSON.parse(
        window.localStorage.getItem(this.$store.state.NowPage)
      );
      this.ShowList.push(...local);
    }
    this.PageInit();
    //定时保存
    setInterval(() => {
      this.SaveLocal();
      console.log("save success");
    }, 5000);
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  position: relative;
}
.left {
  height: 100%;
  width: 75%;
  overflow: scroll;
  position: absolute;
}
.midshow {
  position: relative;
  height: 1000px;
  width: 99%;
}
.right {
  height: 100%;
  width: 25%;
  position: absolute;
  right: 0;
}
.midconfig {
  margin-left: 10px;
  height: 100%;
  width: 100%;
  background-color: #d9ecff;
}
.group {
  background-color: white;
}
.ConfigSlider {
  position: absolute;
  font-size: 30px;
  right: 0;
  top: 1%;
  color: #409eff;
  cursor: pointer;
  z-index: 2;
}
</style>
