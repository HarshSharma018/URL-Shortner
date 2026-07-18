const http = require('http');

const server = http.createServer((req, res) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: 'No token provided' }));
  }
  const token = authHeader.split(' ')[1]; // 'Bearer <token>' -> take the token
  res.end(JSON.stringify({ token }));
});