<template>
  <v-container mt-10>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in faq" :key="i">
        <v-expansion-panel-header>
          {{ item.question }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ item.answer }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      faq: [
        {
          question: "Ist der Quellcode open-source?",
          answer: "Ja zu finden auf: https://github.com/MRudi95/de.htwg.wt.Slay"
        },
        {
          question: "Wo findet sich das Original?",
          answer: "Auf: http://www.windowsgames.co.uk/slay.html"
        }
      ]
    };
  }
};
</script>
