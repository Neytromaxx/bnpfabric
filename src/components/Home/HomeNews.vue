<template>
  <div class="container">
    <div class="header">
      <h1>News</h1>
      <p>Bukhara Natural Product</p>
    </div>
    <div class="section">
        <ul class="list">
            <li class="list-items">
                <a href="">
                    <img src="../../assets/new-st.png" alt="">
                    <div class="text">
                        <p>05.10.2019 - by admin</p>
                        <h2>How to choose perfect gadgets</h2>
                        <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...</p>
                    </div>
                </a>
            </li>
            <li class="list-items">
                <a href="">
                    <img src="../../assets/news-nd.png" alt="">
                    <div class="text">
                        <p>05.10.2019 - by admin</p>
                        <h2>How to choose perfect gadgets</h2>
                        <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...</p>
                    </div>
                </a>
            </li>
            <li class="list-items">
                <a href="">
                    <img src="../../assets/news-rd.png" alt="">
                    <div class="text">
                        <p>05.10.2019 - by admin</p>
                        <h2>How to choose perfect gadgets</h2>
                        <p>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .container{
      margin: 0 auto;
      max-width: 1450px;
      /* border: 2px solid black; */
  }
  .cleaner{
      clear: both;
  }
  .header{
      margin-top: 60px;
      line-height: 10px;
      text-align: center;
  }

  .section{
      width: 1450px;
      height: 550px;
      margin-top: 35px;
  }
  .section .list{
      list-style: none;
  }
  .section .list .list-items{
      float: left;
      width: 430px;
      margin-right: 25px;
  }
  .section .list .list-items:hover img{
    box-shadow: 0 10px 12px 0 rgba(0, 0, 0, 0.52), 0 10px 20px 0 rgba(0, 0, 0, 0.49);
  }
  .section .list a{
      text-decoration: none;
      color: #000;
      text-align: left;
  }
  .section .list a img{
    width: 430px;
    border: none;
    border-radius: 1rem;
  }
  .section .list a h2{
    font-size: 22px;
    letter-spacing: -1px;
  }
  .section .list a p{
    width: 250px;
    font-size: 16px;
    letter-spacing: -1px;
  }
@media (max-width: 451px) {
    .container{
        width: 450px;
        max-width: 90%;
        margin: 0 auto;
    }
    .header{
        text-align: center;
    }
    .section{
        max-width: 100%;
    }
    .list-items img{
        max-width: 80%;
    }

}
</style>