<template>
  <div class="container">
    <section class="contact-page">
        <article class="contact-form">
            <header>
                <h1>Contact</h1>
            </header>
            <form @submit.prevent="submit">
                <input type="email" name="email" id="email" v-model="email" placeholder="Your Email" required>
                <input type="tel" name="tel" id="tel" v-model="tel" placeholder="Phone Humber" required>
                <textarea name="message" id="message" v-model="message" placeholder="Your Message Here"></textarea>
                <div class="btn">
                    <button type="submit">Send</button>
                </div>
            </form>
        </article>
        <aside class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3067.651122044142!2d64.459956!3d39.747487!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f5005f5da092a35%3A0x38ddf0b8d382281b!2z0J7QntCeIEJ1a2hhcmEgTmF0dXJhbCBQcm9kdWN0!5e0!3m2!1sen!2sus!4v1723371308493!5m2!1sen!2sus" 
                width="750" 
                height="550" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </aside>
    </section>
    <footer class="contact-footer">
        <div class="footer-item">
            <img src="../../assets/email.svg" alt="" style="width: 50px; margin-right: 10px; ">
           <b> Email:</b> info@bnpfabric.uz
        </div>
        <div class="footer-item">
            <img src="../../assets/tel.svg" alt="">
            <b>Tel:</b>+998 93 383 75 85 <br> +998 93 960 78 00
        </div>
        <div class="footer-item">
            <img src="../../assets/address.svg" alt="">
            <b>Address:</b> Bukhara, st. Alpomish 80.
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppContact',
  data() {
    return {
      email: '',
      tel: '',
      message: ''
    };
  },
  methods: {
    submit() {
      alert('Ma`lumotlar jo`natildi!');
      this.email = ''
      this.tel = ''
      this.message = ''
    }
  }
  }
</script>

<style scoped>
    .container{
        max-width: 1450px;
        margin: 0 auto;
    }
    .contact-page {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      margin: 80px 0px 80px 0px;
    }

    .contact-form {
      flex: 1;
      padding: 20px;
    }

    header{
        font-size: 40px;
    }

    .map {
      flex: 1;
      padding: 20px;
    }

    input, textarea {
      width: 90%;
      line-height: 35px;
      padding: 10px 10px 10px 35px;
      margin-bottom: 15px;
      font-size: 16px;
      background-color: #eceaea;
      border: 1px solid #eceaea;
      border-radius: 1.5rem;
      outline: none;
    }

    .btn{
        text-align: right;
        margin-right: 3%;
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

    .contact-footer{
        display: flex;
        justify-content: space-between;
        margin: 0px 0px 150px 0px;

    }

    .footer-item{
        flex: 1;
        text-align: center;
    }

    @media (max-width: 768px) {
      .contact-page {
        flex-direction: column;
      }

      .map {
        margin-top: 20px;
      }
    }
</style>