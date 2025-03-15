document.getElementById("loadBtn").addEventListener("click",async() =>
{
  //点击按钮后动态加载模块
  try{
    //动态导入模块
    const calculator = await import("./calculator.js");
    const result = calculator.add(1100,3);

    //显示结果
    document.getElementById("result").textContent = `1100 + 3 =${result}`;
  }catch(error){
    console.error("模块加载失败：",error);
    document.getElementById("result").textContent = "功能加载失败！";
  }

})