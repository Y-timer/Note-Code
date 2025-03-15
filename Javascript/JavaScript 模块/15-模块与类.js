// //定义模块并导出类
// export default class User {
//   constructor(name,email){
//     this.name = name;
//     this.email = email;
//   }
//   greet(){
//     return `Hello,${this.name}`;
//   }
//   static validataEmail(email){
//     return /@/.test(email);
//   }
// }

//定义模块并导出多个类
export class Shape {
  constructor(color){
    this.color = color;
  }

  getArea(){
    throw new Error("必须由子类实现");
  }
}

export class Circle extends Shape{
  constructor(color,radius){
    super(color);
    this.radius = radius;
  }

  getArea(){
    return  Math.PI * this.radius ** 2;
  }
}

export class Square extends Shape{
  constructor(color,side){
    super(color);
    this.side = side;
  }
  getArea(){
    return this.side ** 2;
  }
}