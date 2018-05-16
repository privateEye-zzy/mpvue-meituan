<template>
  <div class="container ub-box">
    <scroll-view scroll-y style="height: 100vh" scroll-top="0">
     <dl class="ub-box ub-col z-width-100-percent">
      <dd class="item z-width-100-percent ub-box ub-ver z-box-sizing-border z-bg-color-fff">
        <p class="ub-box">
          <img class="z-img-cover" :src="formdata.img" />
        </p>
        <div class="ub-flex-1 ub-box ub-col z-padding-h-10-px z-box-sizing-border">
          <p class="z-font-size-15 z-color-333 z-margin-bottom-3-px z-font-weight-bold z-lines-1-overflow-hidden">{{formdata.mainTitle}}</p>
          <p class="z-font-size-14 z-color-666 z-margin-bottom-3-px z-lines-1-overflow-hidden">{{formdata.subTitle}}</p>
          <p class="z-font-size-14 z-margin-bottom-3-px" style="color:#06c1ae">¥{{formdata.price}}</p>
        </div>
      </dd>
      <dd class="item z-margin-top-8-px z-width-100-percent ub-box ub-ver ub-col z-box-sizing-border z-bg-color-fff">
        <span class="z-font-size-15 z-color-333 z-margin-bottom-8-px z-font-weight-bold">商家信息</span>
        <div class="z-width-100-percent ub-box ub-between">
          <span class="z-font-size-14 z-color-666">{{formdata.sellerName}}</span>
          <span @click.stop="clickContact()" class="ub-box z-padding-h-10-px z-box-sizing-border" style="border-left:1px solid #eee">
            <i class="iconfont icon-dianhua z-font-size-22" style="color:#06c1ae"></i>
          </span>
        </div>
      </dd>
       <dd class="item z-margin-top-8-px z-width-100-percent ub-box ub-ver ub-col z-box-sizing-border z-bg-color-fff">
        <span class="z-font-size-15 z-color-333 z-margin-bottom-8-px z-font-weight-bold">套餐</span>
        <div class="ub-box ub-ver ub-between z-width-100-percent z-border-bottom-1-eee z-padding-v-10-px">
          <span class="z-font-size-14 z-color-333">{{formdata.package.packageName}}</span>
          <span class="z-font-size-14 z-color-333">{{formdata.package.packagePrice}}</span>
        </div>
        <ul class="ub-box ub-col z-width-100-percent z-margin-top-8-px">
          <li v-for="(val, i) in formdata.package.notes" :key="i" class="z-font-size-14 z-color-333 z-lineHeight-22 z-margin-bottom-5-px">{{val}}</li>
        </ul>
      </dd>
      <dd style="padding:8px 50px" class="z-margin-top-8-px z-width-100-percent ub-box ub-ver ub-col z-box-sizing-border z-bg-color-fff">
        <span class="z-font-size-15 z-color-333 z-margin-bottom-8-px z-font-weight-bold">订单信息</span>
        <ul class="z-width-100-percent ub-box ub-col ub-ver">
          <li class="z-width-100-percent ub-box ub-between ub-ver z-margin-bottom-8-px">
            <span class="z-font-size-14 z-color-888 ub-flex-1 z-textAlign-left">订单号</span>
            <span class="z-font-size-14 z-color-888 ub-flex-2 z-textAlign-right">{{formdata.orderNum}}</span>
          </li>
          <li class="z-width-100-percent ub-box ub-between ub-ver z-margin-bottom-8-px">
            <span class="z-font-size-14 z-color-888 ub-flex-1 z-textAlign-left">购买手机号</span>
            <span class="z-font-size-14 z-color-888 ub-flex-2 z-textAlign-right">{{formdata.orderPhone}}</span>
          </li>
          <li class="z-width-100-percent ub-box ub-between ub-ver z-margin-bottom-8-px">
            <span class="z-font-size-14 z-color-888 ub-flex-1 z-textAlign-left">下单时间</span>
            <span class="z-font-size-14 z-color-888 ub-flex-2 z-textAlign-right">{{formdata.orderCreateTime}}</span>
          </li>
          <li class="z-width-100-percent ub-box ub-between ub-ver z-margin-bottom-8-px">
            <span class="z-font-size-14 z-color-888 ub-flex-1 z-textAlign-left">数量</span>
            <span class="z-font-size-14 z-color-888 ub-flex-2 z-textAlign-right">{{formdata.orderCount}}</span>
          </li>
          <li class="z-width-100-percent ub-box ub-between ub-ver">
            <span class="z-font-size-14 z-color-888 ub-flex-1 z-textAlign-left">总价</span>
            <span class="z-font-size-14 z-color-888 ub-flex-2 z-textAlign-right">{{formdata.orderTotalPrice}}</span>
          </li>
        </ul>
      </dd>
      <dd class="item z-margin-top-8-px z-width-100-percent ub-box ub-ver ub-col z-box-sizing-border z-bg-color-fff">
        <span class="z-font-size-15 z-color-333 z-margin-bottom-8-px z-font-weight-bold">提示</span>
        <p class="z-font-size-14 z-color-999 z-lineHeight-22 z-margin-bottom-8-px">您可以凭购买时所填写的手机号登录美团App进行评价、退款等更多操作</p>
        <span @click.stop="clickContact()" class="contactBtn z-width-100-percent ub-box ub-ver z-font-size-14 z-color-666">联系客服</span>
      </dd>
     </dl>
    </scroll-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        formdata: {
          goodId: '100',
          mainTitle: '单人自助晚餐',
          subTitle: '单人自助晚餐',
          img: 'http://p0.meituan.net/200.0/deal/522fd16a9b25479496188b59476d1b941062402.jpg@206_0_828_828a%7C267h_267w_2e_90Q',
          sellerName: '索菲特大酒店锦厨国际餐厅自助餐',
          package: {
            packageName: '单人自助晚餐',
            packagePrice: '¥398(1位)',
            notes: [
              '单人自助晚餐：周一至周四18:00-21:00',
              '餐厅预定入口: https://tableplus.accorplus.com?vc=KweeZeenRestaurantAccorASE1187',
              '锦厨国际餐厅位于昆明索菲特大酒店49楼，能够360度鸟瞰春城美景。',
              '我们为您提供400种以上的餐食自助，全场酒水畅饮，包括葡萄酒、各色软饮及果汁。',
              '更有专属定制化服务：凡周年纪念日/生日当天到店就餐的客人，将免费提供蛋糕一个(此项仅针对提前至少一天进行预约并说明过情况的客人。)',
              '温馨提示：儿童按身高收费，具体是0-110cm儿童免费；110cm-140cm儿童半价；140cm以上的全价。 另：如遇特殊活动时，需根据店里实际情况按实际价格补差价。',
            ],
          },
          sellerTel: '',
          price: 308.00,
          orderNum: '4396693980',
          orderPhone: '184****3468',
          orderCreateTime: '2018/05/16 11:11:49',
          orderCount: '1',
          orderTotalPrice: '308',
        }
      }
    },
    methods: {
      clickContact() {
        wx.showActionSheet({
          itemList: ['客服电话：10107888'],
          success(res) {
            switch(res.tapIndex) {
              case 0:
                wx.makePhoneCall({phoneNumber: '10107888'})
                break
            }
          }
        })
      },
    },
    onShow() {
      wx.setNavigationBarTitle({title: '订单详情页'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#f5f5f5}
  .item{border-bottom: 1px solid #f5f5f5;padding: 8px 10px;}
  .item img{width: 80px;height: 60px;border-radius: 3px}
  .contactBtn{padding: 8px 0;border: 1px solid #eee;}
</style>
