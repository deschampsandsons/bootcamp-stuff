const express = require('express');
const app = express();
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

const PostSchema = new mongoose.Schema({
	title: String,
	description: String,
});

const Post = mongoose.model("Post", PostSchema);

//let indexZero = new Post({
//	title: "testing number 1",
//	description: "This is a test"
//});

//indexZero.save((err, Post) => {
//	if(err){
//	console.log("ERROR ERROR")
//} else {
//	console.log ("success!")
//	console.log (Post);
//}
//});



app.get('/', async (req, res) => {
	let post = await Post.create({title: 'Test', description: 'This is a test'});
	res.send(post);
});

app.listen (3000, () => {
	console.log ('list port 3000');
});