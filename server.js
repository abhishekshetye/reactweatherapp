var express = require('express');
//access to express api

var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
    console.log('express is up 3000');
});
