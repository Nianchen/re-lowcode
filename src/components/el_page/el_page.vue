<template>
  <div class="Pagelist">
    <el-button type="primary" @click="Pageadd">增加页面</el-button>
    <el-button type="success" @click="Previe">预览页面</el-button>
    <div>
      <el-table :data="PageList" style="width: 100%">
        <el-table-column label="页面" width="70">
          <template slot-scope="scope">
            <span>{{ scope.row }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="140">
          <template slot-scope="scope">
            <el-button size="mini" @click="Change(scope.row)">切换</el-button>
            <el-button size="mini" type="danger" v-if="scope.row !== 'index'" style="margin-left: 3px"
              @click="PageDelete(scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["PageList"]),
    PageList: {
      get() {
        return this.$store.state.PageList;
      },
    },
  },
  methods: {
    ...mapActions(["PageLoading"]),
    ...mapMutations(["PageSet", "ChangePage", "PageDel"]),
    Pageadd() {
      this.$prompt("请输入新页面", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputValidator: (value) => {       // 点击按钮时，对文本框里面的值进行验证
          if (!value) {
            return '输入不能为空';
          }
        },
      })
        .then(({ value }) => {
          let List = this.$store.state.PageList
          if(List.includes(value)){
            this.$message({
            type: "error",
            message: value + '已经存在',
          });
          }
          else{
               this.$message({
            type: "success",
            message: "你的新页面是: " + value,
          });
          this.PageSet({ name: value, list: [] });
          }
       
        }).catch((err) => {
          console.log(err);
        })
    },
    Previe(){
      this.$router.push('preview')
    },
    Change(toPage) {
      this.PageLoading(toPage)
    },
    PageDelete(index) {
      this.PageDel(index)
      this.PageLoading('index')
    }
  },
};
</script>

<style scoped>
.Pagelist {
  padding: 10px;
}
</style>