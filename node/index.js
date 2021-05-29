const express = require("express");
const bodyParser = require("body-parser");
var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'mysql',
  user     : 'root',
  password : 'root',
  database : 'desafio02'
});
connection.connect();


const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
   

    connection.query('SELECT * from people', function(err, people, fields) {    
        const response = `<h1>Full Cycle Rocks!</h1></br> 
          <h2>Pessoas</h2></br>
          ${JSON.stringify(people)}
        `    
        res.send(response);
    });

   
    
});

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});