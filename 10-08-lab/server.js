const express = require('express');

const app = express();


let greeting = 'Hello stranger';

app.get('/greeting/', (req, res) =>{
	res.send(greeting);
})


app.listen(3000, () =>{
	console.log('port 3000');
})