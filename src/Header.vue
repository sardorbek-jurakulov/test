<template>
  <div class="row">
      <div class="col-xs-12">
          <header>
              <h1>{{ sectionHeading }}</h1>
          </header>
      </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return  {
        sectionHeading: 'Server Status'
      }
    } 
  }
</script>