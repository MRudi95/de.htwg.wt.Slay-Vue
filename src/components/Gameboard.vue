<template>  
  <v-container class="grid-container grey lighten-5" mt-10>
    <div v-for="(value, index) in fields" :key="index" :id="index">
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card tile :color="playerMap[value.owner]">
            <v-img max-width="4vw" min-width="40" :src="fieldMap.get(value.owner)" style="display: flex; align-items: center;">
              <v-icon :color="gpColor(value)" x-large style="display: flex; justify-content: center;">
                {{ gamepieceIcon(value.gamepiece, value.owner) }}
              </v-icon>
            </v-img>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn v-on:click="coordClick(index)">{{ getIndex(index) }}</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
    </div>
  </v-container>
 
</template>

<script>
export default {
  name: "Gameboard",
  data() {
    return {
      playerMap: ["cyan", "yellow", "green"],
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
        ["4", "mdi-alien"],
      ]),
      fieldMap: new Map([
        [2, 'https://cdn.discordapp.com/attachments/766231770445512715/786534037024014336/ryan-o-connor-tileable-grass.png'],
        [1, 'https://cdn.discordapp.com/attachments/766231770445512715/786534077545185300/dbwm528-78b11079-6ce9-4182-9166-d6c07af7d494.png'],
        [0, 'https://cdn.discordapp.com/attachments/766231770445512715/786534055566376990/f1a7ed42b092b013089dafb1774ef2ea.png']
      ]),
      colorMap: new Map([
        //keys are gamepiece (T,C,B,G) + owner (0,1,2)
        [" 0", "transparent"],
        ["T1", "green darken-4"],
        [" 1", "brown darken-2"],
        ["C1", "brown darken-2"],
        ["B1", "brown darken-2"],
        ["G1", "brown darken-2"],
        ["T2", "green darken-1"],
        [" 2", "blue-grey lighten-2"],
        ["C2", "blue-grey lighten-2"],
        ["B2", "blue-grey lighten-2"],
        ["G2", "blue-grey lighten-2"],
        //keys for units are owner(1,2) + M (for has Moved) or A (for available to move)
        ["1A", "amber darken-4"],
        ["1M", "amber darken-1"],
        ["2A", "light-green lighten-3"],
        ["2M", "light-green darken-4"],
      ]),
    };
  },
  methods: {
    gamepieceIcon: function(gamepiece, owner) {
      if (gamepiece === "T") {
        return this.pieceMap.get(gamepiece + owner);
      } else {
        return this.pieceMap.get(gamepiece);
      }
    },
    gpColor: function(field) {
      let color = this.colorMap.get(field.gamepiece + field.owner); //for gamepieces C,B,G,T and no gamepiece
      if(color === undefined){
        color = this.colorMap.get(field.owner + (field.hasMoved ? "M" : "A")) //for gamepieces 1,2,3,4
      }
      return color;
    },
    getIndex: function(idnumber){
      let colidx = String.fromCharCode(idnumber % (this.columns) + 65);
      let rowIdx = Math.floor(idnumber / (this.columns)) + 1
      return colidx + rowIdx;
    },
    coordClick: function(idx){
      const newCoord = this.getIndex(idx);
      console.log("CLICKED " + newCoord);
      if(this.$store.state.coord0 === ""){
        this.$store.commit("SET_COORD0", newCoord)
      }else if(this.$store.state.coord1 === "" && this.$store.state.coord0 != newCoord){
        this.$store.commit("SET_COORD1", newCoord)
      }else{
        this.$store.commit("SET_COORD0", newCoord)
        this.$store.commit("SET_COORD1", "")
      }
    },
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

<style scoped>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    width: 64vw;
  }
</style>
