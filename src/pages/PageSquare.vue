<template>
    <app-page title="Squares"></app-page>
    <div class="container">
        <section>
            <aside>
                <div class="img-container" @mousemove="handleMouse"
                    @mouseleave="resetImg">
                    <img :src="imgSrc" :style="imgStyle" alt="">
                </div>
            </aside>
            <article>
                <h1>Squares</h1>
                <table>
                    <tr>
                        <th>Material:</th>
                        <th>100% cotton flannel</th>
                    </tr>
                    <tr>
                        <th>Pillowcase:</th>
                        <th>50x70 cm (2 pcs.)</th>
                    </tr>
                    <tr>
                        <th>Bed sheet:</th>
                        <th>260x280 cm (1 piece)</th>
                    </tr>
                    <tr>
                        <th>Duvet cover:</th>
                        <th>160x220 cm (2 pcs.)</th>
                    </tr>
                    <tr>
                        <th>Size:</th>
                        <th>Special size</th>
                    </tr>
                    <tr>
                        <th>Manufacturer:</th>
                        <th>Bukhara Natural Product</th>
                    </tr>
                    <tr class="table-last">
                        <th></th>
                        <th></th>
                    </tr>
                </table>
                <p>Collection: <router-link to="collection/winter-collection">Winter Collection</router-link></p>
            </article>
        </section>
        <hr>
        <footer>
            <summary>
                <div class="slider">
                    <div class="slider-header">
                        <div
                            v-for="(tab, index) in tabs"
                            :key="index"
                            :class="['slider-header-item', {'slider-header-item_active': activeTab === index}]"
                            @click="selectTab(index)"
                        >{{ tab }}</div>
                    </div>
                    <div class="slider-content">
                        <div v-if="activeTab === 0">
                            <h2>{{ tabContents[0] }}</h2>
                            <h1>Bedding set Squares</h1>
                            <p>Bed linen is a household item and bedroom decor designed for comfort and beauty. You can choose from a variety of bed sets that include sheets, blankets, pillow crafts and other accessories. They have various designs, prints, embroideries or other design elements. They are easy and quick to clean and clean. They are made from soft materials and they make your bedrooms cozy and cozy.</p>
                        </div>
                        <div v-if="activeTab === 1">
                            <h2>{{ tabContents[1] }}</h2>
                            <p>no reviews yet</p>
                            <h1>Be the first to review “Squares”</h1>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form @submit.prevent="submit">
                                <div class="inputs">
                                    <div class="form-group">
                                        <label for="name">Name *</label>
                                        <input type="text" v-model="name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="email">Email *</label>
                                        <input type="email" v-model="email" required>
                                    </div>
                                </div>
                                <label for="desc">Description *</label>
                                <textarea name="desc" id="desc" v-model="desc" cols="30" rows="10" required></textarea>

                                <div class="btn">
                                    <button type="submit">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </summary>
            <div class="similar-products">

            </div>
        </footer>
    </div>
</template>

<script setup>
import AppPage from '@/components/ui/AppPage.vue'
import { ref } from 'vue';

const activeTab = ref(0)

const name = ref('')
const email = ref('')
const desc = ref('')

const imgSrc = ref(require('@/assets/winter-squares.jpg'))
const imgStyle = ref({
    transform: 'scale(1)',
    transformOrigin : 'center center'
})

const handleMouse = (event) =>{
    const rect = event.target.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) *100
    const y = ((event.clientY - rect.top) / rect.height)*100


    imgStyle.value = {
        transform : 'scale(2.5)',
        transformOrigin: `${x}% ${y}%`,
        transition: 'transform 1.5 ease, transform-origin 1.5 ease'
    }
}

const resetImg = () =>{
    imgStyle.value = {
        transform : 'scale(1)',
        transformOrigin: 'center center',
        transition: 'transform .5 ease-out, transform-origin 1.5 ease-out'
    }
}

const tabs = ['Description', 'Review']
const tabContents = [
    'Description',
    'Reviews'
]

function selectTab(index){
    activeTab.value = index
}

function submit(){
    alert('Fikringiz uchun rahamt!')
    name.value = ''
    email.value = ''
    desc.value = ''
}

</script>

<style scoped>
    .container{
        max-width: 1450px;
        margin: 0 auto;
    }

    section{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin: 80px 0px;
    }

    aside{
        flex: 1;
    }

    .img-container{
        width: 640px;
        height: 620px;
        overflow: hidden;
        position: relative;
        border-radius: 1.5rem;
    }
    .img-container img{
        width: 100%;
        height: 100%;
    }

    article{
        margin-top: 70px;
    }

    table, tr, th{
        border: 1px solid #919090;
    }

    table{
        width: 550px;
        line-height: 55px;
        padding-left: 30px;
        text-align: left;
        border-collapse: collapse;
    }

    th{
        padding-left: 30px;
        text-align: left;
    }

    .table-last{
        height: 30px;
    }

    summary{
        width: 1000px;
        margin: 0 auto;
    }

    .slider-header{
        text-align: center;
    }

    .slider-header-item{
        margin-left: 10px;
        padding: 5px;
        font-size: 17px;
        cursor: pointer;
        display: inline-block;
        
    }

    .slider-header-item_active{
        color: red;
        font-weight: bold;
        border-top: 1px solid red;
    }

    .inputs{
        display: flex;
        flex-wrap: wrap;
    }

    .form-group{
        margin-bottom: 15px;
        flex: 1; 
    }
    
    label {
        display: block;
        margin-bottom: 5px;
        color: #333;
    }
    input {
        width: 90%;
        line-height: 35px;
        margin-bottom: 15px;
        padding: 10px;
        font-size: 16px;
        background-color: #eceaea;
        border: 1px solid #eceaea;
        border-radius: 1.5rem;
        outline: none;
    }

    textarea {
      width: 95%;
      margin-bottom: 15px;
      padding: 15px;
      font-size: 18px;
      background-color: #eceaea;
      border: 1px solid #eceaea;
      border-radius: 1.5rem;
      outline: none;
    }

    .btn{
        text-align: right;
        margin-right: 2%;
    }

    button {
      width: 180px;
      height: 45px;
      padding: 10px 15px;
      background-color: #f42c37;
      color: white;
      border: none;
      border-radius: 1.5rem;
      cursor: pointer;

    }

    button:hover {
      background-color: #000;
    }
</style>