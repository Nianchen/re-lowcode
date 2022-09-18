import Vue from "vue";
import Vuex from "vuex";
import {elbutton } from '../utils/el_options'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Ellist: [
      elbutton,
      {
        name: "eltext",
        title:"基础文本",
        id:2
      },
    ],
    ShowList:[],
    RightConfig:undefined,
  },

  mutations: {
    ComConfig(state,Config){
      state.RightConfig = Config
    }
  },
});

export default store;
