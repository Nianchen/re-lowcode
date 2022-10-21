<template>
  <div class="header">
    <div>
        <span v-for="(item,index) in words" :key="index">{{item}}</span>!
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      words: [], //字母数组push，pop的载体
      str: "这里是 NianChen!", //str初始化
      letters: [], //str分解后的字母数组
      order: 1, //表示当前是第几句话
    };
  },
  watch: {
    //监听order值的变化，改变str的内容
    order() {
      if (this.order % 4 == 1) {
        this.str = "这里是 NianChen!";
      } else if (this.order % 4 == 2) {
        this.str = "一个不太会前端的菜前端 ";
      } else if (this.order % 4 == 3) {
        this.str = "这是一个非常简单的低代码";
      } else {
        this.str = "因为复杂的我写不出来...";
      }
    },
  },
  mounted() {
    //页面初次加载后调用begin()开始动画
    this.begin();
  },
  methods: {
    //开始输入的效果动画
    begin() {
      this.letters = this.str.split("");
      for (var i = 0; i < this.letters.length; i++) {
        setTimeout(this.write(i), i * 100);
      }
    },
    //开始删除的效果动画
    back() {
      let L = this.letters.length;
      for (var i = 0; i < L; i++) {
        setTimeout(this.wipe(i), i * 50);
      }
    },
    //输入字母
    write(i) {
      return () => {
        let L = this.letters.length;
        this.words.push(this.letters[i]);
        let that = this;
        /*如果输入完毕，在2s后开始删除*/
        if (i == L - 1) {
          setTimeout(function () {
            that.back();
          }, 2000);
        }
      };
    },
    //擦掉(删除)字母
    wipe(i) {
      return () => {
        this.words.pop(this.letters[i]);
        /*如果删除完毕，在300ms后开始输入*/
        if (this.words.length == 0) {
          this.order++;
          let that = this;
          setTimeout(function () {
            that.begin();
          }, 300);
        }
      };
    },
  },
};
</script>
<style scoped lang="less">
.header {
    height: 100%;
    font-size: 25px;
}
</style>