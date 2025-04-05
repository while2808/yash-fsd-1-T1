const add = (a,b)=>{
    return (a+b);
}
const sub = (a,b)=>{
    return (a-b);
}
const mul = (a,b)=>{
    return (a*b);
}

const name = "Yash Goyani";
// Method : 1 
//module.exports = add; 

// Method : 2
//module.exports.a = add;
//module.exports.s = sub;
//module.exports.m = mul;

// Method : 3
module.exports = {add,sub,mul,name};