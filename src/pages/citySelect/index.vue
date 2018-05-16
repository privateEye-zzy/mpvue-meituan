<template>
  <div class="container ub-box ub-col">
   <city></city>
  </div>
</template>
<script>
  import city from "../../components/city.vue"
  export default {
    components: {city},
    data () {
      return {}
    },
    methods: {},
    onShow() {
      wx.setNavigationBarTitle({title: '选择城市'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff}
</style>
