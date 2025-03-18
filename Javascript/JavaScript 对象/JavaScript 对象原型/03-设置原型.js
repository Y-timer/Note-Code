//使用Object.create()
// const Prototype = {
//   greet(){
//     console.log("Hello!");
//   },
// };

// const newPrototype = Object.create(Prototype);
// newPrototype.greet();


//使用构建函数
const personPrototype = {
  greet(){
    console.log(`你好，我的名字是 ${this.name}`);
  },
};

function Person(name){
  this.name = name;
}

Object.assign(Person.prototype.greet = personPrototype.greet);