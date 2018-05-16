<template>
  <div class="container">
    <dl class="ub-box ub-col">
      <dd class="z-width-100-percent z-padding-all-8-px z-margin-bottom-5-px z-bg-color-fff ub-box ub-ver z-box-sizing-border">
        <div class="ub-flex-1 search ub-box ub-ver-v">
          <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
          <input class="ub-flex-1 z-font-size-14 z-color-666 z-padding-v-5-px z-margin-left-8-px" placeholder="保利国际影院"/>
        </div>
        <span @click.stop="back()" class="z-font-size-13 z-margin-left-8-px" style="color:#06c1ae">取消</span>
      </dd>
      <dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box">
        <p class="z-font-size-14 z-color-888">猜你想找</p>
      </dd>
      <dd class="z-margin-h-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box">
        <ul class="ub-box ub-wrap">
          <li v-for="(val, idx) in guess" :key="idx" class="item z-font-size-13 z-color-333">{{val.name}}</li>
        </ul>
      </dd>
      <dd class="z-margin-h-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between">
        <p class="z-font-size-14 z-color-888">历史搜索</p>
        <i class="iconfont icon-juqianshou z-color-999 z-font-size-16"></i>
      </dd>
      <dd class="z-margin-h-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box">
        <ul class="ub-box ub-wrap">
          <li v-for="(val, idx) in history" :key="idx" class="item z-font-size-13 z-color-333">{{val.name}}</li>
        </ul>
      </dd>
    </dl>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        guess: [
          {goodId: '1', name: '北京欢乐谷'}, {goodId: '2', name: '故宫博物院'},
          {goodId: '3', name: '北京野生动物园'}, {goodId: '4', name: '古北水镇'},
          {goodId: '5', name: '八达岭长城'}, {goodId: '6', name: '北京海洋馆'},
        ],
        history: [
          {goodId: '6', name: '北京海洋馆'},
          {goodId: '3', name: '北京野生动物园'},
        ]
      }
    },
    methods: {
      back () {
        wx.navigateBack({delta: 1})
      }
    },
    onShow() {
      wx.setNavigationBarTitle({title: '搜索'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff}
  .search{background: #f5f5f5;border-radius: 15px;padding: 0 10px}
  .item{padding: 8px 10px;background: #f5f5f5;border-radius: 3px;margin: 0 8px 8px 0}
</style>
