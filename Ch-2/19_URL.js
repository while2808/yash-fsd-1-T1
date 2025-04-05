var a = require("fs")
var u = require("url");
var addr = "http://localhost:8080/default.html?year=2025&month=feb";
var q = u.parse(addr,true);
console.log(q);
console.log(q.query);
a.writeFileSync("a.txt",JSON.stringify(q.query))