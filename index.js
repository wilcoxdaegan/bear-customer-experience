const express = require('express');


const app = express(); // creates APP, which is the main program

const port = process.env.PORT || 3000; // process.env.PORT for heroku, 3000 for local

app.get("/", function (req, res) { // when a person arrives at the main url + / (so, the home), it makes a request, and sends a response. 
    res.sendFile(__dirname + "/index.html"); // sends our html file in a static way
});

app.get("/daegan", function (req, res) {
    res.sendFile(__dirname + "/daegan.html");
})

app.listen(port, function () { // this listens for the port, and essentially opens the app
    console.log("Listening on " + port);
});

