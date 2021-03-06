const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // creates APP, which is the main program
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000; // process.env.PORT for heroku, 3000 for local

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.get("/private", function (req, res) { // when a person arrives at the main url + / (so, the home), it makes a request, and sends a response. 
    res.sendFile(__dirname + "/html/private.html"); // sends our html file in a static way
});

app.get("/forum", function (req, res) {
    res.sendFile(__dirname + "/html/forum.html");
});

app.get("/purchase", function (req, res) {
    res.sendFile(__dirname + "/html/purchase.html");
});

app.get("/daegan", function (req, res) {
    res.sendFile(__dirname + "/html/daegan.html");
});

app.get("/nikha", function (req, res) {
    res.sendFile(__dirname + "/html/nikha.html");
});

app.get("/jake", function (req, res) {
    res.sendFile(__dirname + "/html/jake.html");
});

app.post("/", function (req, res) {
    var username = req.body.username;

    console.log(username);

    res.send("<h1>" + username + "</h1>");
});

app.post("/forumsignup", function (req, res) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    res.write("<h1>" + username + "</h1>");
    res.write("<h1>" + password + "</h1>");
    res.write("<h1>" + email + "</h1>");

    res.end();
});

app.post("/forumlogin", function (req, res) {
    // var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    res.write("<h1>" + email + "</h1>");
    res.write("<h1>" + password + "</h1>");

    res.end();
});

app.listen(port, function () { // this listens for the port, and essentially opens the app
    console.log("Listening on port " + port);
});

