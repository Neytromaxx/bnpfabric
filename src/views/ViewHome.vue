<template>
  <home-header></home-header>
  <home-winter></home-winter>
  <home-autumn></home-autumn>
  <home-summer></home-summer>
  <home-news></home-news>
</template>

<script>
import HomeHeader from '@/components/Home/HomeHeader.vue'
import HomeWinter from '@/components/Home/HomeWinter.vue'
import HomeAutumn from '@/components/Home/HomeAutumn.vue'
import HomeSummer from '@/components/Home/HomeSummer.vue'
import HomeNews from '@/components/Home/HomeNews.vue'

export default {
    components:{
        HomeHeader,
        HomeWinter,
        HomeAutumn,
        HomeSummer,
        HomeNews
    }
}
</script>

<style>

</style>