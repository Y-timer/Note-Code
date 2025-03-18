const myDate = new Date(2004, 10, 1);

console.log(myDate.getYear()); // 104

myDate.getYear = function () {
  console.log("2004！");
};

myDate.getYear(); // '2004！'