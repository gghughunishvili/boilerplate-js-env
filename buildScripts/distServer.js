import express from 'express';
import path from 'path';
import open from 'open';
import comporession from 'compression';
import compression from 'compression';

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {id: 1, firstName: "John", lastName: "Doe", email: "john_doe@example.com"},
    {id: 2, firstName: "Jane", lastName: "Doe", email: "jane_doe@example.com"}
  ]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open('http://localhost:' + port);
  }
});
