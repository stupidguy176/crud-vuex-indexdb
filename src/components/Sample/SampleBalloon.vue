<template>
  <div class="child-component">
    <h3>Child Component</h3>
    <input
      type="text"
      v-model="inputData"
      @keyup="$emit('update:inputData', inputData);"
    />
    <p>Child data is: {{ inputData }}</p>
  </div>
</template>
<script>
export default {
  name: "SampleBalloon",
  props: {
    inputData: String
  }
};
</script>
<style lang="scss" scoped>
.child-component {
  border: 2px solid gray;
  padding: 16px;
  margin: 16px;
  p {
      color: white;
      padding: 10px;
  }
  h3 {
      color: white;
  }
}
</style>