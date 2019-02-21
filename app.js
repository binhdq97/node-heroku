var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/file', function (req, res) {
   res.download("./Express Handbook.pdf", 'express.pdf');
})

app.listen(port, function () {
   console.log("Server listening at ", port)
})
