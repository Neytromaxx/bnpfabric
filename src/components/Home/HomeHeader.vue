<template>
  <div class="container">
    <div class="element">
        <img src="../../assets/main-page-img-st.png" alt="">
        <p class="element-small-text">Bukhara</p>
        <p class="element-middle-text">Natural</p>
        <p class="element-large-text">PRODUCT</p>
    </div>
    <div class="cleaner"></div>
    <div class="info">
        <div class="info-shipping">
            <img src="../../assets/shipping.svg" alt="">
            <h4>Free shipping</h4>
            <p>Free shipping on all orders</p>
        </div>
        <div class="info-guarant">
            <img src="../../assets/guarant.svg" alt="">
            <h4>Return Guarantee</h4>
            <p>30 day money back</p>
        </div>
        <div class="info-support">
            <img src="../../assets/support.svg" alt="">
            <h4>Online support 24/7</h4>
            <p>Technical support 24/7</p>
        </div>
        <div class="info-payment">
            <img src="../../assets/payment.svg" alt="">
            <h4>Secure payment</h4>
            <p>All payment methods accepted</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .container{
        margin: 0 auto;
        max-width: 1450px;
        border: 2px solid black;
    }
    .cleaner{
        clear: both;
    }
    .element{
        width: 1450px;
        height: 630px;
        border: 1px solid #464342;
        border-radius: 1.5rem;
        background-color: #464342;
        color: #f8f8f8;
        position: relative;
    }
    .element img{
        width: 1350px;
        height: 806px;
        position: absolute;
        /* top: 70px; */
        right: 300px;
        z-index: 1;
    }
    .element-small-text{
        font-size: 45px;
        position: absolute;
        top: 50px;
        right: 150px;
    }
    .element-middle-text{
        font-size: 90px;
        position: absolute;
        top: 60px;
        right: 150px;
    }
    .element-large-text{
        font-size: 115px;
        position: absolute;
        top: 160px;
        right: 150px;
    }
    .info{
        display: flex;
        justify-content: space-between;
    }
</style>