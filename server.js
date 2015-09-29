var express = require("express");
var jobModel = require("./models/Jobs");
var jobsData = require("./jobs-data.js");

var app = express();

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/api/jobs', function(req, res) {
    jobsData.findJobs().then(function(collection) {
        res.send(collection);
    });
});

app.get('*', function(req,res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://nation1:NayNay123@ds051933.mongolab.com:51933/jobfinder')
.then(function() {
    console.log('Connected to mongodb successfully');
    jobModel.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);