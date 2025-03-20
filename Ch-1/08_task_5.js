{/* write a json object which contains array of 3 objects each object contains 2 properties ->name,age now sort array value by age in decending order.print name,age in terminal as per sorted age */}

const student = [
    {
        name : "Yash",
        age : 19
    },
    {
        name : "Romil",
        age : 20
    },
    {
        name : "Rudra",
        age : 18
    }
]

console.log(student.sort((a,b)=> b.age - a.age));