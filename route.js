/*const http = require('http');

const server = http.createServer((req, res) => {
  const parts = req.url.split('/').filter(Boolean); // '/users/42' -> ['users', '42']

  if (parts[0] === 'users' && parts[1]) {
    const userId = parts[1];
    res.end(JSON.stringify({ userId }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000);*/

app.get('/users/:id', (req, res) => {
  console.log(req.params); // { id: '42' }
  res.json({ userId: req.params.id });
});