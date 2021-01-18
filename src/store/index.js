import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    server: 'localhost:9000',
    colSize: '',
    rowSize: '',
    firstGrid: '',
    firstPlayer: '',
    firstPlayerColor: '',
  },
  mutations: {},
  actions: {},
  modules: {}
});
