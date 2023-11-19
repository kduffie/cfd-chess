import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../static')));

app.get('/', (req, res) => {
  res.contentType('text/html');
  const html = `
<!doctype html>
<html lang="en">
  <head>
    <title>Chess</title>
    <link rel="stylesheet" href="/styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
  `;
  res.send(html);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
