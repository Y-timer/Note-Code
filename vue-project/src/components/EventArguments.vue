<template>
  <div class="buttons">
    <!-- 传递固定值 -->
    <button v-on:click="$emit('increase-by',1)">+1</button>

    <!-- 传递动态值 -->
    <button v-on:click="handleClick(10)">+10</button>
  </div>
</template>

<script>
export default{
  methods:{
    handleClick(step){
      this.$emit('increase-by',step)
    }
  }
}
</script>