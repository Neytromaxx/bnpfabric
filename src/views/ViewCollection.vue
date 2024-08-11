<template>
  <app-page title="Collection"></app-page>
  <collection-winter></collection-winter>
  <collection-summer></collection-summer>
</template>

<script>
import AppPage from '@/components/ui/AppPage.vue';
import CollectionSummer from '@/components/Collection/CollectionSummer.vue';
import CollectionWinter from '@/components/Collection/CollectionWinter.vue';

export default {
  components:{
    AppPage,
    CollectionSummer,
    CollectionWinter,
  }
}
</script>

<style>

</style>