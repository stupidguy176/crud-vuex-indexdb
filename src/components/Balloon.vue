<template>
  <div id="app">
    <h3>Parent Component</h3>
    <img width="25%" src="@/assets/logo.png" /> <br />
    <p>Parent data is : {{ parentData }}</p>
    <SampleBalloon :inputData.sync="parentData" />
  </div>
</template>

<script>
import SampleBalloon from "@/components/Sample/SampleBalloon.vue";

export default {
  name: "Balloon",
  data: function() {
    return {
      parentData: "Jithil"
    };
  },
  components: {
    SampleBalloon
  }
};
</script>

<style lang="scss" scoped>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
    border: 2px solid white;
    margin-left: 20px;
    p {
        color: white;
    }
}
</style>
