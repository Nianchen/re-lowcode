import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Ellist: [
      {
        name: "button",
        id:1
      },
      {
        name: "text",
        id:2
      },
      {
        name: "tail",
        id:3
      },
    ],
  },
  mutations: {},
});

export default store;
