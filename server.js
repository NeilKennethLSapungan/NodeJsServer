//initializing method, class
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// express
//app.use(express.static(__dirname, 'dist'));

//arrow function sending req dist folder

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

//listen to port iniatialized port:8080
app.listen(port);
