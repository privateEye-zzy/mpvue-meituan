<template>
  <div @click.stop="gotoDetail(good.goodId)" class="card ub-box z-padding-v-10-px" :class="{'z-border-bottom-1-eee':isLast==false}">
      <img :src="good.img" class="z-img-cover">
      <div class="z-padding-h-10-px ub-flex-1 ub-box ub-col">
        <p class="ub-flex-1 ub-box ub-ver ub-between">
          <span class="z-width-80-percent z-font-size-15 z-lineHeight-26 z-lines-1-overflow-hidden z-font-weight-bold">{{good.mainTitle}}</span>
          <span class="ub-flex-1 z-textAlign-right z-font-size-12 z-color-888">{{good.distance}}km</span>
        </p>
        <p class="z-font-size-12 z-color-666 z-lineHeight-20">{{good.subTitle}}</p>
        <p class="ub-flex-1 ub-box ub-ver ub-between ub-flex-end">
          <span class="z-font-size-16" style="color:#06c1ae">{{good.price}}元</span>
          <span class="z-font-size-12 z-color-888">已售{{good.sales}}</span>
        </p>
      </div>
  </div>
</template>
<script>
  export default {
  	props: ['curGood', 'isLast'],
  	data () {
      	return {
      		good: {
	        	goodId: '100',
    				img: 'http://p0.meituan.net/200.0/deal/522fd16a9b25479496188b59476d1b941062402.jpg@206_0_828_828a%7C267h_267w_2e_90Q',
    				mainTitle: '索菲特大酒店锦厨国际餐厅自助餐',
    				subTitle: '单人自助晚餐',
    				distance: '1.7',
    				price: '308',
    				sales: '42739',
	        },
      	}
   	},
   	methods: {
   		gotoDetail(id) {
        wx.navigateTo({url: '/pages/goodDetail/main'})
      }
   	}
  }
</script>
<style scoped>
  .card img{width: 80px;height: 80px}
</style>
