{/* using settimeout to read data from file */}

const fs = require("fs")

fs.writeFile("task_8.txt","Hello! How Are You?",function(err){
    if(err) {
        console.log(err);
    }
    else{
        setTimeout(()=>{
            data = fs.readFile("task_8.txt","utf-8",function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                }
            });
        },1000);
    }
})