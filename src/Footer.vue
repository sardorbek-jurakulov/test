<template>
  <div class="row">
      <div class="col-xs-12">
          <footer>
              <p>{{ sectionFooter }}</p>
          </footer>
      </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        sectionFooter: 'All Servers are managed here'
      }
    }
  }
</script>