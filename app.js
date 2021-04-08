const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello David, from AWS!! \n Now added new Stage to Pipeline'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
