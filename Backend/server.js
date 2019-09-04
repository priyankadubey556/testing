const http = require('http')

const app = require('./app')

// const server = http.createServer((req, res) => {
//     res.end("Hello");
//     console.log("server created successfully");
// });
// server.listen(3011)

const server = http.createServer(app);

server.listen(3020)