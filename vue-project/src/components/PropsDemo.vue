<!-- 子组件 -->
<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ age }}</p>
    <p v-if="isVIP">🌟 VIP 会员</p>
  </div>
</template>

<script>
export default {
  props:['name','age','isVIP'] 
}
</script>