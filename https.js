//server js
// const https = require('http');

// const server = https.createServer((req , res)=> {
//     res.end("hello server")

// });
// server.listen(3000 , ()=>{
//     console.log('server running on http://localhost:3000')
// })

//const http = require('http');

//const server = http.createServer((req, res) => {
 // console.log(req.method);   // GET, POST, etc.
 // console.log(req.url);      // /home, /api/users, etc.

  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
 // res.end('You hit: ' + req.url);
//});

//server.listen(3000, () => console.log('running on 3000'));

/*
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome home' }));
  } 
  else if (req.url === '/api/users' && req.method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([
      { id: 1, name: 'Harsh' },
      { id: 2, name: 'Rahul' }
    ]));
  } 
  else if (req.url === '/api/users' && req.method === 'POST') {
    res.statusCode = 201;
    res.end(JSON.stringify({ message: 'User created' }));
  } 
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3001, () => console.log('running on https://localhost:3001'))
*/
const http = require('http')
const server = http.createServer((req, res) => {
  console.log(req.method); // GET, POST, PUT, DELETE
  console.log(req.url);    // /users/5?active=true

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'got your request' }));
});

server.listen(3000 , ()=>{
  console.log("Running on port: http://localhost:3000")
})