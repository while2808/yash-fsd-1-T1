import validator from "validator" 
let email = 'test@gmail.com' ;
console.log(validator.isEmail(email));   
let name = " ";
console.log(validator.isEmpty(name)); // false 
let name1 = "hellolju";
console.log(validator.isLowercase(name1));