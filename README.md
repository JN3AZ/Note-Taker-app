
    
#   Note-Taker-app

![GitHub repo size](https://img.shields.io/github/repo-size/JN3AZ/Note-Taker-app?logo=github&logoColor=green&style=plastic)

![GitHub followers](https://img.shields.io/github/followers/JN3AZ) 

![GitHub](https://img.shields.io/github/license/JN3AZ/Note-Taker-app?logo=github&logoColor=green)

##  Table of Contents

*Description
*Installation
*Usage
*License
*Contributing
*Tests

##  Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

##  Installation

Visual Studio Code or a similar text editor for code, node.js, a few npms, express, uuidv4.

##  Usage

The following HTML routes should be created:

GET /notes - Should return the notes.html file.

GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:

GET /api/notes - Should read the db.json file and return all saved notes as JSON.

POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

You will not be able to deploy your server side code on GitHub pages. This app should be deployed on Heroku. Carefully follow the Heroku Guide for getting your app deployed on Heroku.

##  License

N/A

##  Contributing

James Nowak

##  Tests

I used Postman to test the funcionality of my server.js. It was a very helpful tool and I would recomend it
to anyone.
