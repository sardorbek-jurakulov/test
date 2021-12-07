<template>
    <div class="green-component-container">
      <slot></slot>
      <slot name="greenComponentUsefulnessButton"></slot>
      <slot name="greenComponentUsefulnessAmount"></slot>
    </div>
</template>

<script>

</script>

<style scoped>
.green-component-container {
    border: 1px solid green;
    background-color: lightgreen;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
    color: #222;
}

.green-component-usefulness-increaser {
  border: 1px solid #ffff00;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  background-color: rgba(255, 255, 0, 0.3);
}

.green-component-usefulness-increaser:hover {
  background-color: rgba(255, 255, 0, 1);
  transition: background-color ease 0.2s;
}

.green-component-usefulness-amount {
  display: inline-block;
  color: #ffff00;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
}
</style>