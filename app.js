//use express method
var express = require('express');
//read json file
// var fs = require('fs');
var path = require('path');
//create ejs
// var engine = require('ejs-locals');
var app = express();

// // mysql db connectnodeion got some problem
// var mysql = require('mysql');

// //connect mysql
// var connection = mysql.createConnection({
//     host: 'localhost',
//     usr: 'root',
//     password: '123456',
//     database: 'nodetest'
// });

// //seclect db table
// connection.query('select * from MyGests', function(err, rows, field){
//     if (err) throw err;
//     console.log('This solution is: ', rows);
// });
// app.engine('ejs',engine);
// app.set('files','./files');
app.set('view engine','ejs');

// // static web
// app.use('/public',express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/views/public'));
// // web title
// app.locals.title="AVL restaurant search";

// app.all('*', function(req, res, next){
//     fs.readFile('siteData.json', function(err, data){
//         res.locals.posts = JSON.parse(data);
//         next();
//     });
// });

// use express get method
// create root router
app.get('/',function(req, res){
    res.render('index');
    // res.send('hello world');
});

//check running evn
var port = process.env.PORT || 3000;

//create local evn
app.listen(port);

if(port === 3000){
    console.log('RUN http://localhost:3000/')
}
