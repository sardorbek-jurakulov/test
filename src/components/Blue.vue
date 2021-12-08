<template>
  <div class="container">
    <!-- <slot></slot>
    <slot name="blueComponentUsefulnessButton"></slot>
    <slot name="blueComponentUsefulnessAmount"></slot> -->

    <h2>Welcome to blue element</h2>
    <p>
      Blue is one of the three primary colours of pigments in painting, drawing (art) and traditional colour theory, as well as in the RGB colour model. It lies between purple and green on the spectrum of visible light. The eye perceives blue when observing light with a dominant wavelength between approximately 450 and 495 nanometres. Most blues contain a slight mixture of other colours; azure contains some green, while ultramarine contains some violet. The clear daytime sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. An optical effect called Tyndall effect explains blue eyes. Distant objects appear more blue because of another optical effect called aerial perspective.
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
      usefulnessAmount: 0
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
/*.blue-component-container {
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
}*/

.container {
    border: 1px solid blue;
    background-color: lightblue;
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