{/* write if no error than append
            no error than read
            no error console data */}
var fs = require("fs")
fs.writeFile("task_7.txt","Today Is Good Day!",function(err){
    if(err){
        console.log(err);
    }
    else{
        fs.appendFile("task_7.txt","\nIs It??",function(err){
            if(err){
                console.log(err);
            }
            else{
                data = fs.readFile("task_7.txt","utf-8",function(readerr,data){
                    if(readerr){
                        console.log(readerr);
                    }
                    else{
                        console.log(data);
                    }
                })
            }
        })
    }
})
console.log("Code Execute Succesfully.")