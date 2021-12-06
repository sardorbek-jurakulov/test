<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>User Age: {{ userAge }}</p>
        <p>Edit me!</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: {
    userAge: {
      type: Number,
      default: 0
    },
  },
  methods: {
    editAge() {
      this.userAge = 24;
      // this.$emit('ageWasEdited', this.userAge);
      eventBus.$emit('ageWasEdited', this.userAge);
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
