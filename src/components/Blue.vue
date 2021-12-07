<template>
    <div class="blue-component-container">
      <slot></slot>
      <slot name="blueComponentUsefulnessButton"></slot>
      <slot name="blueComponentUsefulnessAmount"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
.blue-component-container {
    border: 1px solid blue;
    background-color: lightblue;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
    color: #222;
    border-radius: 10px;
    margin-bottom: 50px;
}

.blue-component-usefulness-increaser {
  border: 1px solid #ffff00;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  background-color: rgba(255, 255, 0, 0.3);
}

.blue-component-usefulness-increaser:hover {
  background-color: rgba(255, 255, 0, 1);
  transition: background-color ease 0.2s;
}

.blue-component-usefulness-amount {
  display: inline-block;
  color: #ffff00;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
}
</style>