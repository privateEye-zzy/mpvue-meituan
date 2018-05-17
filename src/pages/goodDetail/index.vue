<template>
  <div class="container ub-box ub-col ub-ver">
	<scroll-view scroll-y style="height: 100vh" scroll-top="0">
	  <dl class="ub-box ub-col">
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff">
			<image @click.stop="previewImage([indexImg])" class="z-width-100-percent z-img-cover indexImg" :src="indexImg">
				<div class="indexImg-bk ub-box ub-col">
					<span class="z-font-size-18 z-lineHeight-30 z-color-fff z-box-sizing-border z-padding-h-8-px">{{mainTitle}}</span>
					<span class="z-font-size-14 z-color-fff z-box-sizing-border z-padding-h-8-px">{{subTitle}}</span>
				</div>
			</image>
		</dd>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="ub-box ub-ver">
				<span class="z-font-size-24 z-margin-right-5-px" style="color:#06c1ae">¥{{nowPrice}}</span>
				<span class="z-font-size-13 z-color-888">门市价：¥{{normalPrice}}</span>
			</p>
			<p class="ub-box ub-ver">
				<span @click.stop="$openWin('/pages/submit/main')" class="buyBtn ub-box ub-ver z-font-size-16 z-color-fff">
					立即抢购
				</span>
			</p>
		</dd>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between">
			<p class="ub-box ub-ver">
				<i class="iconfont icon-xianshikejian z-font-size-18 z-margin-right-5-px" style="color:#06c1ae;"></i>
				<span class="z-font-size-12 z-color-888">过期自动退</span>
			</p>
			<p class="ub-box ub-ver">
				<i class="iconfont icon-yonghu z-font-size-16 z-margin-right-5-px" style="color:#888;"></i>
				<span class="z-font-size-12 z-color-888">已售420</span>
			</p>
		</dd>
		<dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="ub-box ub-ver">
				<span class="z-font-size-13 z-color-888">
					<star></star>
				</span>
			</p>
			<p @click.stop="$openWin('/pages/comment/main')" class="ub-box ub-ver">
				<span class="z-font-size-13 z-color-888">{{commentsNum}}条评论</span>
				<i class="iconfont icon-xiayiyeqianjinchakangengduo z-font-size-12 z-color-888"></i>
			</p>
		</dd>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff  ub-box ub-wrap" style="padding:12px 8px 8px 8px">
			<span v-for="(val, idx) in labels" :key="idx" class="label z-font-size-13" :class="{'tuijian': val.type==1, 'butuijian': val.type==0}">{{val.name}} {{val.num}}</span>
		</dd>
		<dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="z-font-size-14 z-color-888">商家信息</p>
		</dd>	
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between">
			<p class="ub-flex-1 ub-box ub-col" style="border-right: 1px solid #eee">
				<span class="z-font-size-14 z-lineHeight-24 z-color-333">{{sellerName}}</span>
				<span class="z-font-size-13 z-color-999">{{sellAdress}}</span>
			</p>
			<p @click.stop="clickCall()" class="ub-box ub-ver z-padding-h-8-px">
				<i class="iconfont icon-dianhua z-font-size-20" style="color:#06c1ae"></i>
			</p>
		</dd>
		<dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="z-font-size-14 z-color-888">套餐</p>
		</dd>	
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="z-font-size-14 z-color-333">{{package.packageName}}</p>
			<p class="ub-box">
				<span class="z-font-size-14 z-color-333 z-margin-right-5-px">1位</span>
				<span class="z-font-size-14 z-color-333">¥{{normalPrice}}</span>
			</p>
		</dd>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-ver" style="border-bottom: 1px solid #f5f5f5">
			<p class="z-font-size-14 z-color-888">备注</p>
		</dd>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-col">
			<ul class="ub-box ub-col">
				<li v-for="(val, idx) in package.notes" :key="idx" class="z-font-size-14 z-color-333 z-box-sizing-border z-lineHeight-24">{{val}}</li>
			</ul>
		</dd>
		<dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="z-font-size-14 z-color-888">购买须知</p>
		</dd>	
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-col">
			<p class="z-font-size-14 z-lineHeight-30" style="color:#f90">有效期</p>
			<p class="z-font-size-14 z-color-888">{{purchaseInfo.validityDate}}</p>
			<p class="z-font-size-14 z-lineHeight-30" style="color:#f90">不可用日期</p>
			<p class="z-font-size-14 z-color-888">{{purchaseInfo.unavailableDate}}</p>
			<p class="z-font-size-14 z-lineHeight-30" style="color:#f90">使用规则</p>
			<ul class="ub-box ub-col" >
				<li v-for="(val, idx) in purchaseInfo.rules" :key="idx" class="z-font-size-14 z-color-888 z-box-sizing-border z-lineHeight-24">{{val}}</li>
			</ul>
		</dd>
		<dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="ub-box ub-ver">
				<span class="z-font-size-14 z-color-888">
					<star></star>
				</span>
			</p>
			<p @click.stop="$openWin('/pages/comment/main')" class="ub-box ub-ver">
				<span class="z-font-size-14 z-color-888">{{commentsNum}}条评论</span>
				<i class="iconfont icon-xiayiyeqianjinchakangengduo z-font-size-12 z-color-888"></i>
			</p>
		</dd>
		<dd class="z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between">
			<ul class="ub-flex-1 ub-box ub-col">
				<li v-for="(val, idx) in comments" :key="idx" class="z-border-bottom-1-eee">
					<comment :comment="val" :isShowLike="false"></comment>
				</li>
			</ul>
		</dd>
		<dd @click.stop="$openWin('/pages/comment/main')" class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-h-8-px ub-box ub-between">
			<p class="z-margin-bottom-8-px ub-box ub-ver">
				<span style="color:#06c1ae" class="z-font-size-14 z-color-888">查看全部用户评价</span>
			</p>
			<p class="ub-box ub-ver">
				<i class="iconfont icon-xiayiyeqianjinchakangengduo z-font-size-13 z-color-888"></i>
			</p>
		</dd>
		<dd class="z-margin-top-8-px z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-between" style="border-bottom: 1px solid #f5f5f5">
			<p class="z-font-size-14 z-color-888">相关推荐</p>
		</dd>
		<dd class="z-width-100-percent z-box-sizing-border z-bg-color-fff z-padding-all-8-px ub-box ub-col">
        	<good v-for="(val, idx) in 2" :key="idx" :isLast="idx==1"></good>
        </dd>								
	  </dl>
	</scroll-view>
  </div>
