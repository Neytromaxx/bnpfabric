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
        <div class="info-element">
             <div class="info-img">
                <img src="../../assets/shipping.svg" alt="">
            </div>
            <div class="info-text">
                <h4>Free shipping</h4>
                <p>Free shipping on all orders</p>
            </div>
        </div>
        <div class="cleaner"></div>
        <div class="info-element">
            <div class="info-img">
                <img src="../../assets/guarant.svg" alt="">
            </div>
            <div class="info-text">
                <h4>Return Guarantee</h4>
                <p>30 day money back</p>
            </div>
        </div>
        <div class="cleaner"></div>
        <div class="info-element">
            <div class="info-img">
                <img style="width: 50px;" src="../../assets/support.svg" alt="">
            </div>
            <div class="info-text">
                <h4>Online support 24/7</h4>
                <p>Technical support 24/7</p>
            </div>
        </div>
        <div class="cleaner"></div>
        <div class="info-element">
            <div class="info-img">
                <img style="width: 40px;" src="../../assets/payment.svg" alt="">
            </div>
            <div class="info-text">
                <h4>Secure payment</h4>
                <p>All payment methods accepted</p>
            </div>
        </div>
        <div class="cleaner"></div>
    </div>
    <div class="last-element">
        <div class="last-element-left">
            <p class="text-100"><b>100%</b></p>
            <p class="text">Material quality</p>
        </div>
        <img src="../../assets/main-page-img-nd.png" alt="">
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
        margin-bottom: 70px;
    }
    .element img{
        width: 1350px;
        height: 806px;
        position: absolute;
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
        flex-direction: row;
        margin: 70px 0px 0px 0px;
    }
    .info-element{
        width: 350px;
        height: 50px;
        display: flex;
        justify-content: space-around;
    }
    .info-img{
        width: 100px;
    }
    .info-img  img{
        width: 60px;
        height: 50px;
    }
    .info-text{
        width: 250px;
        font-size: 14px;
        line-height: 1px;
        text-align: left;
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


@media (max-width: 767px) {
    .container {
        margin: 0 auto;
        width: 767px;
        max-width: 90%;
    }
    .cleaner{
        clear: both;
    }

    .element {
        width: 100%;
        height: auto;
        border-radius: 1rem;
    }

    .element img {
        width: 100%;
        height: auto;
        position: relative;
        top: 45px;
        right: 35px;
    }

    .element-small-text{
        font-size: 18px;
        top: 20px;
        right: 10px;
    }
    .element-middle-text{
        font-size: 36px;
        top: 20px;
        right: 10px;
    }
    .element-large-text {
        font-size: 45px;
        top: 55px;
        right: 10px; 
    }
    .info-element {
        flex-direction: column;
    }
    .info-text {
        font-size: 16px;
        line-height: .7rem; 
    }

    .last-element {
        width: 100%; 
        height: auto;
        margin: 80px;
        border-radius: 1rem;
        padding: 20px; 
    }

    .last-element-left {
        top: 20px;
        left: 10px; 
        line-height: 1.2;
    }

    .last-element-left .text-100 {
        font-size: 2rem;
    }

    .last-element-left .text {
        font-size: 1rem;
        padding-left: 0;
    }

    .last-element img {
        width: 100%;
        position: relative;
        top: auto;
        left: 0;
    }

    .last-element-right {
        top: auto;
        right: 10px;
        margin-top: 20px;
    }

    .last-element-right h2 {
        font-size: 1.5rem;
    }

    .last-element-right p {
        width: 100%; 
        padding-left: 0;
        font-size: 1rem;
    }

    .last-element-right button {
        width: 100%; 
        max-width: 130px;
        position: relative; 
        right: 0;
        top: 20px;
    }
}
@media screen and (max-width: 451px) {
    .container{
        max-width: 450px;
        margin: 0 auto;
    }
    .cleaner{
        clear: both;
    }
    .element{
        width: 95%;
    }
    .info{
        flex-direction: column;
    }
    .info-element{
        width: 450px;
        margin-bottom:80px;
    }
    .info-img{
        display: flex;
        justify-content: center;
    }
    .info-text{
        text-align: center;
    }
    .last-element{
        width: 445px;
        max-width: 87%;
        height: 500px;
        margin: 80px 0px;
    }
    .last-element img{
        width: 100%;
        position: relative;
        bottom: 110px;
    }
    .last-element-left{
        text-align: center;
        width: 100%;
        padding-top: 120px;
        line-height: 10px;
    }
    .last-element-right{
        text-align: center;
        width: 90%;
        padding-bottom: 30px;
    }
    .last-element-right p{
        text-align: center;
        width: 100%;
    }
}

</style>