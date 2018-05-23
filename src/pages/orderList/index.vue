<template>
  <div class="container ub-box">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0">
      <dl class="z-width-100-percent ub-box ub-col">
       <dd @click.stop="$openWin('/pages/orderDetail/main')" v-for="(val, idx) in 12" :key="idx" class="order z-width-100-percent ub-box z-box-sizing-border">
         <img class="z-img-cover" :src="order.img" />
         <div class="ub-flex-1 z-padding-left-10-px ub-box ub-col">
           <span class="z-font-size-15 z-color-333 z-margin-bottom-3-px z-font-weight-bold">{{order.name}}</span>
           <span class="z-font-size-12 z-color-888 z-margin-bottom-3-px">数量：{{order.num}}</span>
           <span class="z-font-size-12 z-color-888 z-margin-bottom-3-px">总价：{{order.price}}</span>
         </div>
         <span class="z-font-size-14" style="color:#06c1ae">{{order.type}}</span>
       </dd>
     </dl>
    </scroll-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        order: {
          orderId: '100',
          img: 'http://p0.meituan.net/200.0/deal/522fd16a9b25479496188b59476d1b941062402.jpg@206_0_828_828a%7C267h_267w_2e_90Q',
          name: '索菲特大酒店锦厨国际餐厅自助餐',
          num: '1',
          price: '308',
          type: '待评价'
        }
      }
    },
    methods: {},
    onShow () {
      wx.setNavigationBarTitle({title: '订单列表'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff}
  .order{border-bottom: 1px solid #f5f5f5;padding: 10px 8px;}
  .order img{width: 55px; height: 55px; border-radius: 3px}
</style>
