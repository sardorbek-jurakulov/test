<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server-status-controllers></app-server-status-controllers>
            <app-server-detailes></app-server-detailes>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import ServerStatusControllers from "./components/ServerStatusControllers.vue";
import ServerDetailes from './components/ServerDetailes.vue';
export default {
  components: {
    'app-server-status-controllers': ServerStatusControllers,
    'app-server-detailes': ServerDetailes
  }
}
</script>

<style>

</style>
