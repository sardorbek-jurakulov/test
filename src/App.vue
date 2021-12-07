<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary">Load Blue Template</button>
                <button class="btn btn-success">Load Green Template</button>
                <button class="btn btn-danger">Load Red Template</button>
                <hr>
                <app-blue>
                  <h2>Welcome to blue element</h2>
                  <p>
                    Blue is one of the three primary colours of pigments in painting, drawing (art) and traditional colour theory, as well as in the RGB colour model. It lies between purple and green on the spectrum of visible light. The eye perceives blue when observing light with a dominant wavelength between approximately 450 and 495 nanometres. Most blues contain a slight mixture of other colours; azure contains some green, while ultramarine contains some violet. The clear daytime sky and the deep sea appear blue because of an optical effect known as Rayleigh scattering. An optical effect called Tyndall effect explains blue eyes. Distant objects appear more blue because of another optical effect called aerial perspective.
                  </p>
                  <div class="usefulness-section-wrapper">
                    <button slot="blueComponentUsefulnessButton" class="blue-component-usefulness-increaser">was helpful to me</button>
                    <span slot="blueComponentUsefulnessAmount" class="blue-component-usefulness-amount">{{ blueUsefulnessAmount }}</span>
                  </div>
                </app-blue>
                <app-green>
                  <h2>Welcome to green element</h2>
                  <p>
                    Green is the color between blue and yellow on the visible spectrum. It is evoked by light which has a dominant wavelength of roughly 495–570 nm. In subtractive color systems, used in painting and color printing, it is created by a combination of yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors. By far the largest contributor to green in nature is chlorophyll, the chemical by which plants photosynthesize and convert sunlight into chemical energy. Many creatures have adapted to their green environments by taking on a green hue themselves as camouflage. Several minerals have a green color, including the emerald, which is colored green by its chromium content.
                  </p>
                  <button>was helpful to me</button>
                  <span>{{ greenUsefulnessAmount }}</span>
                </app-green>
                <app-red>
                  <h2>Welcome to red element</h2>
                  <p>
                    Red is the color at the long wavelength end of the visible spectrum of light, next to orange and opposite violet. It has a dominant wavelength of approximately 625–740 nanometres.[1] It is a primary color in the RGB color model and a secondary color (made from magenta and yellow) in the CMYK color model, and is the complementary color of cyan. Reds range from the brilliant yellow-tinged scarlet and vermillion to bluish-red crimson, and vary in shade from the pale red pink to the dark red burgundy.
                  </p>
                  <button>was helpful to me</button>
                  <span>{{ redUsefulnessAmount }}</span>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
import Blue from './components/Blue.vue';
import Green from './components/Green.vue';
import Red from './components/Red.vue';

export default {
  data() {
    return {
      blueUsefulnessAmount: 0,
      greenUsefulnessAmount: 0,
      redUsefulnessAmount: 0,
    }
  },
  components: {
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
  }
}
</script>

<style scoped>
.usefulness-section-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
