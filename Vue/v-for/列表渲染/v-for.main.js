const { createApp } = Vue
  
  createApp({
    data() {
      return {
        todoArray:[
          "Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"
        ],
        inputText:""
      };
    },
    
    methods: {
      addTodo() {
        if(!this.inputText.trim().length){
          alert("Please enter todo text");
          this.inputText = "";
          return;
        }

        this.todoArray.push(this.inputText);
        this.inputText = ""
      },

      removeTodo(removeIdx){
        this.todoArray = this.todoArray.filter((_todo,idx) => idx !== removeIdx);
      },
    },
  }).mount('#app')