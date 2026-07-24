//const http = require(http)
//const url = require('url')

//const server = http.createserver



/*
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true = also parse query string
  console.log(parsedUrl.pathname); // '/products'
  console.log(parsedUrl.query);    // { category: 'shoes', sort: 'price', page: '2' }

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(parsedUrl.query));
});

server.listen(4000);
console.log('runnning on: http://localhost:4000')
*/

const http = require('http');
const { URL } = require('url');

const server = http.createServer((request, response) => {
  const myurl = new URL(request.url, `http://${request.headers.host}`);

  console.log(myurl.pathname);
  console.log(myurl.searchParams.get('category'));
  console.log(myurl.searchParams.get('sort'));

  const allParams = Object.fromEntries(myurl.searchParams);
  response.end(JSON.stringify(allParams));
});

server.listen(3000, () => {
  console.log('running on port: http://localhost:3000');
});

/* some more details in projects 
// URL: /products?page=2
console.log(req.query.page);        // '2' (string, NOT number 2)
console.log(req.query.page === 2);  // false!
Classic bug: doing if (req.query.page > 5) works by accident (JS coerces),
 but req.query.page === 2 silently fails. Always explicitly convert:
 const page = parseInt(req.query.page) || 1; // fallback to 1 if missing/invalid
