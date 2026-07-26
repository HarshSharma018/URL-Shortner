const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Home page'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(3000, () => console.log('Express server on 3000'));


////another 

//4. Real project pattern — fetching from DB using route param
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});



//6. Wildcard/catch-all routes (used for 404 handlers or SPA fallback):

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});