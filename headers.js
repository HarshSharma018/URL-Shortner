const http = require('http') 
const server = http.createServer((req, res) => {
  console.log(req.headers);
  // {
  //   host: 'localhost:3000',
  //   'user-agent': 'curl/8.4.0',
  //   accept: '*/*',
  //   authorization: 'Bearer abc123',
  //   'content-type': 'application/json'
  // }
  //res.setHeader('Content-Type', 'application/json');
  //res.setHeader('X-Powered-By', 'my-server');
  res.end('check your terminal');
});
server.listen(3001 , ()=>{
    console.log('running on: http://localhost:3001')
})