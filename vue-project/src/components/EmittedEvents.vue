<template>
  <button v-on="$emit('increment')">点击我+1</button>
</template>

<script>
export default{
  emits:['increment']
}
</script>