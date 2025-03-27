// 示例1
// function TheName(){
//   const name = "Kevin";
//   function displayName(){
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = TheName();
// myFunc(); 

//示例二
function makeAdder(x){
  return function(y){
    return x + y;
  };
}

const num1 = makeAdder(5);
const num2 = makeAdder(1010);

console.log(add(5));
console.log(add(7));