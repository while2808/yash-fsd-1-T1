{/* module
    1.)os
    2.)path 
*/}

var os = require("os")
console.log(os.arch()) // x64
console.log(os.hostname()) // 408B-99
console.log(os.platform()) // win32
console.log(os.tmpdir()) // C:\Users\LJENG\AppData\Local\Temp
console.log(os.freemem()) // 2864111616 GB


a1=os.freemem();
console.log(`${a1/1024/1024/1024}`); // 1.2491950988769531

{/* os.freemem() = bytes, 
os.freemem()/1024 = KB, 
os.freemem()/1024/1024 = MB, 
os.freemem()/1024/1024/1024 = GB */}

