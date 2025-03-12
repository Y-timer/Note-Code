let ports = []; // 存储所有连接的端口
onconnect = (e) => {
  const port = e.ports[0];
  ports.push(port);

  port.onmessage = (e) => {
    ports.forEach(p => {
      p.postMessage(`Worker 转发: ${e.data}`);
    });
  };
};