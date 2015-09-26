var express = require("express");
var mongoose = require("mongoose");
var jobModel = require("./models/Jobs");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    mongoose.model('Job').find({}).exec(function(error, collection) {
        res.send(collection);
    })
});

app.get('*', function(req,res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
mongoose.connect('mongodb://nation1:NayNay123@ds051933.mongolab.com:51933/jobfinder');

var con = mongoose.connection;

con.once('open', function() {
    console.log('Connected to mongodb successfully');
    jobModel.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);