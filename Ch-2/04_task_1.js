{/* Write a node.js script to copy content of one file to another file.
    Data should be fetched from source.txt & insert it into destination.txt  */}

var ps = require("fs");

var data = ps.readFileSync("Destination.txt");
console.log(data.toString() + "\nCopy Successfully.");
ps.writeFileSync("source.txt",data);