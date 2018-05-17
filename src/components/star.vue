<template>
	<div class="ub-box ub-ver-v z-width-100-percent">
      <div v-for="(val, i) in currArrNum" :key="i" class="stars iconfont icon-shoucang">
      	<span class="iconfont icon-shoucang" :style="{width:val+'%'}"></span>
      </div>
      <span v-if="isShowNum" style="color:#f90" class="z-font-size-14 z-margin-left-10-px">{{num}}分</span>
	</div>
</template>
<script>
  export default {
  	props: {
  		'isShowNum': {
  			type: Boolean,
  			default: true
  		},
      num: {
        type: String,
        default: '4.5'
      }
  	},
    data () {
      return {
      	currArrNum: [100, 100, 100, 100, 100],
      }
    },
    mounted() {
    	this.calcArrNum()
    },
    methods: {
    	calcArrNum() {
        let [a, b] = this.num.split('.')
        for(let i = 0; i < this.currArrNum.length; i++) {
          if (i <= (a - 1)) {
            this.currArrNum[i] = 100
          }else if (i == a) {
            this.currArrNum[i] = 100 * (b / 10)
          } else {
            this.currArrNum[i] = 0
          }
        }
    	}
    },
  }
</script>
<style scoped>
	.stars{font-size: 14px;position: relative;display: inline-block;color: #eee;}
  	.stars span{font-size: 14px;position: absolute;top: 0px;left: 0px;overflow: hidden;color: #f90;}
</style>