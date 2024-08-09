<template>
  <div class="navbar">
    <div class="navbar-logo">
        <img src="../assets/logo.png" alt="">
    </div>
    <div class="navbar-list">
        <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .navbar{
    max-width: 1450px;
    height: 60px;
    margin: 0 auto;
    /* border: 2px solid red; */
  }
  .navbar-logo{
    width: 150px;
    float: left;
    margin-left: 10px;
  }
  .navbar-logo img{
    width: 150px;
    height: 35px;
  }
  .navbar-list{
    float: left;
  }
  .navbar-list ul{
    list-style: none;
    float: right;
  }
  .navbar-list ul li{
    float: left;
    font-size: 14px;
    margin-right: 25px;
  }
</style>