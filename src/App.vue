<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers 
              :servers="servers" 
              :selectedElementId="selectedElementId"
              @selectedElementIdHaveChanged="selectedElementId = $event"
            ></servers>
            <app-server-details
              :selectedTechnology="selectedTechnology"
            ></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/Shared/Header.vue';
import Footer from './components/Shared/Footer.vue';
import Servers from './components/Server/Servers.vue';
import ServerDetails from './components/Server/ServerDetails.vue';

export default {
  data() {
    return {
      servers: [
        {id: 1, technology: "Python"},
        {id: 2, technology: "JavaScript"},
        {id: 3, technology: "PHP"},
        {id: 4, technology: "Rust"},
        {id: 5, technology: "Golang"},
        {id: 6, technology: "Flutter"},
        {id: 7, technology: "Java"},
        {id: 8, technology: "C++"},
        {id: 9, technology: "C#"},
        {id: 10, technology: "Ruby"},
      ],
      selectedElementId: 0,
      selectedTechnology: '',
    }
  },
  watch: {
    selectedElementId() {
      this.selectedTechnology = this.selectedTechnologyNameFinder(this.selectedElementId)
    }
  },
  components: {
      appHeader: Header,
      Servers,
      'app-server-details': ServerDetails,
      'app-footer': Footer
  },
  methods: {
    selectedTechnologyNameFinder(technologyId) {
      for(let i = 0; i < this.servers.length; i++) {
        if(this.servers[i].id === technologyId) {
          return this.servers[i].technology;
        }
      }
      return '';
    }
  },
}
</script>

<style>

</style>
