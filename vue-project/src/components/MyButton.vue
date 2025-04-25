<template>
  <button v-on:click="handleInternalClick">点鸡窝</button>
</template>

<script>
export default{
  methods:{
    handleInternalClick(){
      console.log('子组件的点击事件被触发')
    }
  }
}
</script>