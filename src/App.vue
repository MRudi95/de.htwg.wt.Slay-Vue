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

export default {
  name: "App",

  components: {
    Navigation,
    Main
  }
};
</script>
