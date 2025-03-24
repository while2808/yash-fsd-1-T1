{/*Sync CRUD Operation 
    1.create folder : mkdirSync()
    2.create file : 
    3.content : writeFileSync() = (path,data,options) = 3 args
        =>options => encoding,decoding
                    1.string = utf-8 complusory because not write that given buffer data
                    either don't write utf-8 then we write console.log(data.toString())
                    2.buffer
    4.read : readFileSync()
    5.append : appendFileSync()
    6.rename : renameSync() = 2args
    7.delete : unlinkSync() = 2 args
    fs = inbuilt module
*/}

{/* Write node Example with File System Methods. */}

var ps = require("fs");
ps.mkdirSync("nodefile");
ps.writeFileSync("nodefile/user_demo.txt","Hello");
ps.appendFileSync("nodefile/user_demo.txt","\nWorld");
var data  = ps.readFileSync("nodefile/user_demo.txt","utf-8");
console.log(data);
ps.renameSync("nodefile/user_demo.txt","nodefile/user1.txt");
ps.unlinkSync("nodefile/user_demo.txt");