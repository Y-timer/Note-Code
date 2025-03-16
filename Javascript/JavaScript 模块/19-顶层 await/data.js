const response = await fetch('https://api.example.com/config');
const config = await response.json();

// 导出配置对象
export default config;
