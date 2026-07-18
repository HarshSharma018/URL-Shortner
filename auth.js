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

//cors snippet
/*res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');*/


/*1)Access-Control-Allow-Origin: '*' — tells the browser "any frontend domain can call this API." In 
production you'd replace * with your actual frontend URL (e.g. https://myapp.com) for security —
 * is fine for learning/dev only.

2)Access-Control-Allow-Methods — whitelist of HTTP methods the frontend is allowed to use
 against this server.

3)Access-Control-Allow-Headers — whitelist of which headers the frontend is allowed 
to send (so if your frontend sends a custom header not listed here, browser blocks it too).*/