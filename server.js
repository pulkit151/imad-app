var express = require('express');
 var morgan = require('morgan');
 var path = require('path');
 
 var app = express();
 app.use(morgan('combined'));
 
 app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'index.html'));
 });
 
 app.get('/Article-One', function (req, res) {
    res.send('Article One requested and will be served here hence be prepared for it in.'); 
 });
 
 app.get('/Article-Two', function (req, res) {
    res.send('Article Two requested and will be served here'); 
 });
 
 app.get('/Article-Three', function (req, res) {
    res.send('Article Three requested and will be served here'); 
 });
  app.get('/ui/style.css', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
 });
 
 app.get('/ui/madi.png', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
 });
 
 
 // Do not change port, otherwise your app won't run on IMAD servers
 // Use 8080 only for local development if you already have apache running on 80
 
 var port = 80;
 app.listen(80, function () {
   console.log(`IMAD course app listening on port ${port}!`);
 });