// app.js
const http = require('http');
const port = process.env.PORT || 3000;
const interval = process.env.INTERVAL || 'default_interval';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello from Node.js! Interval is set to: ${interval}`);
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
