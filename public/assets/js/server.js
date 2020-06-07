// Here our the dependencies that are needed
const express = require("express");
const path = require("path");
const fs = require("fs");

//setting up newly learned express dependency 
const app = express();
// const PORT = 8080;

// setting up what PORT server to use
const PORT = process.env.PORT || 3000;

//these two lines are needed to properly parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

  //Get APIs 
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
  });

  app.get("/api/notes", function(req, res) {
    fs.readFile('db.json', (err, data) => {
        if (err) throw err;
        res.type('json');
        res.send(data);
      });
  });
  //this sends any wildcard requests to the index.html page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

   //Post APIs
   app.post("/api/notes", function(req, res) {
    let newNote = req.body;
    let rawData = fs.readFileSync('./db/db.json');
    // let student = JSON.parse(rawdata);
    // [{"title":"Test Title","text":"Test text"}]
    let notesArray;

    notesArray = JSON.parse(rawData);
    // console.log(newNote);
    // console.log(notesArray);
    // console.log(notesArray.constructor);  
    // console.log(typeof notesArray);
    // console.log(notesArray.length);
    notesArray.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
    
    res.json(newNote);
});

   //delete APIs
    app.delete("/api/notes/:id", function(req, res) {
    res.sendFile(path.join(__dirname, "./db/db.json"));

  });

//this listen method allows computer to hear and execute user requests 
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });