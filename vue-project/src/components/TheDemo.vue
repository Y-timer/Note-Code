<template>
  <div class="counter">
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 响应式状态
const count = ref(0)

// 方法
const increment = () => {
  count.value++
}

const reset = () => {
  count.value = 0
}
</script>

<style scoped>
.counter {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  display: inline-block;
}

button {
  margin: 0 5px;
  padding: 5px 15px;
  cursor: pointer;
}

button:hover {
  background-color: #f0f0f0;
}

</style>