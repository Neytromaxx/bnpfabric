<template>
  <div></div>
</template>

<script>
export default {
    props: ['title'],
    setup(props){
        document.title = `${props?.title} - LLC "BUKHARA NATURAL PRODUCT"`
    }
}
</script>

<style>

</style>