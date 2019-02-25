const express = require('express');
const express_static = require('express-static');
const app = express();
const PORT = 9000;


app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/m/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/m/:title_url/', function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express_static('./server/public'));

// app.use('/m/*/', serve(__dirname + '/public/'));
// app.use('/m/*/img', serve(__dirname + '/public/img'));



const server = app.listen(PORT, function() {
  console.log(`Proxy Server listening on port ${PORT}!`)
});