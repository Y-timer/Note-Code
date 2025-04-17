<style scoped>
.checks{
  margin-top:20px;
}
.selecters{
  margin-top:20px;
}
</style>
<template>
  <div>
    <span>Mutiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple line"></textarea>

    <div>
      <!-- 简单的复选框 -->
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checked">{{ checked }}</label>
    </div>

    <div class="checks">
      <!-- 将多个复选框绑定到同一个数组或集合的值 -->
       <div>Checked names：{{ checkedNames }}</div>
       <input type="checkbox" id="Jack" value="Jack" v-model="checkedNames" />
       <label for="jack">Jack</label>
       <input type="checkbox" id="Tom" value="Tom" v-model="checkedNames" />
       <label for="tom">Tom</label>
       <input type="checkbox" id="Kavin" value="Kavin" v-model="checkedNames" />
       <label for="jack">Kavin</label>
    </div>

    <div class="selecters">
      <div>Selected: {{ selected }}</div>
      <select v-model="selected">
        <option disabled value="">Please select  one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
    </div>
  </div>
  
</template>

<script>

  export default{
    name:"Message",
    data(){
      return {
        message:"",
        checked:false,
        checkedNames:[],
        selected:""
      }
    }
  }
</script>