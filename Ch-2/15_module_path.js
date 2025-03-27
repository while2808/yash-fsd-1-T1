// var os=require("path");
{/* basename() Returns the last part of a path
    dirname() Returns the directories of a path
    extname() Returns the file extension of a path */}

    var pm=require("path");
    path=pm.dirname("D:/Goyani Yash/FSD-2/Ch-2/10_task_6.html");
    console.log(path);
    path=pm.basename("D:/Goyani Yash/FSD-2/Ch-2/10_task_6.html");
    console.log(path);
    ext = pm.extname("D:/Goyani Yash/FSD-2/Ch-2/10_task_6.html")
    console.log(ext);
    path=pm.parse("D:/Goyani Yash/FSD-2/Ch-2/10_task_6.html");
    console.log(path);


{/* 
    D:/Goyani Yash/FSD-2/Ch-2
    10_task_6.html
    .html
    {
    root: 'D:/',
    dir: 'D:/Goyani Yash/FSD-2/Ch-2',
    base: '10_task_6.html',
    ext: '.html',
    name: '10_task_6'
    } 
*/}