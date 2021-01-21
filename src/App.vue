<template>
  <span>
    <v-app>
      <navigation></navigation>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </span>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
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
