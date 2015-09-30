var express = require("express");
var app = express();
var jobsData = require("./jobs-data.js");
require("./jobs-service.js")(jobsData,app);

app.set('views', __dirname);
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req,res) {
    res.render('index');
});

//mongoose.connect('mongodb://localhost/jobfinder');
jobsData.connectDB('mongodb://nation1:NayNay123@ds051933.mongolab.com:51933/jobfinder')
.then(function() {
    console.log('Connected to mongodb successfully');
    jobsData.seedJobs();
});

app.listen(process.env.PORT, process.env.IP);