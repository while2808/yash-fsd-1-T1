{/* write a node script create a folder named "YYY" in  temp folder also create file named "ghi.txt" inside that foldernow check if availabel physical memory is greater than 1 Gb than write "sufficient memory" in file else write"Insufficient"in file. */}

var fs=require("fs");
var os=require("os");

f = os.tmpdir();
freemem = os.freemem()/1024/1024/1024;

fs.mkdirSync(f+"/YYY");
if(freemem>1){
    fs.writeFileSync(f + "/YYY/ghi.txt","Sufficient Memory");
}
else{
    fs.writeFileSync(f + "/YYY/ghi.txt","Insufficient Memory");
}