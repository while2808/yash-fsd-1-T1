// print giving expected on board.
const a = {
    "datastructure":[{
        "Name":"tree",
        "Course":"Intro",
        "content":["1","B","C"]
    },
    {
        "Name":"tree1",
        "Course":"Intro1",
        "content":["1","B","C","D"]
    }],
    "xyz":{
        "Name":"Graphics",
        "topic":["BFS","CDF","sorting"]
    }
}

console.log(a.datastructure[1].Name) // tree1
console.log(a.datastructure[0].Name) // tree
console.log(a.xyz.Name) // Graphics
console.log(a.xyz.topic) // [ 'BFS', 'CDF', 'sorting' ]
console.log(a.xyz.topic[0]) // BFS
console.log(a.xyz) // { Name: 'Graphics', topic: [ 'BFS', 'CDF', 'sorting' ] }
console.log(a.Name) // undefined
