<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-server-status-controllers></app-server-status-controllers>
            <appServerDetailes></appServerDetailes>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import ServerStatusControllers from "./components/Server/ServerStatusControllers.vue";
import ServerDetailes from './components/Server/ServerDetailes.vue';
export default {
  components: {
    'app-server-status-controllers': ServerStatusControllers,
    appServerDetailes: ServerDetailes
  }
}
</script>

<style>

</style>
