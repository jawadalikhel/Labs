const express = require('express');
const app = express();

const greeting = 'Hello you ';

app.get('/greeting', (request, response) =>{
	response.send(greeting);
});

app.get('/greeting/:name', (request, response) =>{
	response.send(greeting + request.params.name);
})


app.listen(3000, () =>{
	console.log('I am listening');
})