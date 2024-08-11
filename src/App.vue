<template>
  <app-navbar></app-navbar>
  <router-view></router-view>
  <app-footer></app-footer>
  <app-sidebar></app-sidebar>
  <div class="lang-selector">
    <select name="lang" id="lang">
      <option value="Polish">Polish</option>
      <option value="Russian">Russian</option>
      <option value="Uzbek">Uzbek</option>
      <option value="English" selected>English</option>
    </select>
  </div>
  <div class="tg-cnt-img">
    <a href="https://telegram.me/Bukharanaturalproduct" target="_blank" rel="noopener noreferrer">
      <img src="./assets/telegram.png" alt="">
    </a>
  </div>
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
.lang-selector{
  position: fixed;
  top: 1px;
  right: 150px;
}
#lang{
  font-size: 18px;
  padding: 5px;
  width: 120px;
}
.tg-cnt-img{
  position: fixed;
  right: 50px;
  bottom: 15px;
}
.tg-cnt-img img{
  width: 80px;
}
</style>
