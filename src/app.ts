import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.contentType('text/html');
  const html = `
<!doctype html>
<html lang="en">
  <head>
    <title>Chess</title>
  </head>
  <body>
    <h1>Chess</h1>
    <p>
      <button>Go!</button>
    </p>
  </body>
</html>
  `;
  res.send(html);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
