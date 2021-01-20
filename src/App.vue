<template>
  <span>
    <v-app>
      <navigation></navigation>
      <v-main>
        <Main></Main>
      </v-main>
    </v-app>
  </span>
</template>

<script>
import Navigation from "./components/Navigation";
import Main from "./components/Main";

export default {
  name: "App",
  components: {
    Navigation,
    Main
  },
  data: function() {
    return {
      websocket: null
    };
  },
  methods: {
    async accept() {
      this.showUpgradeUI = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  created: function() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.showUpgradeUI = true;
      });
    }
  }
};
</script>
