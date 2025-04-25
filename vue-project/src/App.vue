<script>
import MyButton from './components/MyButton.vue';

export default{
  components:{
    MyButton
  },
  methods:{
    handleParentClick(){
      console.log('父组件的点击事件被触发')
    }
  }
}
</script>
<template>
  <MyButton v-on:click="handleParentClick"/>
</template>