var express = require('express');
var app = express();
var port = process.env.PORT || 3030;

app.use(express.static(__dirname + '/public'));
app.listen(port);

console.log('app running on port %s',
            port);