function getSum(a,b){
  return a + b;
}
function formatText(text){};

//导出时重命名
export {
  getSum as sum, //导出时对外的名称变为 sum
  formatText
}

//导入时重命名
import {  } from "module";