var express = require('express');
// call express function
var app = express();
var path = require('path');
var planets = [{name: 'mars', size: 2093}, {name: 'earth', size: 3089}];

// this is middleware that poits the folder
app.use(express.static('client/build'));

//GET ----------------------------------------------------
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + "/client/build/.index.html"));
})

//NEW ----------------------------------------------------
app.get('/planets/new', function(req, res){
  res.send("NEW planets routes");
})

//CREATE -------------------------------------------------
app.post('/planets', function(req, res){
  res.send("CREATE planet route");
})

//SHOW ---------------------------------------------------
app.get('/planets/:id', function(req, res){
  res.json(planets[req.params.id]);
})

//EDIT ---------------------------------------------------
app.get('/planets/:id/edit', function(req, res){
  res.send("EDIT planet route")
})

//UPDATE -------------------------------------------------
app.put('/planets/:id', function(req, res){
  res.send("UPDATE planet route")
})

//DELETE -------------------------------------------------
app.delete('/planets/:id', function(req, res){
  res.send("DELETE planet route, DESTROY planet")
})

app.listen('3000', function(){
  console.log("port 3000");
})