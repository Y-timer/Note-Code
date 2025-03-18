//原型链
const myObject = {
  city: "Keivn",
  greet(){
    console.log(`来自${this.city}的问候`);
  },
};
myObject.greet();