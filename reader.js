var fs = require("fs")
const jsdom = require("jsdom")
const { JSDOM } = jsdom

fs.readFile("./sample.html", "utf-8", function (err, data) {
    const dom = new JSDOM(data);
    console.log(dom.window.document.querySelector("h1").textContent);
    
})