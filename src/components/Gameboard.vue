<template>
  <div>{{ grid }}</div>
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
  computed: {
    grid() {
      return this.$store.state.grid;
    }
  },
  mounted() {
    this.$store.dispatch("getData");
  }
};
</script>

<style scoped></style>
