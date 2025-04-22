<script>
export default {
  props:['originalPrice'],
  computed:{
    //对另一个进行转化处理
    discountedPrice(){
      return (this.originalPrice * 0.8).toFixed(2)
    }
  }
}
</script>


<template>
  <div class="price">
    <p>原始价格：{{ originalPrice }}元</p>
    <p>折扣价格：{{ discountedPrice }}元</p>
  </div>
</template>