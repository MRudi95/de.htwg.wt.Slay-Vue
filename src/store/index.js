import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    serverUrl: "localhost:9000",
    grid: []
  },
  mutations: {
    SET_GRID(state, grid) {
      state.grid = grid;
    }
  },
  actions: {
    getData({ commit }) {
      axios.get("http://" + this.state.serverUrl + "/json").then(response => {
        commit("SET_GRID", response.data);
      });
    }
  },
  modules: {},
  getters: {}
});
