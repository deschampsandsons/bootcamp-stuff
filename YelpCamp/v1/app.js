const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

	let campgrounds = [
		{name: "Granite Hill", image: ""},
		{name: "Goat Mountain", image: ""},
		{name: "Big Tree", image: ""}
		];
	

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get ('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) =>{
	res.render('campgrounds', {campgrounds:campgrounds});
});

app.get('/campgrounds/new', (req, res) =>{
	res.render('new')
});

app.post('/campgrounds', (req, res) =>{
	//get data from form and add to campground array
	let name = req.body.name;
	let image = req.body.image;
	let newCampground = {name: name, image: image}
	campgrounds.push(newCampground);
	//redirect back
	res.redirect("/campgrounds");
})

app.listen (3000, () =>{
	console.log('YelpCamp server listening port 3000')
});