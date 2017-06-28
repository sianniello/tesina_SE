/**
 * Created by Stefano on 03/06/2017.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    path = require('path'),
    http = require('http');

var app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/cams", function(req, res){
    var request = require('request');
    request(
        {url: 'http://stenomyapp.ddns.net:5000/cams'},
        function (error, response) {
            res.header('Access-Control-Allow-Origin', '*');
            if (typeof response == "undefined") {
                console.log(error);
            }
            else if(response.statusCode == 200){
                console.log(response.body);
                res.send(response.body);
            }
            else if(response == null){
                console.log("No response from server");
            }
            else {
                console.log(response.body);
                res.send(response.body);
            }
        }
    );
});

app.get("/cams/1/avg", function(req, res){
    var request = require('request');
    request(
        {url: 'http://stenomyapp.ddns.net:5000/cams/1/avg'},
        function (error, response) {
            res.header('Access-Control-Allow-Origin', '*');
            if (typeof response == "undefined") {
                console.log(error);
            }
            else if(response.statusCode == 200){
                console.log(response.body);
                res.send(response.body);
            }
            else if(response == null){
                console.log("No response from server");
            }
            else {
                console.log(response.body);
                res.send(response.body);
            }
        }
    );
});

console.log("Server started");
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

