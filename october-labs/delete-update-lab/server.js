const express = require('express');
const app = express();
const People = require('./models/people');


app.get('/', (req, res) =>{
	res.send('hey hey hey working hard');
})

app.get('/people', (req, res) =>{
	res.render('index.ejs',{
		pep: People
	})
})




app.listen(3000, () =>{
	console.log('im aliveeee but you not')
})