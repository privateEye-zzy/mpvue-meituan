<template>
  <div class="container ub-box">
   <dl class="ub-box ub-col z-width-100-percent">
    <dd class="item z-width-100-percent ub-box ub-ver ub-between z-box-sizing-border z-bg-color-fff">
      <span class="z-font-size-15 z-color-333 z-font-weight-bold">{{formdata.mainTitle}}</span>
      <span class="z-font-size-15 z-color-333 z-font-weight-bold">{{formdata.price}}元</span>
    </dd>
    <dd class="item z-width-100-percent ub-box ub-ver ub-between z-box-sizing-border z-bg-color-fff">
      <span class="z-font-size-15 z-color-333 z-font-weight-bold">数量</span>
      <span>
        <counter @counterService="counterService"></counter>
      </span>
    </dd>
    <dd class="item z-width-100-percent ub-box ub-ver ub-between z-box-sizing-border z-bg-color-fff">
      <span class="z-font-size-15 z-color-333 z-font-weight-bold">小计</span>
      <span class="z-font-size-15 z-font-weight-bold" style="color:red">
        ¥{{formdata.totalPrice}}
      </span>
    </dd>
    <dd class="item z-margin-top-8-px z-width-100-percent ub-box ub-ver ub-between z-box-sizing-border z-bg-color-fff">
      <p class="ub-box ub-ver">
        <i class="iconfont icon-hongbao z-color-666 z-font-size-18 z-margin-right-5-px" style="color:#f90"></i>
        <span class="z-font-size-15 z-color-333 z-font-weight-bold">抵用券</span>
      </p>
      <p class="ub-box ub-ver">
        <span class="z-font-size-12 z-color-888 z-margin-right-3-px">无可用抵用券</span>
        <i class="iconfont icon-xiayiyeqianjinchakangengduo z-font-size-14 z-color-888"></i>
      </p>
    </dd>
    <dd class="item z-margin-top-8-px z-width-100-percent ub-box ub-ver ub-between z-box-sizing-border z-bg-color-fff">
      <span class="z-font-size-15 z-color-333 z-font-weight-bold">绑定手机号</span>
      <span class="z-font-size-15 z-color-333 z-font-weight-bold">{{formdata.phone}}</span>
    </dd>
    <!--fixed部分-->
    <ul class="fixCon ub-box ub-ver ub-between">
      <li class="ub-box ub-ver z-padding-h-10-px">
        <span class="z-font-size-12 z-color-999 z-margin-right-10-px">实付金额</span>
        <span class="z-font-size-18 z-font-weight-bold" style="color:red">¥{{formdata.totalPrice}}</span>
      </li>
      <li @click.stop="$openWin('/pages/error/main')" class="sumbitBtn ub-box ub-ver z-font-size-16 z-color-fff">提交订单</li>
    </ul>
   </dl>
  </div>
</template>
<script>
  import counter from "../../components/counter.vue"
  export default {
    components: {counter},
    data () {
      return {
        formdata: {
          goodId: '100',
          mainTitle: '索菲特大酒店锦厨国际餐厅自助餐',
          num: 1,
          price: 308.00,
          totalPrice: 308.00,
          phone: '138****3468',
        }
      }
    },
    methods: {
      counterService(n) {
        this.formdata.num = n
        this.formdata.totalPrice = (this.formdata.price|0) * n
      }
    },
    onShow() {
      wx.setNavigationBarTitle({title: '提交订单'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#f5f5f5}
  .item{border-bottom: 1px solid #f5f5f5;padding: 10px 8px;}
  .fixCon{position: fixed;left: 0;bottom: 0;z-index: 10;width: 100%;background: #fff;}
  .sumbitBtn{padding: 15px 35px;background: #06c1ae;box-sizing: border-box;}
</style>
