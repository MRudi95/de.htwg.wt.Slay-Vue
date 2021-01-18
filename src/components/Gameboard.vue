<template>
 <span>
   {{ grid}}
 </span>
</template>

<script>
//import $ from "jquery";

export default {
  name: "Gameboard",
  computed: {
    grid() {
      return this.$store.state.grid
    }
  },
  mounted() {
    this.$store.dispatch("getData")
  }
  /*
created: function(){
console.log(this.$store.state.server)
axios.get('http://' + this.$store.state.server + '/json').then(response => {
  console.log(response.data)
  this.updateStore(response.data)
}).catch(e => {
  console.log(e)
})

$.ajax({
  method: "GET",
  url: "http://" + this.$store.state.server + "/json",
  dataType: "json",
  async: false,
  success: function(result){
    // console.log("get /json:" + JSON.stringify(result))
    this.updateStore(result)
  }
});

}
 */
}
</script>

<style scoped>
</style>