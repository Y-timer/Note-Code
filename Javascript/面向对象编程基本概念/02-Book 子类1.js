class Book {
  //构建函数
  constructor(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
  }
  //方法：获取书籍摘要
  getSummary(){
    return `${this.title} 由 ${this.author} 于 ${this.year} 出版`;
  }
  //方法：判断一本书是否是老书
  isOld(){
    const currentYear = new Data().getFullYear();
    return currentYear - this.year > 50;
  }
}

class EBook extends Book{
  constructor(title,author,year,format){
    super(title,author,year);//调用父类构建函数
    this.format = format;//子类特有属性
  }

  getSummary(){
    return `${super.getSummary()} 格式为${this.format}。`;
  }
}