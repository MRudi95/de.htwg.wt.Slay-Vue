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
      <v-avatar
        slot="icon"
        color="black"
        size="40"
        id="playercolor"
      >
        <v-icon icon="mdi-gamepad-variant" color="white">
          mdi-gamepad-variant
        </v-icon>
      </v-avatar>

      <span id="gameMsg">Waiting for player to start ..</span>

      <span id="playername"></span>
      <template v-slot:actions>
        <v-btn text color="primary" id="coord0"></v-btn>
        <v-btn text color="primary" id="coord1"></v-btn>
      </template>
    </v-banner>

    <gameboard></gameboard>
  </span>
</template>

<script>
import Gameboard from "./Gameboard";

export default {
  name: "Main",
  components: {
    Gameboard
  },
  methods: {
    buy: function() {
      alert(1);
    },
    combine: function() {},
    move: function() {},
    castle: function() {},
    balance: function() {},
    endturn: function() {},
    surrender: function() {}
  }
};
</script>

<style scoped>
#gameMsg {
  color: #333;
}
</style>
