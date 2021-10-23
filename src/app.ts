import express from 'express';

const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(port,() => {
  return console.log(`Server is listening on port ${port}`);
});
