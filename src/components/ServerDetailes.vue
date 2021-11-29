<template>
  <div class="col-xs-12 col-sm-6">
    <p>{{ serverStatusDetail }}</p>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        serverStatusDetail: 'Server Details are currently not updated'
      }
    }
  }
</script>