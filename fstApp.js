var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
	res.send("Hi, there!");
});

// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
	res.send("Goodbye!");
}
);

// "/dog" => "Meow!"
app.get("/dog", function(req, res) {
	res.send("Meow!");	
});

// path variable example: reddit
app.get("/r/:subredditName", function(req, res) {
	var subrredit = req.param.subreditName;
	res.send("Welcome to subreddit" + subreditName.toUpperCase() + ".");
});

app.get("/r/:subredditName/comment/:id/:title/", function(req, res) {
	console.log(req.params);
	res.send("welcome to the comment page");
});

//order of route matters
// for page not found
app.get("*", function(req, res) {
	res.log("Super Star");
});


// listen to event
app.listen(3000, function() {
	console.log("server listening on port 3000");
});


