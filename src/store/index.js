import Vue from "vue";
import Vuex from "vuex";
import {Ellist} from '../utils/el_options'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Ellist,
    ShowList:[],
    RightConfig:undefined,
    PageConfig:{
      position:"relative",
      color:"white"
    }
  },

  mutations: {
    ComConfig(state,Config){
      state.RightConfig = Config
    }
  },
});

export default store;
