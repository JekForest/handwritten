const http = require("http");

const server = http.createServer((req, res) => {
  // 👇 关键：允许跨域
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.url === "/api/user") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ id: 1, name: "Alice" }));
  }
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
