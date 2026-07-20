//const http = require(http)
//const url = require('url')

//const server = http.createserver



const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = also parse query string
  console.log(parsedUrl.pathname); // '/products'
  console.log(parsedUrl.query);    // { category: 'shoes', sort: 'price', page: '2' }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(parsedUrl.query));
});

server.listen(3000);

