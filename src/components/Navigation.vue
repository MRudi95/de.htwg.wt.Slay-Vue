<template>
  <span>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title><b>Slay</b> - G17</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped app>
      <template v-slot:prepend>
        <v-list-item two-line style="padding-top: 2rem;">
          <v-list-item-avatar
            ><img src="../assets/htwg.png"
          /></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>HTWG</v-list-item-title>
            <v-list-item-subtitle>Web Technologies</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list-item to="/about">
        <v-list-item-content>
          <v-list-item-title>About / Help</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/undo">
        <v-list-item-content>
          <v-list-item-title>Undo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/redo">
        <v-list-item-content>
          <v-list-item-title>Redo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="redirect">
        <v-list-item-content>
          <v-list-item-title>Go to Original Game</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    redirect: function() {
      window.location.href = "http://www.windowsgames.co.uk/slay.html";
    }
  },
  data() {
    return {
      drawer: true
    };
  }
};
</script>
