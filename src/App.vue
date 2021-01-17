<template>
  <v-app>
  <navigation></navigation>
    <v-main>
      <Main></Main>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import $ from "jquery";

export default {
  name: "App",
  components: {
    Navigation,
    Main
  },
  data: function() {
    return {
      websocket: null,
      server: 'localhost:9000',
      pieceMap: new Map([
        [' ', ' '],
        ['T1', 'mdi-palm-tree'],
        ['T2', 'mdi-pine-tree'],
        // ['T', 'mdi-pine-tree'],
        ['C', 'mdi-home'],
        ['B', 'mdi-castle'],
        ['G', 'mdi-grave-stone'],
        ['1', 'mdi-account'],
        ['2', 'mdi-account-multiple'],
        ['3', 'mdi-account-group'],
        ['4', 'mdi-alien'],
      ]),
      fieldMap: Map([
        [2, 'https://cdn.discordapp.com/attachments/766231770445512715/786534037024014336/ryan-o-connor-tileable-grass.png'],
        [1, 'https://cdn.discordapp.com/attachments/766231770445512715/786534077545185300/dbwm528-78b11079-6ce9-4182-9166-d6c07af7d494.png'],
        [0, 'https://cdn.discordapp.com/attachments/766231770445512715/786534055566376990/f1a7ed42b092b013089dafb1774ef2ea.png']
      ])
    };
  },
  methods: {
    gamepieceIcon: function(gamepiece, owner){
        if(gamepiece === 'T'){
          return this.pieceMap.get(gamepiece + owner);
        } else {
          return this.pieceMap.get(gamepiece);
        }
    },
    gamepieceColor: function(field, setup=false){
      let color = "blue-grey lighten-4"; //default

      if(field.owner === 1){ //yellow player
        //tree
        if(field.gamepiece === "T"){
          color = "green darken-4"
        }
        //unit gamepiece
        if(field.gamepiece === '1' || field.gamepiece === '2' || field.gamepiece === '3' || field.gamepiece === '4'){
          if(!field.hasMoved){
            color = "amber darken-4"
          }else{
            color = "amber darken-1"
          }
        }
        //capital, castle, grave
        if(field.gamepiece === "C" || field.gamepiece === "B" || field.gamepiece === "G"){
          color = "brown darken-2"
        }
      }else if (field.owner === 2){ //green player
        //tree
        if(field.gamepiece === "T"){
          color = "green darken-1"
        }
        //unit gamepiece
        if(field.gamepiece === '1' || field.gamepiece === '2' || field.gamepiece === '3' || field.gamepiece === '4'){
          if(!field.hasMoved){
            color = "light-green lighten-3"
          }else{
            color = "light-green darken-4"
          }
        }
        //capital, castle, grave
        if(field.gamepiece === "C" || field.gamepiece === "B" || field.gamepiece === "G"){
          color = "blue-grey lighten-2"
        }
      }

      if(setup) {
        return color
      }else{
        return color.replace(" ", "--text text--")
      }
    },
    updateGrid: function(grid){
      for(var i of grid){
        document.getElementById(i.toString()).className = "clickable c" + grid[i].owner // grid-item
        document.getElementById(i.toString()).children[0].children[2].children[0].className = "v-icon notranslate material-icons theme--light mdi " + this.gamepieceIcon(grid[i].gamepiece, grid[i].owner) + " " + this.gamepieceColor(grid[i])
        document.getElementById(i.toString()).children[0].children[1].style.backgroundImage = "url(" + this.fieldMap.get(grid[i].owner) + ")"
      }
    }
  },
  created: function() {
    this.websocket = new WebSocket("ws://" + this.server + "/websocket");

    this.connection.onopen = function() {
      console.log("Trying to connect to Server");
      this.conenction.send("Trying to connect to Server");
    };

    this.connection.onmessage = function(e) {
      if (typeof e.data === "string") {
        console.log('String message received: ' + e.data);

        $.each(JSON.parse(e.data), function(key, val){
          if(key === "fields"){
            //update fields
            this.updateGrid(val);
          } else if(key === "message"){
            //error message
            document.getElementById("gameMsg").innerText = val;
          } else if(key === "player"){
            //next player
            document.getElementById("playername").innerText = "It is your turn " + val.playername + "!";
            document.getElementById("playercolor").className = "v-avatar accent-4 " + val.playercolor;
          }
        });
      }
    }
  }
};
</script>
