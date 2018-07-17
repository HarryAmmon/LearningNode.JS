// READING FILES

var fs = require("fs"); // Bring in library fs
var data1 = require("./data.json");
console.log(data1.name);


fs.readFile("./data.json", "UTF-8", function (err, data) { // This will read file data.json and then log the data
    var data = JSON.parse(data);
    console.log(data.name);
})