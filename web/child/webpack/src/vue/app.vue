<template>
   <div>
    app页面
    <img :src="logo" alt="">
   </div>
</template>

<script>
import logo from '../style/test.jpg'
export default {
   data() {
      return {
         logo
      }
   }
}
</script>

<style>
 /* div {
    background-color: red;
 } */
</style>