const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
// const PORT = 8080;

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extend: true}));
app.use(express.json());