import axios from 'axios';
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    grid: [],
  },
  mutations: {
    SET_GRID(state, grid) {
      state.grid = grid
    }
  },
  actions: {
    getData({ commit }) {
      axios.get('http://localhost:9000/json').then(response => {
        commit('SET_GRID', response.data)
      })
    }
  },
  modules: {},
  getters: {}
});
