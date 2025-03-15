//创建一个 用户信息管理模块
let users = [];

//模板对象
const userManager = {
  //添加用户
  addUser(name){
    users.push({id:Date.now(),name})
  },

  //获取用户列表
  getUsers(){
    return [...users];
  },

  //获取用户数量
  getUserCount(){
    return users.length;
  }
};

export default userManager;
