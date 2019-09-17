// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1234',
//   port     : 3306,
//   database : 'mydb'
// });

// connection.connect();

// connection.query('SELECT * from Persons', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.', err);
// });

// connection.end();

var express    = require('express');
var mysql      = require('mysql');
var dbconfig   = require('./config/database.js');
var connection = mysql.createConnection(dbconfig);

var app = express();


app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
  res.send('Root');
});

app.get('/persons', function(req, res){

  connection.query('SELECT * from Persons', function(err, rows) {
    if(err) throw err;

    console.log('The solution is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});