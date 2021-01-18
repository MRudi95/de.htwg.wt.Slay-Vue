<template>
  <div class="grid-container">
    <div v-for="idx in colSize" class="grid-item c0" style="background: #343a40; color: #fff;" :key="idx.id">{{colIdx(idx)}}</div>
    <div v-for="(value, index) in grid" :id="index" :class="[playerClass(value.owner)]" :key="value.id" class="clickable ">
      <v-img max-width="4vw" min-width="40" :src="fieldImage(value.owner)" style="display: flex; align-items: center;">
        <v-icon :color="gpColor(value)" x-large style="display: flex; justify-content: center;">
          {{gp(value.gamepiece, value.owner)}}
        </v-icon>
      </v-img>
    </div>
  </div>
</template>

<script>
//import $ from "jquery";
import axios from 'axios';

export default {
  name: "Gameboard",
  methods: {
    updateStore: function(result) {
      this.$store.state.colSize = result.colIdx;
      this.$store.state.rowSize = result.rowIdx;
      this.$store.state.firstGrid = result.fields;
      this.$store.state.firstPlayer = result.player.playername;
      this.$store.state.firstPlayerColor = result.player.playercolor;
    }
  },
  created: function(){
    console.log(this.$store.state.server)
    axios.get('http://' + this.$store.state.server + '/json').then(response => {
      console.log(response.data)
      this.updateStore(response.data)
    }).catch(e => {
      console.log(e)
    })
    /*
    $.ajax({
      method: "GET",
      url: "http://" + this.$store.state.server + "/json",
      dataType: "json",
      async: false,
      success: function(result){
        // console.log("get /json:" + JSON.stringify(result))
        this.updateStore(result)
      }
    });
     */
  }
}
</script>

<style scoped>
</style>