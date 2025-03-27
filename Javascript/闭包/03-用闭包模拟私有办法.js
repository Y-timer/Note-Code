function createCounter(){
  let count = 0;

  function log(message){
    console.log(`[内部日志]${message}`);
  }
  return {
    increment(){
      count++;
      log("计数器增加");//调用私有办法
    },
    decrement(){
      count--;
      log("计数器减少");
    },
    getCount(){
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.getCount();
console.log(counter.getCount());

//尝试访问私有内容
console.log(counter.count);
counter.log("测试"); 
