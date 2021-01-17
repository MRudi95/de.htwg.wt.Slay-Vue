import Vue from "vue";
import Vuex from "vuex";
//import $ from "jquery";

Vue.use(Vuex);

const server = 'localhost:9000';
const websocket = new WebSocket("ws://" + server + "/websocket");
/*
const axiosConfig = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  crossdomain: true
};

 */

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {

  },
  modules: {}
});

websocket.onopen = function() {
  console.log("Trying to connect to Server");
  websocket.send("Trying to connect to Server");
}

websocket.onclose = function (event) {
  console.log('Connection Closed! ' + event.message);
};

websocket.onerror = function (error) {
  console.log('Error Occured: ' + error);
};

websocket.onmessage = function (e) {
  if (typeof e.data === "string") {
     console.log('String message received: ' + e.data);
    /*
    $.each(JSON.parse(e.data), function(key, val){
      if(key === "fields"){
        //update fields
        updateGrid(val);
      } else if(key === "message"){
        //error message
        document.getElementById("gameMsg").innerText = val;
      } else if(key === "player"){
        //next player
        document.getElementById("playername").innerText = "It is your turn " + val.playername + "!";
        document.getElementById("playercolor").className = "v-avatar accent-4 " + val.playercolor;
      }
    });
     */
  }
};
