//server js
// const https = require('http');

// const server = https.createServer((req , res)=> {
//     res.end("hello server")

// });
// server.listen(3000 , ()=>{
//     console.log('server running on http://localhost:3000')
// })

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method);   // GET, POST, etc.
  console.log(req.url);      // /home, /api/users, etc.

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('You hit: ' + req.url);
});

server.listen(3000, () => console.log('running on 3000'));