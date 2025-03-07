const { createApp } = Vue;
const app = {
  data() {
    return {
      textColor: "red-text",
      isDisabled:false,
    };
  },
  methods:{
    handleClickTodisable(){
      this.isDisabled = true;
    },
    handleClickToEnable(){
      this.isDisabled = false;
    }
  }
};
createApp(app).mount("#app");