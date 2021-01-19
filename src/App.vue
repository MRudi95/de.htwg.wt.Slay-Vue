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
import $ from "jquery";

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
    this.websocket = new WebSocket(
      "ws://" + this.$store.state.serverUrl + "/websocket"
    );

    this.websocket.onopen = function() {
      console.log("[WS] Opening websocket to server ..");
      this.send("SYN");
    };

    this.websocket.onmessage = function(e) {
      if (typeof e.data === "string") {
        console.log("[WS] Server received: " + e.data);

        try {
          $.each(JSON.parse(e.data), function(key, val) {
            if (key === "fields") {
              //update fields
              // this.updateGrid(val);
            } else if (key === "message") {
              //error message
              document.getElementById("gameMsg").innerText = val;
            } else if (key === "player") {
              //next player
              document.getElementById("playername").innerText =
                "It is your turn ";
              document.getElementById("playercolor").className =
                "v-avatar accent-4 ";
            }
          });
        } catch (e) {
          console.log("[WS] Got a non-JSON object back ..");
        }
      }
    };
  }
};
</script>
