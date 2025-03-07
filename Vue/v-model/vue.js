const { createApp } = Vue

const appObj = {
  data() {
    return {
      inputText:""//响应式变量
    }
  }
}
  createApp(appObj).mount('#app');