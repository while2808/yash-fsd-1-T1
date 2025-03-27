{/* write node script to check whether the extension is txt or not */}

var pm = require("path");
path = pm.parse("D:/Yash Goyani/Ch-2/10_task_6.html");
if(path.ext == ".txt"){
    console.log("File is of type txt");
}
else{
    console.log("not text document.")
}
