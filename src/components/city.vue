<template>
	<div class="z-width-100-percent">
    <scroll-view scroll-y style="height:calc(100vh);" scroll-top="0" :scroll-into-view=currView>
      <dl class="ub-box ub-col">
        <dd class="z-width-100-percent z-margin-bottom-5-px z-bg-color-fff ub-box ub-ver">
          <div class="search ub-box ub-ver-v">
            <i class="iconfont icon-sousuo z-color-666 z-font-size-16"></i>
            <input class="ub-flex-1 z-font-size-14 z-color-666 z-padding-v-5-px z-margin-left-8-px" placeholder="城市/拼音"/>
          </div>
        </dd>
        <dd class="z-width-100-percent z-bg-color-fff ub-box z-border-bottom-1-eee">
          <span id="cc" class="z-font-size-14 z-font-weight-bold z-color-333 z-padding-all-8-px">当前：昆明</span>
        </dd>
        <dd class="z-width-100-percent z-bg-color-fff ub-box">
          <span class="z-font-size-14 z-color-333 z-font-weight-bold z-padding-all-8-px">定位/最近访问</span>
        </dd>
        <dd class="z-width-100-percent z-bg-color-fff ub-box">
          <ul class="ub-box ub-wrap z-padding-all-8-px">
            <li @click.stop="clickCity(city)" v-for="(city, idx) in visitCityList" :key="idx" class="hotcity z-font-size-14 z-color-333">{{city.name}}</li>
          </ul>
        </dd>
        <dd class="z-width-100-percent z-bg-color-fff ub-box">
          <span class="z-font-size-14 z-color-333 z-font-weight-bold z-padding-all-8-px">热门城市</span>
        </dd>
        <dd class="z-width-100-percent z-bg-color-fff ub-box">
          <ul class="ub-box ub-wrap z-padding-all-8-px">
            <li @click.stop="clickCity(city)" v-for="(city, idx) in hotCityList" :key="idx" class="hotcity z-font-size-14 z-color-333">{{city.name}}</li>
          </ul>
        </dd>
        <dd class="z-width-100-percent z-bg-color-fff ub-box">
          <span class="z-font-size-14 z-color-333 z-font-weight-bold z-padding-all-8-px">所有城市</span>
        </dd>
        <dd class="ub-box ub-col">
          <div v-for="(val, idx) in cityList" :key="idx" class="z-width-100-percent z-bg-color-fff ub-box ub-col">
            <span :id="val.initial" class="ub-flex-1 z-padding-all-8-px z-font-size-14 z-color-888 codeBK">{{val.initial}}</span>
            <ul class="ub-box ub-col">
              <li @click.stop="clickCity(city)" v-for="(city, i) in val.list" :key="i" class="city ub-flex-1 z-font-size-14 z-color-666">{{city.name}}</li>
            </ul>
          </div>
        </dd>
      </dl>
    </scroll-view>
    <!--fixed部分-->
    <dl class="fixList ub-box ub-col ub-ver-v">
      <dt class="z-font-size-12 z-margin-bottom-3-px" style="color:#06c1ae">最近热门</dt>
      <dd @click.stop="clickCode(val)" v-for="(val, idx) in cityList" :key="idx" class="z-font-size-12" style="margin-bottom:2px;color:#06c1ae;padding:0 50px;">{{val.initial}}</dd>
    </dl>
	</div>
</template>
<script>
  import cityData from "../utils/cityData.js"
  export default {
    data () {
      return {
        currView: '',
        visitCityList: [
          {zip: "010", name: "北京"},
          {zip: "021", name: "上海"},
        ],
        hotCityList: [
          {zip: "010", name: "北京"},
          {zip: "021", name: "上海"},
          {zip: "020", name: "广州"},
          {zip: "0755", name: "深圳"},
          {zip: "022", name: "天津"},
          {zip: "028", name: "成都"},
          {zip: "0571", name: "杭州"},
          {zip: "023", name: "重庆"},
          {zip: "025", name: "南京"},
        ],
        cityList: [],
        selectCity: {},
      }
    },
    onLoad() {
      this.initCityList()
      this.currView = ''
    },
    methods: {
      initCityList() {
        this.cityList = cityData
      },
      clickCode(obj){
        if (obj.list.length < 1) return
        this.currView = obj.initial
      },
      clickCity(city) {
        this.$emit('cityService', city.name)
      }
    },
  }
</script>
<style scoped>
  .search{background: #f5f5f5;width: 90%;border-radius: 15px;padding: 0 10px}
  .codeBK{background: #f5f5f5}
  .hotcity{border:1px solid #f5f5f5;padding: 6px 12px;margin: 0 8px 8px 0}
  .city{padding: 10px 8px;border-bottom: 1px solid #f5f5f5}
  .fixList{position: fixed;right:5px;top: 12%;z-index: 10;width: 30px;background: transparent;}
</style>