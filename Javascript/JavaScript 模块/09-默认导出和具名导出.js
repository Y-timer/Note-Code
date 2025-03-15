// export default function sum(a,b){
//   return a + b;
// }

import exp from "constants";

//直接导出字面量
//export default 42;

//导出匿名函数
//export default function (a, b) { return a * b; };

//先定义后导出
const PI = 3.1415;
export default PI;

//具名导出变量
export const number = 666;

//具名导出函数
export function log(message) {
  console.log(message);
}

//先定义再批量导出
const photoNumber = 123456;
const Name = "Kevin";
export { photoNumber , Name };