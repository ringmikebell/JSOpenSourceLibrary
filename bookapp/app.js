var express = require('express');

var app = express();
var port = 5000;
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(request, response){
	response.send("Hello World");
});

app.get('/books', function(request, response){
	response.send("Hello books");
});

app.listen(5000, function(err){
	console.log('Runnong on port' + port);
});
