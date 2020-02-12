var express = require("express"),
    app = express(),
    mongoose =require("mongoose"),
    bodyParser = require("body-parser");
    // User = require("./model/user"),
    localStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://local/");
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

// app.use(require("express-session")({
//     :
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(new localStrategy(updatelog.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deseriallizeUser(User.deseriallizeUser());
// get to the log home page
app.get("/", function(req, res) {
    res.render("home");
})

// switch to user login page
// app.get('/userhome', function(req,res) {
//     res.render("usrHome");
// });

// switch to update log page
// app.get('/update', function(req, res){
//     res.render("updatelog");
// })

// switch to register page
// app.post('/register', function(req, res) {
//     var posts = req.body;
//     res.render("register");
// })

// var updatelogSchema = new mongoose.Schema({
//     title: String,
//     logdate: Date,
//     supervisor: String,
//     logtext: [
//         {
//             type:mongoose.Schema.Types.ObjectId,
//             ref: "UpdateLog"
//         }
//     ],
//     updator: String
// });


// app.post('/', function(req, res) {
//     var a = req.body.;
// });

app.listen(3000, function() {
    console.log("Server Connected");
});


