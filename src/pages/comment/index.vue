<template>
  <div class="container">
    <!--评论类型tab栏-->
    <dl class="z-width-100-percent ub-box z-box-sizing-border">
      <dd @click.stop="clickTab(idx)" v-for="(val, idx) in tabs" :key="idx" :class="{'on': curIdx==idx}" class="ub-flex-1 ub-box ub-ver swiper-item z-box-sizing-border z-font-size-14 z-color-666 z-padding-v-10-px">{{val}}</dd>
    </dl>
    <!--相应评论类型的tab内容-->
    <swiper :current="curIdx" class="swiper-box" duration="300" style="height:calc(100vh - 30px)" @change="bindchange">
      <!--全部评论-->
      <swiper-item item-id="t1">
        <scroll-view scroll-y style="height: calc(100vh - 30px)" scroll-top="0">
          <dl class="z-margin-top-10-px ub-box ub-col z-width-100-percent z-padding-h-10-px z-box-sizing-border">
            <dd v-if="allComments.length > 0" class="z-border-bottom-1-eee" v-for="(val, idx) in allComments" :key="idx">
              <comment :comment="val"></comment>
            </dd>
            <p v-if="allComments.length === 0" class="ub-box ub-ver z-padding-v-10-px">
              <span class="z-font-size-13 z-color-888">暂无评论...</span>
            </p>
          </dl>
        </scroll-view>
      </swiper-item>
      <!--晒图评论-->
      <swiper-item item-id="t2">
        <scroll-view scroll-y style="height: calc(100vh - 30px)" scroll-top="0">
          <dl class="z-margin-top-10-px ub-box ub-col z-width-100-percent z-padding-h-10-px z-box-sizing-border">
            <dd v-if="hasImgComments.length > 0" class="z-border-bottom-1-eee" v-for="(val, idx) in hasImgComments" :key="idx">
              <comment :comment="val"></comment>
            </dd>
            <p v-if="hasImgComments.length === 0" class="ub-box ub-ver z-padding-v-10-px">
              <span class="z-font-size-13 z-color-888">暂无评论...</span>
            </p>
          </dl>
        </scroll-view>
      </swiper-item>
      <!--低分评论-->
      <swiper-item item-id="t3">
         <scroll-view scroll-y style="height: calc(100vh - 30px)" scroll-top="0">
          <dl class="z-margin-top-10-px ub-box ub-col z-width-100-percent z-padding-h-10-px z-box-sizing-border">
            <dd v-if="lowScoreComments.length > 0" class="z-border-bottom-1-eee" v-for="(val, idx) in lowScoreComments" :key="idx">
              <comment :comment="val"></comment>
            </dd>
            <p v-if="lowScoreComments.length === 0" class="ub-box ub-ver z-padding-v-10-px">
              <span class="z-font-size-13 z-color-888">暂无评论...</span>
            </p>
          </dl>
        </scroll-view>
      </swiper-item>
      <!--最近评论-->
      <swiper-item item-id="t4">
        <scroll-view scroll-y style="height: calc(100vh - 30px)" scroll-top="0">
          <dl class="z-margin-top-10-px ub-box ub-col z-width-100-percent z-padding-h-10-px z-box-sizing-border">
            <dd v-if="lastComments.length > 0" class="z-border-bottom-1-eee" v-for="(val, idx) in lastComments" :key="idx">
              <comment :comment="val"></comment>
            </dd>
            <p v-if="lastComments.length === 0" class="ub-box ub-ver z-padding-v-10-px">
              <span class="z-font-size-13 z-color-888">暂无评论...</span>
            </p>
          </dl>
        </scroll-view>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
  import comment from "../../components/comment.vue"
  export default {
    components: {comment},
    data () {
      return {
        curIdx: 0,
        tabs: [],
        allComments: [
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
            {
              header: 'https://img.meituan.net/122.74/avatar/5311913bf65406ba020854e2436c9ca156391.jpg',
              name: 'SWB34889218',
              time: '2018-04-18', 
              star: '5.0',
              say: '每次来都吃的好撑！菜品超级多！肖亚萍和茶宏燕两个小姐姐超级热情，超级体贴！', 
              imgs: []
            },
            {
              header: 'https://p0.meituan.net/122.74/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png',
              name: 'smsaikyo',
              time: '2018-04-13',
              star: '3.8', 
              say: '真的不错呢【口味】【环境】【服务】', 
              imgs: []
            },
            {
              header: 'https://img.meituan.net/122.74/avatar/5e1702cffcb2045e5703569dfec6aa5743059.jpg',
              name: 'Zjx983004122',
              time: '2018-04-12', 
              star: '3.6',
              say: '菜品非常好！环境高大上！如果你爱你的姑娘就带她来索菲特锦厨国际餐厅吧！奥对了我真的很想给服务生李艺鑫六星好评！服务太到位了，像一家人一样！李艺鑫下次因为你的服务而来。', 
              imgs: ['http://p0.meituan.net/400.0/shaitu/290aad74bf18e7cd1409a62d96bd2106178617.jpg']
            },
            {
              header: 'https://p0.meituan.net/122.74/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png',
              name: 'pny1980',
              time: '2018-04-10', 
              star: '1.0',
              say: '菜品一般，团购就不给开发票，投诉到底我就不信了。最搞笑的就是用餐当中房顶漏水！', 
              imgs: []
            },
          ],
          hasImgComments: [],
          lowScoreComments: [],
          lastComments: [],
      }
    },
    methods: {
      bindchange(e) {
        this.curIdx = e.target.current
      },
      clickTab(i) {
        if (this.curIdx === i) return
        this.curIdx = i
      },
      // 比较日期是否在当前日期的recently范围之间
      compareDateToNow(time) {
        const compare = new Date(time.replace(/-/g,'\/')).getTime()
        const recently = 86400000 * 3 // 定义三天之内
        return new Date().getTime() - recently <= compare
      },
      initAllComments(){
        // 晒图评论类型：从全集过滤出有图片的集合
        this.hasImgComments = this.allComments.filter(item => {
          if(item.imgs.length > 0) return item
        })
        // 低分评论类型：从全集过滤出分数小于3的集合
        this.lowScoreComments = this.allComments.filter(item => {
          if((item.star|0) < 3) return item
        })
        // 最新评论类型：从全集过滤出3天之内的集合
        this.lastComments = this.allComments.filter(item => {
          if(this.compareDateToNow(item.time)) return item
        })
        this.curIdx = 0
        this.tabs = new Array(4)
        this.tabs[0] = '全部（' + this.allComments.length + '）'
        this.tabs[1] = '晒图（' + this.hasImgComments.length + '）'
        this.tabs[2] = '低分（' + this.lowScoreComments.length + '）'
        this.tabs[3] = '最新（' + this.lastComments.length + '）'
      },
    },
    mounted() {
      this.initAllComments()
    },
    onShow () {
      wx.setNavigationBarTitle({title: '用户评价'})
    }
  }
</script>
<style scoped>
  .container{width:100%;height:100vh;background:#fff;}
  .swiper-item{border-bottom: 1px solid #ddd;}
  .on{color: #06c1ae;border-bottom: 3px solid #06c1ae;}
  .like{border-radius: 10px; padding: 2px 13px;border:1px solid #eee;}
</style>
