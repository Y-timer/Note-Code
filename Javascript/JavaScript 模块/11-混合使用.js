export default class User {
  constructor(name) {
    this.name = name;
  }
}

// 具名导出（辅助功能）
export const ROLES = ["admin", "user"];
export function validateEmail(email) {
  return /@/.test(email);
}