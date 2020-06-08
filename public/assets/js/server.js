// Here our the dependencies that are needed
const express = require("express");
const path = require("path");
const fs = require("fs");
const { uuid } = require("uuidv4");

//setting up newly learned express dependency
const app = express();
// const PORT = 8080;

// setting up what PORT server to use
const PORT = process.env.PORT || 3000;

//these two lines are needed to properly parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Get APIs
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../../notes.html"));
  // res.sendFile("../notes.html");
});

app.get("/api/notes", function (req, res) {
  fs.readFile("./db/db.json", (err, data) => {
    if (err) throw err;
    res.type("json");
    res.send(data);
  });
});

//this sends any wildcard requests to the index.html page
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//Post APIs
app.post("/api/notes", function (req, res) {
  let newNote = req.body;
  let rawData = fs.readFileSync("./db/db.json");
  let notesArray;

  newNote.id = uuid();
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
app.delete("/api/notes/:id", function (req, res) {
  // res.sendFile(path.join(__dirname, "./db/db.json"));
  let notesArray = JSON.parse(fs.readFileSync("./db/db.json"));
  let noteId = req.params.id;
  let deletedNote;
  // console.log(notesArray.length);
  //established a For loop in order to pass over each json in db array to find index of req id to be deleted
  for (let i = 0; i < notesArray.length; i++) {
    if (notesArray[i].id === noteId) {
      //setting desired object to deletedNote variable
      deletedNote = notesArray[i];
      //using splice method to remove specific note from db array
      notesArray.splice(i, 1);
      //write updated notesArray to db json array
      fs.writeFileSync("./db/db.json", JSON.stringify(notesArray));
      break;
    }
  }
  res.json(deletedNote);
});

//this listen method allows computer to hear and execute user requests
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
