<template>
  <app-page title="Collection"></app-page>
  <app-collection>  
    <!-- <collection-spring></collection-spring>
    <collection-summer></collection-summer>
    <collection-autumn></collection-autumn>
    <collection-winter></collection-winter> -->
  </app-collection>
</template>

 <script>
import AppPage from '@/components/ui/AppPage.vue';
// import CollectionSummer from '@/components/Collection/CollectionSummer.vue';
// import CollectionAutumn from '@/components/Collection/CollectionAutumn.vue';
// import CollectionSpring from '@/components/Collection/CollectionSpring.vue';
// import CollectionWinter from '@/components/Collection/CollectionWinter.vue';
import AppCollection from '@/components/Collection/AppCollection.vue'; 

export default {
  components:{
    AppPage,
    // CollectionSummer,
    // CollectionAutumn,
    // CollectionSpring,
    // CollectionWinter, 
    AppCollection

  }
}
</script> 

<style>

</style>