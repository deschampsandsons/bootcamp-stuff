const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://TDDJr:Timothy8890@cluster0-vtafv.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to db')
}).catch (err => {
	console.log ('Error:', err.message);
});
mongoose.set('useUnifiedTopology', true);

//SCHEMA
let campgroundSchema = new mongoose.Schema ({
	name: String,
	image: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

//Campground.create(
//{
//	name: "Goat Mountain", image: ""
//}, (err, campground) => {
//	if(err){
//		console.log(err);
//	}else{
//		console.log(campground);
//	}
//});	

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get ('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) =>{
	Campground.find({}, (err, allCampgrounds) => {
	if(err){
		console.log(err);
	}else{
		res.render('campgrounds', {campgrounds:allCampgrounds});
	}
});
});

app.get('/campgrounds/new', (req, res) =>{
	res.render('new')
});

app.post('/campgrounds', (req, res) =>{
	//get data from form and add to campground array
	let name = req.body.name;
	let image = req.body.image;
	let newCampground = {name: name, image: image}
	Campground.create(newCampground, (err, newlyCreated) => {
		if(err){
		console.log(err);
	}else{
		res.redirect("/campgrounds");
	}
	});
	//redirect back
	res.redirect("/campgrounds");
})

app.listen (3000, () =>{
	console.log('YelpCamp server listening port 3000')
});