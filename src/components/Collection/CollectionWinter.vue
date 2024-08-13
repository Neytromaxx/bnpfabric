<template>
  <div class="container">
    <section>
        <aside>
            <header>
                <form>
                    <input type="search" name="search" id="search" placeholder="Search Here">
                    <img src="../../assets/search.png" alt="">
                </form>
            </header>
            <div class="aside-elements">
                <h4>Collection</h4>
                <ul class="aside-list">
                    <li class="aside-lists"><router-link to="spring-collection" class="link">Spring</router-link></li>
                    <li class="aside-lists"><router-link to="winter-collection" class="link">Winter</router-link></li>
                    <li class="aside-lists"><router-link to="summer-collection" class="link">Summer</router-link></li>
                    <li class="aside-lists"><router-link to="autumn-collection" class="link">Autumn</router-link></li>
                </ul>
            </div>
        </aside>
        <main>
            <header>
                <div class="header-text">
                    <h1>Collection</h1>
                    <p>Showing 1-16 of 76</p>
                </div>
                <div class="initial-sort">
                    Initial sort
                </div>
            </header>
            <div class="main-elements">
                <div class="main-list">
                    <div class="main-lists">
                        <router-link to="product/squares" class="link">
                            <img src="../../assets/winter-squares.jpg" alt="">
                            <div class="text">
                                <p>Squares</p>
                            </div>
                        </router-link>
                    </div>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-ikat.jpg" alt="">
                            <div class="text">
                                <p>Ikat</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-circles.jpg" alt="">
                            <div class="text">
                                <p>Circles</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-geometry--blue.jpg" alt="">
                            <div class="text">
                                <p>Geometry blue</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-tropical--leaves.jpg" alt="">
                            <div class="text">
                                <p>Tropical leaves</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-bambi.jpg" alt="">
                            <div class="text">
                                <p>Bambi</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-byzantiyum.jpg" alt="">
                            <div class="text">
                                <p>Byzantium</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-evening.jpg" alt="">
                            <div class="text">
                                <p>Evening garden</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-feather--marqius.jpg" alt="">
                            <div class="text">
                                <p>Feather Marquis</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/suares" class="link">
                            <img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/squares" class="link">
                            <img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/squares" class="link">
                            <img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/squares" class="link">
                            <img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div>
                        </router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/squares" class="link"><img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div></router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/squares" class="link"><img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div></router-link>
                    </li>
                    <li class="main-lists">
                        <router-link to="collection/squares" class="link"><img src="../../assets/winter-lavender-roses.jpg" alt="">
                            <div class="text">
                                <p>Lavender roses</p>
                            </div>
                        </router-link>
                    </li>
                </div>
            </div>
        </main>
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

    section{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        margin: 40px 0px 0px 0px;
    }

    aside{
        flex: 1;
        padding: 20px;
        max-width: 330px;
    }

    h4{
        font-size: 22px;
    }

    .aside-lists{
        list-style: none;
        font-size: 20px;
        line-height: 27px;
    }

    .aside-lists .link{
        text-decoration: none;
        color: #3d3c3c;
    }
    .aside-lists .link:hover{
        font-size: 21px;
        color: #f42c37;
    }

    main{
        flex: 1;
        padding: 20px;
    }

    main header{
        display: flex;
    }

    .header-text{
        flex: 1;
    }

    .initial-sort{
        width: 150px;
        height: 50px;
        padding-left: 25px;
        line-height: 50px;
        background-color: #000;
        color: #fff;
        border-radius: 1.5rem;
    }

    #search{
        width: 300px;
        height: 50px;
        padding: 15px;
        outline: none;
        border: none;
        border-radius: 1.5rem;
        background: linear-gradient(to left, #dfdcdc, #b4b1b1) ;
    }

    form img{
        width: 25px;
        position: relative;
        top: 8px;
        right: 45px;
    }

    .main-list{
        list-style: none;
    }

    .main-list .main-lists{
        float: left;
        width: 250px;
    }

    .main-elements .main-list .link{
        text-decoration: none;
        color: #000;
        text-align: left;
    }

    .main-elements .main-list .link img{
        width: 220px;
        height: 200px;
        margin: 30px 20px 0px 0px;
        border: none;
        border-radius: 1rem;
    }

    .main-elements .main-list .link p{
        font-weight: bold;
    }

    .main-elements .main-lists:hover p{
        color: #f42c37;
    }
</style>