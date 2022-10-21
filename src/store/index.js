import Vue from "vue";
import Vuex from "vuex";
import { Ellist,PageConfig} from "../utils/el_options";
import {SavelocalStorage,GetlocalStorage} from '../utils/LocalStorage'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Ellist,
    NowPage: "index",
    PageList: [],
    ShowList: [],
    RightConfig: undefined,
    Rightindex: undefined,
    PageConfig,
    PageLoding: false,
  },
  actions: {
    PageLoading(context, payload) {
      //Loading动画加载
      context.commit("PageLoding");
      setTimeout(() => {
        context.commit("ChangePage", payload);
        context.commit("PageLoding");
      }, 1000);
    },
  },
  mutations: {
    //组件配置相关
    ComConfig(state, Config) {
      state.RightConfig = Config;
    },
    ComIndex(state, index) {
      state.Rightindex = index;
    },
    //页面列表相关操作
    PageInit(state) { //页面初始化
      if (GetlocalStorage("PageList")) {
        const PageListJson = GetlocalStorage("PageList")
        state.PageList.push(...JSON.parse(PageListJson));
      } else {
        state.PageList.push("index");
      }
    },
    PageSet(state, newPage) {
      state.PageList.push(newPage.name);
      const PageDetailJson = JSON.stringify(newPage.list);
      const PageListJson = JSON.stringify(state.PageList);
      // 首先当前页面的基本配置要保存 然后保存新的页面列表
      SavelocalStorage(newPage.name,PageDetailJson)
      SavelocalStorage("PageList",PageListJson)
    },
    PageDel(state, index) {
      state.PageList.splice(index, 1);
    },
    //当前显示页面组件操作
    PageLoding(state) {
      state.PageLoding = !state.PageLoding;
    },
    ChangePage(state, newPage) {
      state.NowPage = newPage;
      const PageDetailJson = GetlocalStorage(state.NowPage);
      state.ShowList = JSON.parse(PageDetailJson);
    },
    ShowListPush(state, newEl) {
      state.ShowList = newEl;
    },
    ShowListDel(state, index) {
      state.ShowList.splice(index, 1);
      const local = JSON.stringify(state.ShowList);
      SavelocalStorage(state.NowPage,local)
    },
  },
});

export default store;
