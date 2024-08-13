<template>
    <div class="container">
      <div class="header">
          <h1>Autumn collection</h1>
          <p>Bukhara Natural Product</p>
      </div>
      <div class="section">
        <div class="list">
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-squares.jpg" alt="">
                    <div class="text">
                        <p>Squares</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-ikat.jpg" alt="">
                    <div class="text">
                        <p>Ikat</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-circles.jpg" alt="">
                    <div class="text">
                        <p>Circles</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-geometry--blue.jpg" alt="">
                    <div class="text">
                        <p>Geometry blue</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-tropical--leaves.jpg" alt="">
                    <div class="text">
                        <p>Tropical leaves</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-bambi.jpg" alt="">
                    <div class="text">
                        <p>Bambi</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-byzantiyum.jpg" alt="">
                    <div class="text">
                        <p>Byzantium</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-evening.jpg" alt="">
                    <div class="text">
                        <p>Evening garden</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-feather--marqius.jpg" alt="">
                    <div class="text">
                        <p>Feather Marquis</p>
                    </div>
                </router-link>
            </div>
            <div class="list-items">
                <router-link to="product/squares">
                    <img src="../../assets/winter-lavender-roses.jpg" alt="">
                    <div class="text">
                        <p>Lavender roses</p>
                    </div>
                </router-link>
            </div>
        </div>
      </div>
      <div class="cleaner"></div>
      <div class="last-element">
          <div class="last-element-left">
              <p class="text-100"><b>100%</b></p>
              <p class="text">Material quality</p>
          </div>
          <img src="../../assets/main-page-img-th.png" alt="">
          <div class="last-element-right">
              <h2>'Bukhara Natural Product'</h2>
              <p>has been a company that produces cotton fabric for use all over the world for many years</p>
              <button type="button">Collection</button>
          </div>
          <div class="cleaner"></div>
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
        margin-top: 100px;
        line-height: 10px;
        text-align: center;
    }
    .list {
        display: flex;
        flex-wrap: wrap;
    }

    .list-items a{
        text-decoration: none;
        color: #000;
        text-align: left;
    }

    .list-items a img{
        width: 270px;
        height: 170px;
        margin: 35px 20px 0px 0px;
        border-radius: 1rem;
    }

    .section .list a p{
        font-weight: bold;
    }

    .section .list-items:hover p{
        color: #f42c37;
    }
    .last-element{
        width: 1450px;
        height: 300px;
        margin: 150px 0px 80px 0px;
        border: 1px solid #616884;
        border-radius: 1rem;
        background-color: #616884;
        color: #fbfbfc;
        position: relative;
    }
    .last-element-left{
        text-align: left;
        line-height: 0px;
        position: absolute;
        top: 80px;
        left: 200px;
    }
    .last-element-left .text-100{
        font-size: 80px;
    }
    .last-element-left .text{
        font-size: 20px;
        padding-left: 10px;
    }
    .last-element img{
        width: 800px;
        position: absolute;
        top: -150px;
        left: 200px;
    }
    .last-element-right{
        position: absolute;
        top: 50px;
        right: 150px;
    }
    .last-element-right h2{
        font-size: 32px;
    }
    .last-element-right p{
        width: 270px;
        text-align: left;
        padding-left: 10px;
    }
    .last-element-right button{
        width: 130px;
        height: 35px;
        border: 1px solid #f8f8f8;
        border-radius: 1rem;
        font-size: 18px;
        position: absolute;
        right: 250px;
        top: 180px;
    }
    @media(max-width: 451px) {
        .container{
            width: 450px;
            max-width: 90%;
            margin: 0 auto;
        }
        .header{
            text-align: center;
        }
        .section{
            max-width: 90%;
        }
        .last-element{
            max-width: 100%;
        }
        .last-element img{
            width: 100%;
            position: relative;
            left: 15px;
        }
        .last-element-left{
            width: 90%;
            font-size: 5px;
        }
        .last-element-right{
            width: 90%;
        }

    }
  </style>