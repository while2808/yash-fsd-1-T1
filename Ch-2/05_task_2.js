{/* Read data from file & sort that data in ascending order using sort.  */}


var ps = require("fs");

ps.writeFileSync("task_2.txt","1 81 55 115 89 86");
var data = ps.readFileSync("task_2.txt","utf-8");
f_data = data.split(" ");
console.log("Data : " + data);
f_data.sort((a,b)=>a-b);
console.log("Sorted Data : " + f_data);