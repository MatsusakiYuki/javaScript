var express = require("express");
var app = express();

// app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/updatelog", function(req, res) {
    res.render("updatelog")
})

app.listen(3000, function() {
    console.log("Server Connected");
})
