<template>
  <div class="z-width-100-percent ub-box z-padding-v-10-px">
    <div class="z-margin-right-10-px">
      <img class="z-img-cover" :src="comment['header']" style="width:40px;height:40px;border-radius:50%">
    </div>
    <ul class="ub-flex-1 ub-box ub-col">
      <li class="ub-box ub-between z-margin-bottom-3-px">
        <span class="z-font-size-14 z-color-333">{{comment.name}}</span>
        <span class="z-font-size-12 z-color-888">{{comment.time}}</span>
      </li>
      <li class="ub-box ub-between z-margin-bottom-3-px">
        <star :isShowNum="false" :num="comment.star"></star>
      </li>
      <li class="ub-box z-margin-bottom-8-px">
        <p class="z-font-size-14 z-color-333 z-lineHeight-22">{{comment.say}}</p>
      </li>
      <li v-if="comment.imgs.length > 0" class="ub-box z-margin-bottom-8-px">
        <div @click.stop="previewImage(comment.imgs, i)" class="z-margin-right-5-px z-width-25-percent" v-for="(img, i) in comment.imgs" :key="i">
          <img class="z-img-cover" style="width:100%;height:70px;" :src="img">
        </div>
      </li>
      <li v-if="isShowLike" class="ub-box ub-end">
        <div class="like ub-box ub-ver">
          <i class="iconfont icon-xihuan z-font-size-14 z-margin-right-5-px z-color-999"></i>
          <span class="z-font-size-12 z-color-666">赞</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import star from "./star.vue"
  export default {
    props: {
      comment: {
        type: Object
      },
      isShowLike: {
        type: Boolean,
        default: true
      },
    },
    components: {star},
    data () {
      return {}
    },
    mounted() {},
    methods: {
      previewImage(imgs=[], curIdx=0){
        wx.previewImage({current: imgs[curIdx], urls: imgs})
      },
    },
  }
</script>
<style scoped>
	.like{border-radius: 10px; padding: 2px 13px;border:1px solid #eee;}
</style>