{/* 
    removeListener = only one item will be remove which of the first.
    removeAllListeners = more than one item will be remove.
*/}

const eventemitter = require("events");
var ee = new eventemitter();

function f1(msg){
    console.log(msg);
}

function f2(msg){
    console.log(msg);
}

ee.on("My Event1",f1);
ee.on("My Event2",f2);
ee.on("My Event1",f1);
ee.on("My Event2",f2);

ee.removeListener("My Event2",f2);
ee.removeAllListeners("My Event1");

ee.emit("My Event2","LJU");
ee.emit("My Event1","Yash");