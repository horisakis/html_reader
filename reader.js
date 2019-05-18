var fs = require("fs")

fs.readFile("./sample.html", "utf-8", function (err, data) {
    console.log(data);
    
})