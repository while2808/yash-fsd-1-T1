var eventemitter = require("events");
var ee = new eventemitter();
ee.on("connection",function(){
    console.log("Success");
    ee.emit("data-received");
});
ee.on("data-received",function(){
    console.log("Received");
});
ee.emit("connection");
console.log("Thanks")
