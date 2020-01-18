const express = require('express');
const app = express();

app.get ('/', (req, res) =>{
	res.send ('Hellooooo')
});
app.get('/speak/:animal', (req, res) => {
	let sounds = {
		pig: 'oink',
		cow: 'moo',
		dog: 'woof woof'
	}
	let animal = req.params.animal;
	let sound = sounds[animal];
	res.send('this is the ' + sound);
});


app.listen(3000, () => {
	console.log ('listening port 3000');
});