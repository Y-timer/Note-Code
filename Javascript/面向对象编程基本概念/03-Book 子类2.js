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

class PrintedBook extends Book {
  constructor(title,author,year,pages,weight){
    super(title,author,year);
    this.pages = pages;
    this.weight = weight; 
  }

  getSummary(){
    return `${super.getSummary()} 共 ${this.pages}页。`;
  }
  isHeavy(){
    return this.weight > 1000;
  }
}