<template>
    <div class="container">
      <div class="header">
          <h1>Summer collection</h1>
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

    .list-items{
        flex: 1;
        text-align: center;
    }

    .list-items a{
        text-decoration: none;
        color: #000;
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