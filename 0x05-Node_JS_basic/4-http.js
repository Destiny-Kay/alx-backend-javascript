const http = require('http');

const HOST = 'localhost';
const PORT = 1245;

const app = http.createServer();

app.on('request', (_, res) => {
  const responsePayload = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responsePayload.length);
  res.statusCode = 200;
  res.write(Buffer.from(responsePayload));
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening on http://${HOST}:${PORT}\n`);
});

module.exports = app;
