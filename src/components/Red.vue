<template>
  <div class="container">
    <!-- <slot></slot>
    <slot name=""></slot>
    <slot name=""></slot> -->

    <h2>Welcome to red element</h2>
    <p>
      Red is the color at the long wavelength end of the visible spectrum of light, next to orange and opposite violet. It has a dominant wavelength of approximately 625–740 nanometres.[1] It is a primary color in the RGB color model and a secondary color (made from magenta and yellow) in the CMYK color model, and is the complementary color of cyan. Reds range from the brilliant yellow-tinged scarlet and vermillion to bluish-red crimson, and vary in shade from the pale red pink to the dark red burgundy.
    </p>
    <div class="usefulness-section-wrapper">
      <button
        @click="usefulnessAmountIncreaser('red')" 
        slot="redComponentUsefulnessButton" 
        class="red-component-usefulness-increaser"
      >was helpful to me</button>
      <span
        slot="redComponentUsefulnessAmount" 
        class="red-component-usefulness-amount"
      >{{ redUsefulnessAmount }}</span>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
/*.red-component-container {
    border: 1px solid red;
    background-color: lightcoral;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
    color: #222;
    border-radius: 10px;
    margin-bottom: 50px;
}

.red-component-usefulness-increaser {
  border: 1px solid #ffff00;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  background-color: rgba(255, 255, 0, 0.3);
}

.red-component-usefulness-increaser:hover {
  background-color: rgba(255, 255, 0, 1);
  transition: background-color ease 0.2s;
}

.red-component-usefulness-amount {
  display: inline-block;
  color: #ffff00;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
}*/

.container {
  border: 1px solid red;
  background-color: lightcoral;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
  color: #222;
  border-radius: 10px;
  margin-bottom: 50px;
}

.usefulness-increaser {
  border: 1px solid #ffff00;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  background-color: rgba(255, 255, 0, 0.3);
}

.usefulness-increaser:hover {
  background-color: rgba(255, 255, 0, 1);
  transition: background-color ease 0.2s;
}

.usefulness-amount {
  display: inline-block;
  color: #ffff00;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
}
</style>