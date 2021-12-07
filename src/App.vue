<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                <h2 slot="title">The Quote</h2>
                <p slot="content">{{ quoteText }}</p>
               </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
import Quote from "./components/Quote.vue"
export default {
  data() {
    return {
      quoteText: 'A wonderful Quote!!!'
    }
  },
  components: {
    appQuote: Quote,
    appAuther,
    appNew,
  }
}
</script>

<style scoped>
  h2 {
    color: green;
  }
</style>
