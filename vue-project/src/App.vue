<script>
import componentEvents from './components/componentEvents.vue';

export default {
  components:{
    componentEvents
  },
  data(){
    return {
      //响应式变量
      onceClicked:false,
      clickCount:0
    }
  },
  methods:{
    handleOnceClick(){
      this.onceClicked = true
    },
    handleCounter(eventData){
      alert('收到事件数据：',eventData)
      this.clickCount++
    }
  }
}
</script>

<template>
  <div id="app">
    <h3>事件演示</h3>
    <componentEvents
      v-on:click-one.once="handleOnceClick"
      v-on:counter-increase="handleCounter" />
      <p>一次性点击状态：{{ onceClicked ? '已触发' :'未触发' }}</p>
      <p>累计点击次数：{{ clickCount }}</p>
  </div>
  
</template>

<style scoped>

</style>