</template>
<script>
	import good from "../../components/good.vue"
	import star from "../../components/star.vue"
	import comment from "../../components/comment.vue"
	export default {
		components: {good, star, comment},
	  	data () {
			return {
				indexImg: 'http://p0.meituan.net/deal/522fd16a9b25479496188b59476d1b941062402.jpg',
				mainTitle: '索菲特大酒店锦厨国际餐厅自助餐',
				subTitle: '单人自助晚餐',
				nowPrice: '308',
				normalPrice: '398',
				labels: [
					{name: '海鲜棒', num: '202', type: '1'}, 
					{name: '回头客', num: '97', type: '1'},
					{name: '干净卫生', num: '40', type: '1'}, 
					{name: '上菜快', num: '22', type: '1'},
					{name: '不推荐', num: '29', type: '0'},
					{name: '家庭聚餐', num: '13', type: '0'},
					{name: '朋友聚餐', num: '9', type: '0'}, 
					{name: '闺蜜聚会', num: '5', type: '0'},
					{name: '现做现卖', num: '4', type: '0'}, 
					{name: '请客', num: '4', type: '0'},
				],
				sellerName: '索菲特大酒店锦厨国际餐厅自助餐',
				sellAdress: '西山区环城南路777号昆明索菲特大酒店49楼',
				package: {
					packageName: '单人自助晚餐',
					notes: [
						'单人自助晚餐：周一至周四18:00-21:00',
						'餐厅预定入口: https://tableplus.accorplus.com?vc=KweeZeenRestaurantAccorASE1187',
						'锦厨国际餐厅位于昆明索菲特大酒店49楼，能够360度鸟瞰春城美景。',
						'我们为您提供400种以上的餐食自助，全场酒水畅饮，包括葡萄酒、各色软饮及果汁。',
						'更有专属定制化服务：凡周年纪念日/生日当天到店就餐的客人，将免费提供蛋糕一个(此项仅针对提前至少一天进行预约并说明过情况的客人。)',
						'温馨提示：儿童按身高收费，具体是0-110cm儿童免费；110cm-140cm儿童半价；140cm以上的全价。 另：如遇特殊活动时，需根据店里实际情况按实际价格补差价。',
					],
				},
				purchaseInfo: {
					validityDate: '2016.2.5 至 2018.6.14',
					unavailableDate: '周五至周日',
					rules: [
						'提前2天预订，周末及节假日提前2天以上预订。预订电话：0871-68639888转锦厨国际餐厅',
						'锦厨国际餐厅位于昆明索菲特大酒店49楼，能够360度鸟瞰春城美景。',
						'我们为您提供400种以上的餐食自助，全场酒水畅饮，包括葡萄酒、各色软饮及果汁。',
						'更有专属定制化服务：凡周年纪念日/生日当天到店就餐的客人，将免费提供蛋糕一个(此项仅针对提前至少一天进行预约并说明过情况的客人。)',
						'部分菜品因时令原因有所不同，请以店内当日实际供应为准',
						'提供免费WiFi',
						'停车位收费标准：免费停车',
					]
				},
				commentsNum: 6,
				comments: [
					{
						header: 'https://img.meituan.net/avatar/855458f5c24ab19951f382ee99533ad981495.jpg@37w_37h_1e_1c',
						name: 'AqU753874254',
						time: '2018-05-07', 
						star: '4.0',
						say: '菜品很多，强烈推荐龙虾，超级棒！每次来都吃撑！很满意的一家自主餐！生日当天海送了蛋糕、服务员“代玉琳”美女，服务态度超级好，热情，人也长的美美哒，给她一个赞！ ', 
						imgs: [
							'http://p0.meituan.net/shaitu/40b07a385f90bca838efa48a911bf491253024.jpg',
							'http://p0.meituan.net/shaitu/f6af829ff902040fb3225643b2775c1f111115.jpg',
							'http://p0.meituan.net/shaitu/e96132da9f76af022d6e521b2265ad70204304.jpg',
							'http://p0.meituan.net/shaitu/307d287b8d55f1d67dab188502a684ec158341.jpg',
						]
					},
					{
						header: 'https://p0.meituan.net/122.74/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png',
						name: 'PPL546030823',
						time: '2018-05-06', 
						star: '4.5',
						say: '环境很好，有昆明的夕阳相伴，谢谢美女服务员代玉琳的热忱服务，度过和朋友悠闲的晚餐时光🎈 #煎鹅肝# ', 
						imgs: [
							'http://p0.meituan.net/400.0/shaitu/bc52b03f7f091d6711b8a1ec024a0e6a83730.jpg',
							'http://p0.meituan.net/400.0/shaitu/053247a6b8ede53824435f23196971d2124167.jpg',
							'http://p0.meituan.net/400.0/shaitu/0783b3f70ab47607593dcba906c7d570147806.jpg',

						]
					},
				],
			}
		},
		methods: {
			previewImage(imgs=[], curIdx=0){
				wx.previewImage({current: imgs[curIdx], urls: imgs})
			},
			clickCall() {
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
    		wx.setNavigationBarTitle({title: this.mainTitle})
  		}
	}
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#e8e8e8}
  .indexImg{height: 170px;position: relative;}
  .indexImg-bk{position: absolute;bottom: 0;left: 0;z-index: 1;width: 100%;height: 30%;background: rgba(0,0,0,.3);padding: 5px 0px}
  .buyBtn{background: #f90;padding: 8px 12px;border-radius:3px}
  .label{border-radius:3px;background: #fff;padding: 3px 5px;margin: 0 5px 5px 0}
  .tuijian{color: #f90;border:1px solid #f90;}
  .butuijian{color: #999;border:1px solid #ddd;}
</style>
