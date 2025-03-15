//实现合并模块

//方式 1：显示导入再导出
import multiply, {add} from "./math.js";
export { add, multiply };

//方式2：直接转发导出
export { capitalize, trim } from './string.js';