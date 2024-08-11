<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-logo">
          <img src="../assets/logo.png" alt="">
      </div>
      <div class="navbar-list">
          <ul>
              <li class="hideOnMobile"><router-link to="/" class="links">Home</router-link> </li>
              <li class="hideOnMobile"><router-link to="/collection" class="links">Collection</router-link> </li>
              <li class="hideOnMobile"><router-link to="/about" class="links">About us</router-link> </li>
              <li class="hideOnMobile"><router-link to="/contact" class="links">Contact</router-link> </li>
          </ul>
      </div>
      <button class="sidebar hideOnDesk" @click="open"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
    </div>
    <div class="cleaner"></div>
  </div>
</template>

<script>
import {useStore} from "vuex"
export default {
  setup(){
    const store = useStore()

    return{
      open : ()=>{
        store.commit('setSidebar')
      }
    }
  }
}
</script>

<style scoped>
  .cleaner{
    clear: both;
  }
  .container{
    max-width: 1450px;
    height: 60px;
    margin: 0 auto;
    /* border: 2px solid red; */
  }
  .navbar{
    display: flex;
    align-items: center;
  }
  .navbar-logo{
    width: 150px;
  }
  .navbar-logo img{
    width: 150px;
    height: 35px;
  }
  .navbar-list ul{
    list-style: none;
  }
  .navbar-list ul li{
    float: left;
    font-size: 14px;
    margin-right: 25px;
  }
  .links{
    text-decoration: none;
    color: #454343;
    font-size: 16px;
  }
  .sidebar{
      background-color: transparent;
      outline: none;
      border: none;
    }

  @media (max-width: 767px) {
    .hideOnMobile{
      display: none;
    }

  }
  @media screen and (min-width: 767px) {
    .hideOnDesk{
      display: none;
    }
  }


  @media (max-width: 450px) {
    .container{
      width: 450px;
      max-width: 90%;
      margin: 0 auto;
    }
    .navbar-logo{
      width: 170px;
      margin-top: 5px;
    }
    .navbar-logo img{
      max-width: 100%;
    }
  }
</style>