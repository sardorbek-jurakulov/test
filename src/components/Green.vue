<template>
  <div class="container">
    <!-- <slot></slot>
    <slot name="greenComponentUsefulnessButton"></slot>
    <slot name="greenComponentUsefulnessAmount"></slot> -->

    <h2>Welcome to green element</h2>
    <p>
      Green is the color between blue and yellow on the visible spectrum. It is evoked by light which has a dominant wavelength of roughly 495–570 nm. In subtractive color systems, used in painting and color printing, it is created by a combination of yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors. By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into chemical energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content.
    </p>
    <div class="usefulness-section-wrapper">
      <button
        @click="usefulnessAmountIncreaser" 
        class="usefulness-increaser"
      >was helpful to me</button>
      <span
        class="usefulness-amount"
      >{{ usefulnessAmount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usefulnessAmount: 0,
    }
  },
  methods: {
    usefulnessAmountIncreaser() {
      this.usefulnessAmount++;
    }
  }
}
</script>

<style scoped>
/*.green-component-container {
    border: 1px solid green;
    background-color: lightgreen;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
    color: #222;
    border-radius: 10px;
    margin-bottom: 50px;
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
}*/

.container {
    border: 1px solid green;
    background-color: lightgreen;
    padding: 30px;
    margin: 20px auto;
    text-align: center;
    color: #222;
    border-radius: 10px;
    margin-bottom: 50px;
}

.usefulness-section-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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