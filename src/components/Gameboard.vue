<template>
  <v-container class="grey lighten-5" mt-10>
    <!--<v-col v-for="head in columns" :key="head">{{colIdx(head)}}</v-col>-->
    <v-row v-for="row in 1" :key="row" no-gutters>
      <v-col v-for="(value, index) in fields" :id="index" :key="index">
        <v-card class="pa-2" outlined tile :color=playerMap[value.owner]>
          <v-icon x-large style="display: flex; justify-content: center;">
            {{gp(value.gamepiece, value.owner)}}
          </v-icon>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!--
  <div class="grid-container">
    <div v-for="idx in colSize" :key="idx" class="grid-item c0" style="background: #343a40; color: #fff;">{{colIdx(idx)}}</div>
    <div v-for="(value, index) in grid" :key="index" :id="index" :class="[playerClass(value.owner)]" class="clickable ">
      <v-img max-width="4vw" min-width="40" :src="fieldImage(value.owner)" style="display: flex; align-items: center;">
        <v-icon :color="gpColor(value)" x-large style="display: flex; justify-content: center;">
          {{gp(value.gamepiece, value.owner)}}
        </v-icon>
      </v-img>
    </div>
  </div>
  -->
</template>

<script>
export default {
  name: "Gameboard",
  data() {
    return {
      playerMap: ["cyan", "red", "lime", "cyan"],
      pieceMap: new Map([
        [" ", "mdi-circle-small"],
        ["T1", "mdi-palm-tree"],
        ["T2", "mdi-pine-tree"],
        ["C", "mdi-home"],
        ["B", "mdi-castle"],
        ["G", "mdi-grave-stone"],
        ["1", "mdi-account"],
        ["2", "mdi-account-multiple"],
        ["3", "mdi-account-group"],
        ["4", "mdi-alien"]
      ])
    };
  },
  methods: {
    colIdx: function(index) {
      return String.fromCharCode(index + 64);
    },
    gamepieceIcon: function(gamepiece, owner) {
      if (gamepiece === "T") {
        return this.pieceMap.get(gamepiece + owner);
      } else {
        return this.pieceMap.get(gamepiece);
      }
    },
    gp: function(gp, owner) {
      return this.gamepieceIcon(gp, owner);
    }
  },
  computed: {
    rows() {
      return this.$store.state.grid.rowIdx;
    },
    columns() {
      return this.$store.state.grid.colIdx + 1;
    },
    fields() {
      return this.$store.state.grid.fields;
    }
  },
  mounted() {
    this.$store.dispatch("getData");
  }
};
</script>

<style scoped></style>
