{/* Async=>
    mkdir : (path,Callback) 
    writeFile : (path,data,Callback)
    readFile : (path,"utf-8",Callback)
    appendFile : (path,data,Callback)
    rename : (oldpath,newpath,Callback)
    unlink : (path,Callback)

=>By using callbacks, we can write asynchronous code in a better way
=>first variable in callback function is always is error variable and 2nd is data variable.
*/}

var fs = require("fs");
fs.writeFile("test.txt","Hello World!",function(err)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("File written successfully");
    }
});
fs.appendFile("test.txt","Hi",function(err)
{
    if(err){
        console.log(err);
    }
    else{
        console.log("Data Appended.")
    }
});
data = fs.readFile("test.txt","utf-8",function(readerr,data)
{
    if(readerr){
        console.log(readerr)
    }
    else{
        console.log(data);
    }
})