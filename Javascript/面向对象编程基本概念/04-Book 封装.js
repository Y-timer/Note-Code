class Book {
  #year;
  constructor(title,author,year){
    this.title = title;
    this.author = author;
    this.#year = year;
  }
  //公共方法：获取年份
  getYear(){
    return this.#year;
  }

  //公共方法：修改年份
  setYear(newYear){
    if(newYear > 0 && newYear <= new Date().getFullYear()){
      this.#year = newYear;
    } else{
      console.log("无效的年份！")
    }
  }

  canBeBorrowed(){
    const currentYear = new Date().getFullYear();
    return currentYear - this.#year <= 50;
  }

  getSummary(){
    return `${this.title} 由 ${this.author} 于 ${this.#year} 年出版。`;
  }
}
