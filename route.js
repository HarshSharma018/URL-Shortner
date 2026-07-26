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

//app.get('/users/:id', (req, res) => {
//  console.log(req.params); // { id: '42' }
//  res.json({ userId: req.params.id });
//});

/* order of routine 
app.get('/users/new', (req, res) => { /* create-user form 
app.get('/users/:id', (req, res) => { /* get user by id });
*/

/*Use route params for things required to identify the resource: /products/:id
Use query params for optional filters/modifiers on that resource: /products/:id?fields=name,price*/

app.use(express.json()); // MUST come before your routes — parses JSON body

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  res.status(201).json({ message: 'User created', name, email });
});