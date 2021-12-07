<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <p>You have selected: <b>{{selectedTechnology}}</b> technology</p>
    </div>

</template>

<script>
export default {
  props: {
    selectedTechnology: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
