<template>
	<div class="ub-box ub-ver-v z-width-100-percent">
    <ul class="counter z-width-100-percent ub-box">
      <li @click.stop="changeNum(-1)" class="counter-dis ub-box ub-ver z-font-size-16 z-color-666">-</li>
      <li class="counter-num ub-box ub-ver z-font-size-14 z-color-333">{{num}}</li>
      <li @click.stop="changeNum(1)" class="counter-add ub-box ub-ver z-font-size-16">+</li>
    </ul>
	</div>
</template>
<script>
  export default {
    data () {
      return {
      	num: 1,
      }
    },
    mounted() {},
    methods: {
      changeNum(type) {
        if (this.num === 1 && type === -1) return
        this.num += Number(type)
        this.$emit('counterService', this.num)
      }
    },
  }
</script>
<style scoped>
	.counter-dis, .counter-add{padding: 3px 8px;border-top: 1px solid #ddd;border-bottom: 1px solid #ddd;}
  .counter-dis{border-left: 1px solid #ddd;}
  .counter-add{border-right: 1px solid #ddd;color:#06c1ae;}
  .counter-num{padding: 3px 14px;border: 1px solid #ddd;}
</style>