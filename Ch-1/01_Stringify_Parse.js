var a = {
    "name":"Test",
    "age":19,
    "upass":false,
    "address":{
        "city":"Ahmedabad",
        "zip":"380015"
    },
    "subjects":["Maths","Science"],
    "year":null
}
console.log(a);
console.log(a.age);
console.log(a["address"]);
console.log(a["address"]["zip"]);
console.log(a.subjects[1]);

// Stringify Method
let obj = JSON.stringify({var1:"LJU",var2:"University"})
console.log("Using Strigify :",obj); // {"var1":"LJU","var2":"University"}

/*
Two type : 
{   "name":"yash" => String
    name : "yash"} => Object
# { city: 'Ahmedabad', zip: '380015' } => this answer is object form (JSON.parse())
# { 'city': 'Ahmedabad', 'zip': '380015' } => this answer is string form (JSON.stringify())
*/