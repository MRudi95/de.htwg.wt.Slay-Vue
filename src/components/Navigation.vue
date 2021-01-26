<template>
  <span>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title><b>Slay</b> - G17</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped app>
        <v-list-item two-line to="/" >

            <img src="../assets/slay_logo.png" style="padding: 2rem;max-width:100%;">

        </v-list-item>
      <v-divider></v-divider>
      <v-list-item to="/about">
        <v-list-item-content>
          <v-list-item-title>About / FaQ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item to="/signOut">
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-item-content>
          <p style="text-align: center;padding-top:1rem; color: #666;">Invite your friends to this lobby:</p>
          <h1 style="text-align:center;padding-top:1rem;">{{code}}</h1>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </span>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      drawer: true
    };
  },
  computed: {
    code: function() {
      return this.$store.state.code;
    }
  }
};
</script>
