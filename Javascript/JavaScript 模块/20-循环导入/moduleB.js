// import { valueA } from "./moduleA";
// export function funcB(){
//   return valueA * 4;
// }

//方案一
// import { valueA } from "./constants.js";
// export function funcB(){
//   return valueA * 3; 
// }

//方案二
// import { valueA } from "./moduleA.js";
// export function funcB(){
//   return valueA * 2;
// }

//方案三
import { valueA } from "./moduleA.js";
export function funcB(){
  return valueA * 2;
}