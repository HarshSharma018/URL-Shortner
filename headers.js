const http = require('http') 
const server = http.createServer((req, res) => {
  console.log(req.headers);
  // {
  //   host: 'localhost:3000',
  //  'user-agent': 'curl/8.4.0',
  //   accept: '*/*',
  //   authorization: 'Bearer abc123',
  //  'content-type': 'application/json'
  // }
  //res.setHeader('Content-Type', 'application/json');
  //res.setHeader('X-Powered-By', 'my-server');
  res.end('check your terminal');
});
server.listen(3001 , ()=>{
    console.log('running on: http://localhost:3001')
})
/*The headers you'll actually deal with constantly:
Content-Type — tells the receiver what format the body is in.

application/json — JSON data
text/html — HTML page
text/plain — plain text
multipart/form-data — file upload*/

//The key mental model: CORS is enforced by the browser, not your server. Your server always processes the request fine — it's the browser that looks at these response headers and decides whether to let your frontend JS read the response. That's why Postman/curl never show CORS errors — only browsers enforce it.
//Say "next" when ready for Status Codes.