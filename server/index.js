import express from 'express';

let app = express();

app.get('/*', (req, res) => {
  res.send('hello world');
});

app.listen(8080, () => console.log('Server listening on port 8080'));