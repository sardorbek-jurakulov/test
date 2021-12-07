<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li @click="elementSelector" class="list-group-item" v-for="index in servers" :key="index.id">
                Server #{{ index.id }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    servers: {
      type: Array,
      required: true
    },
    selectedElementId: {
      type: Number,
      required: true
    }
  },
  methods: {
    elementSelector(env) {
      this.selectedElementId = env.target.value;
      console.log(this.selectedElementId);
    }
  }
}
</script>

<style>

</style>
