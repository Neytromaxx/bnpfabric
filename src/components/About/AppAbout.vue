<template>
  <div class="container">
    <section>
        <article>
            <header>
                <h1>Bukhara Natural Product</h1>
            </header>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsOur factory has been a company that produces cotton fabrics for use all over the world for many years.            
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThis company has been serving customers for 17 years.           
             </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe main goal of this company is to produce high quality and cost effective products.           
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe production process of this company is completely environmentally friendly.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company can produce any types of cotton raw materials according to the requirements and suggestions of customers.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsThe company is the official dealer of DongJia weaving machines in Uzbekistan.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsCurrently, more than 80 families contribute to the prestige and success of the company by providing financially for their families.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsTo meet this demand, 50 looms are running at high speed, non-stop.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsWe have the capacity to weave 200-250,000 meters of fabric per month.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsIn accordance with the high demand of our customers, the company has now launched the production of high-quality premium eco-bags.
            </p>
            <p>
                <img src="../../assets/dot.png" alt="dot">
                Buxoro matolari, Eco sumkalar, Bukhara fabrics, Eco bagsBukhara Natural Product Company is pleased to serve its loyal customers at any time.
            </p>
        </article>

        <aside>
            <img src="../../assets/team-photo.png" alt="Team Photo">
        </aside>
    </section>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        max-width: 1450px;
        margin: 0 auto;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin: 80px 0px 50px 0px;
    }
    article {
      flex: 1;
      padding: 20px;
    }
    header{
        font-size: 40px;
    }
    article p{
        width: 570px;
        font-size: 17px;
        line-height: 30px;
    }
    article img{
        width: 20px;
    }
    aside {
      flex: 1;
      padding: 20px;
      width: 500px;
    }

    aside img {
      max-width: 100%;
      border-radius: 1rem;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.22), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    @media (max-width: 768px) {
      section {
        flex-direction: column;
      }

      article,
      aside {
        width: 100%;
        padding: 0;
      }

      aside {
        margin-top: 20px;
      }
    }
</style>