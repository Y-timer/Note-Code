<script>
import PropsDemo2 from './components/PropsDemo2.vue';
export default {
    components:{
        PropsDemo,
        PropsDemo2
    },
  data(){
    return {
        dynamicValue:10
        }
    }
  }

</script>

<template>
     <div>
        <PropsDemo2 v-bind:initialCounter="5" />
        <PropsDemo2 v-bind:initialCounter="dynamicValue" />
     </div>
</template>

<style scoped>

</style>
