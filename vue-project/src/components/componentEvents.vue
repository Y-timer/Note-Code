<template>
  <div class="button-group">
    <!-- 直接使用$emit方法触发自定义事件 -->
    <button v-on:click="$emit('clickOne')">只能点一次</button>
    <!-- 方法中触发事件 -->
    <button v-on:click="handleClick">累计点击</button>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$emit('counterIncrease',{
        timestamp:new Date().toISOString()
      })
    }
  }
}
</script>
