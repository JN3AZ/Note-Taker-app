const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
// const PORT = 8080;

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extend: true}));
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
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });