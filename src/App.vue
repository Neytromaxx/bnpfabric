<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
  <app-sidebar></app-sidebar>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
import AppSidebar from './components/ui/AppSidebar.vue';


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter,
    AppSidebar,
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}
</style>
