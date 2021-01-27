<template>
  <span>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        style="font-family: 'Megrim', cursive;font-size:3rem;"
        >Play Slay</v-toolbar-title
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped app>
      <v-list-item to="/">
         <v-list-item-content>
             <v-card
                 elevation="2"
             >
    <span id="animate-area" style="padding:2rem;display:block;">{{ playerName }}</span>
             </v-card>
         </v-list-item-content>
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
          <p style="text-align: center;padding-top:1rem; color: #666;">
            Invite your friends to this lobby:
          </p>
          <h1 style="text-align:center;padding-top:1rem;">{{ code }}</h1>
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
    },
    playerName() {
      return this.$store.state.playername;
    },
  }
};
</script>

<style>
@keyframes animatedBackground {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
#animate-area {
  color: #fff;
  height: 180px;
  background-image: url(https://cdn.dribbble.com/users/1459160/screenshots/4113346/unbenannt-2a.gif);
  background-position: 50px 0px;
  background-repeat: repeat-x;
  animation: animatedBackground 10s linear infinite alternate;
}
</style>
