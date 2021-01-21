import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import $ from "jquery";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    serverUrl: "slay-backend-server.herokuapp.com",
    grid: [],
    coord0: "",
    coord1: "",
    msg: "Waiting for Player to start ..",
    playername: "",
    playercolor: "purple"
  },
  mutations: {
    SET_GRID(state, grid) {
      state.grid = grid;
      console.log("UPDATED GRID");
    },
    SET_COORD0(state, coord) {
      state.coord0 = coord;
    },
    SET_COORD1(state, coord) {
      state.coord1 = coord;
    },
    SET_MSG(state, msg) {
      state.msg = msg;
    },
    SET_PLAYERNAME(state, name) {
      state.playername = name;
    },
    SET_PLAYERCOLOR(state, color) {
      state.playercolor = color;
    }
  },
  actions: {
    getData({ commit }) {
      axios.get("https://" + this.state.serverUrl + "/json").then(response => {
        commit("SET_GRID", response.data);
      });
    }
  },
  modules: {},
  getters: {}
});
export default store;

const websocket = new WebSocket("wss://" + location.host + "/websocket");

websocket.onopen = function() {
  console.log("[WS] Opening websocket to server ..");
  this.send("SYN");
};

websocket.onmessage = function(e) {
  if (typeof e.data === "string") {
    try {
      console.log("[WS] Server received: ");
      console.log(JSON.parse(e.data));
      $.each(JSON.parse(e.data), function(key, val) {
        if (key === "fields") {
          //update fields
          store.commit("SET_GRID", JSON.parse(e.data));
        } else if (key === "message") {
          //error message
          store.commit("SET_MSG", val);
        } else if (key === "player") {
          //next player
          store.commit("SET_PLAYERNAME", `It is your turn ${val.playername}!`);
          store.commit("SET_PLAYERCOLOR", val.playercolor);
        }
      });
    } catch (e) {
      console.log("[WS] Got a non-JSON object back ..");
    }
  }
};
