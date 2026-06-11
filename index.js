var express = require('express');
var app = express();
const PORT = 3500;
const HOST = '0.0.0.0';
app.get('/', function (req, res) {
    res.send('{ "response": "Hello welcome to the cloud computing" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Good morning Abi" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " hurray!, Its working fine!" }');
});

app.get('/dream', function (req, res) {
    res.send('{ "response": " I want to work for AWS!" }');
});
app.listen(process.env.PORT || 3500);
//app.listen(PORT, HOST);
console.log(`server running on http://${HOST}:${PORT}`);
module.exports = app;