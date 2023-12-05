const mongoose = require('mongoose'); 

// Database connection 
mongoose.connect('mongodb://127.0.0.1:27017/geeksforgeeks', { 
	useNewUrlParser: true, 
	useCreateIndex: true, 
	useUnifiedTopology: true
}); 

// User model 
const User = mongoose.model('User', { 
	name: { type: String }, 
	age: { type: Number } 
}); 

// Function call 
User.insertMany([ 
	{ name: 'Gourav', age: 20}, 
	{ name: 'Kartik', age: 20}, 
	{ name: 'Niharika', age: 20} 
]).then(function(){ 
	console.log("Data inserted") // Success 
}).catch(function(error){ 
	console.log(error)	 // Failure 
}); 
