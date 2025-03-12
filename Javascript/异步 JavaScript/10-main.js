//先创建一个新的 worker
const worker = new Worker("11-generate.js");

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota: quota,
  });
});

//当 worker 给主线程回发一条信息时，为用户更新 output 框，包含生成的质数。
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `完成生成 ${message.data} 个质数!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});