var express = require("express");
var app = express();

app.use(express.static(__dirname))

var messages = [
    {name: "Harry", message: "Message 1"},
    {name: "Harry", message: "Message 2"},
    {name: "Harry", message: "Message 3"},
]

app.get("/messages", (req,res) => {
    res.send(messages);
});

app.post("/messages", (req,res) => {
    console.log(req.body);
    res.sendStatus(200);
})


var server = app.listen(3000, () => {
    console.log("server is listening on port", server.address().port);
});

