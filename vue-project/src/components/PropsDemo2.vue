<template>
  <div class="counter">
    <p>初始值来自 prop：{{ initialCounter }}</p>
    <p>当前计数：{{ counter }}</p>
    <button v-on:click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  props:['initialCounter'],
  data(){
    return {
      counter: this.initialCounter
    }
  }
}
</script>