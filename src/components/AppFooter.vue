<template>
  <div class="container">
    <div class="elements">
      <div class="elements-items">
        <img src="../assets/logo.png">
        <p>'Bukhara Natural Product' has been a company that produces cotton fabrics for many years for use all over the world.</p>
      </div>
      <div class="elements-items">
        <h4 class="h5">Menu</h4>
        <ul class="menu-item">
          <li class="menu-items"><a href="#">Home</a></li>
          <li class="menu-items"><a href="#">About us</a></li>
          <li class="menu-items"><a href="#">Collection</a></li>
          <li class="menu-items"><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="elements-items">
        <h4 class="h5">Contacts</h4>
        <ul class="contact-item">
          <li class="contact-items">Bukhara, st. Alpomysh 80.</li>
          <li class="contact-items">Bnpuz@bk.ru</li>
          <li class="contact-items">bnp_fabrik</li>
          <li class="contact-items">info@bnpfabric.com</li>
          <li class="contact-items">+998 93 383 75 85</li>
          <li class="contact-items">+998 93 960 78 00</li>
        </ul>
      </div>
      <div class="elements-items inputs">
        <h4>Subscribe to our email</h4>
        <input type="email" name="" id="email" placeholder="Enter your email">
        <input type="submit" value="Subscribe" class="submit">
      </div>
    </div>
    <div class="cleaner"></div>
  </div>
  <div class="copyright">
    <p>&copy; 2024 LLC "BUKHARA NATURAL PRODUCT". All rights reserved.</p>
  </div>
  <div class="cleaner"></div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container{
    margin: 0 auto;
    max-width: 1400px;
    /* border: 2px solid black; */
  }
  .cleaner{
    clear: both;
  }
  .elements-items{
    width: 330px;
    float: left;
    text-align: left;
  }
  .elements-items img{
    width: 250px;
    margin-top: 20px;
  }
  .elements-items .h5{
    width: 250px;
    padding-left: 40px;
  }
  .elements-items p{
    width: 250px;
  }
  .elements-items ul{
    list-style: none;
  }
  .menu-items{
    margin-top: 5px;
  }
  .menu-items a{
    text-decoration: none;
    color: #525252;
  }
  .menu-items a:hover{
    text-decoration: none;
    color: #f42c37;
  }
  .inputs{
    position: relative;
  }
  #email{
    width: 420px;
    height: 45px;
    padding-left: 25px;
    border: 1px solid #f5f5f5;
    outline: none;
    border-radius: 1.6rem;
    background: linear-gradient(to right, #f5f5f5, #9a9797) ;
    color: #525252;
  }
  .inputs .submit{
    width: 160px;
    height: 40px;
    position: absolute;
    top: 64px;
    left: 280px;
    border: 1px solid #f42c37;
    border-radius: 1.4rem;
    background-color: #f42c37;
    color: #fce4e5;
    cursor: pointer;
  }
  .copyright{
    max-width: 100%;
    height: 60px;
    margin-top: 25px;
    border: 1px solid #000;
    background-color: #000;
    color: #8c8b8b;
  }
  .copyright p{
    width: 1400px;
    margin: 0 auto;
    line-height: 60px;
    text-align: left;
  }

@media (max-width: 451px) {
  .container{
    width: 450px;
    max-width: 100%;
  }
  .cleaner{
    clear: both;
  }
  .elements-items{
    text-align: left;
  }
  .copyright{
    max-width: 100%;
    font-size: 12px;
    padding-left: 10px;
  }
}

</style>