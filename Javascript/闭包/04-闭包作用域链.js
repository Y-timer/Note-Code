function outer(){
  const a = 1000;

  function middle(){
    const b = 2000;

    function inner(){
      const c = 3000;
      console.log(a + b + c);
  }
  return inner;
  }

  return middle();
}

const innerFunc = outer();
innerFunc();
