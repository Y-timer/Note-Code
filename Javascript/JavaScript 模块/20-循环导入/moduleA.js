// import {funcB} from "./moduleB";

// export const valueA = 1010;
// export function funcA(){
//   console.log("funcA 调用 funcB：", funcB());
// }

//方案一：重构代码消除循环依赖
// import { funcB } from "./moduleB.js";
// import { valueA } from "./constants.js";

// export function funcA(){
//   console.log("funcA 调用 funcB:",funcB());
// }

//方案二：延迟导入
// export const valueA = 10;
// export async function funA() {
//   const { funcB } = await import("./moduleB.js");
//   console.log("funcA 调用 funcB:",funcB()); 
// }

//方案三
import { valueA } from "./constants.js";

export const valueA = 10;
export function funcA(){
  console.log("funcA 调用 funcB:",funcB());
}