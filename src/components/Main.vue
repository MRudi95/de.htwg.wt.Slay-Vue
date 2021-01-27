<template>
  <span>
    <v-col cols="12" class="py-2">
      <v-btn-toggle tile color="deep-purple accent-3" group borderless>
        <v-btn v-on:click="buy" value="left">
          <v-icon left>
            mdi-currency-usd
          </v-icon>
          <span class="hidden-sm-and-down">Buy</span>
        </v-btn>
        <v-btn v-on:click="combine" value="center">
          <v-icon left>
            mdi-vector-combine
          </v-icon>
          <span class="hidden-sm-and-down">Combine</span>
        </v-btn>
        <v-btn v-on:click="move" value="center">
          <v-icon left>
            mdi-arrow-right
          </v-icon>
          <span class="hidden-sm-and-down">Move</span>
        </v-btn>
        <v-btn v-on:click="castle" value="center">
          <v-icon left>
            mdi-castle
          </v-icon>
          <span class="hidden-sm-and-down">Castle</span>
        </v-btn>
        <v-btn v-on:click="balance" value="center">
          <v-icon left>
            mdi-pig
          </v-icon>
          <span class="hidden-sm-and-down">Balance</span>
        </v-btn>
        <v-btn v-on:click="endturn" value="center">
          <v-icon left>
            mdi-clock
          </v-icon>
          <span class="hidden-sm-and-down">End Turn</span>
        </v-btn>
        <v-btn v-on:click="surrender" value="right">
          <v-icon left>
            mdi-exit-run
          </v-icon>
          <span class="hidden-sm-and-down">Surrender</span>
        </v-btn>
      </v-btn-toggle>
    </v-col>

    <v-banner two-line>
      <v-alert dense type="info" id="gameMsg">{{ message }} </v-alert>
    </v-banner>
    <template v-slot:actions>
      <v-btn
        text
        color="primary"
        id="coord0"
        v-on:click="coord0Click"
        v-show="coord0Show"
        >{{ coord0 }}</v-btn
      >
      <v-btn
        text
        color="primary"
        id="coord1"
        v-on:click="coord1Click"
        v-show="coord1Show"
        >{{ coord1 }}</v-btn
      >
    </template>
    <gameboard></gameboard>
  </span>
</template>

<script>
import Gameboard from "./Gameboard";
import axios from "axios";

export default {
  name: "Main",
  components: {
    Gameboard
  },
  methods: {
    buy: function() {
      this.sendCommand(`/buy/${this.coord0}`);
    },
    combine: function() {
      this.sendCommand(`/cmb/${this.coord0}/${this.coord1}`);
    },
    move: function() {
      this.sendCommand(`/mov/${this.coord0}/${this.coord1}`);
    },
    castle: function() {
      this.sendCommand(`/plc/${this.coord0}`);
    },
    balance: function() {
      this.sendCommand(`/bal/${this.coord0}`);
    },
    endturn: function() {
      this.sendCommand("/end");
    },
    surrender: function() {
      if (confirm("Are you sure you want to surrender?"))
        this.sendCommand("/ff20");
    },

    sendCommand: function(commandstring) {
      axios
        .get("https://" + this.$store.state.serverUrl + commandstring)
        .then(response => {
          console.log(commandstring + ": " + response.statusText);
        });
    },
    coord0Click: function() {
      this.$store.commit("SET_COORD0", "");
    },
    coord1Click: function() {
      this.$store.commit("SET_COORD1", "");
    }
  },
  computed: {
    coord0() {
      return this.$store.state.coord0;
    },
    coord1() {
      return this.$store.state.coord1;
    },
    coord0Show() {
      return this.coord0 != "";
    },
    coord1Show() {
      return this.coord1 != "";
    },

    message() {
      return this.$store.state.msg;
    },
    playerName() {
      return this.$store.state.playername;
    },
    playerColor() {
      return this.$store.state.playercolor;
    }
  }
};
</script>

<style scoped>
#gameMsg {
  color: #333;
}
</style>
