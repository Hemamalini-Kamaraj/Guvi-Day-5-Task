let details = [
    {
    "name":"Hema",
    "email":"123@gmail.com",
    "mobile": ["12345", "98754"],
    "age":"25",
    "address":{
        no:"37a",
        street: "north street",
        city:"cbe"
    }
    },   
]

//Iteration using for loop
for(let i=0;i<details.length;i++){
    console.log(details[i])
}


//Iteration using for of loop
for(let e of details)
{
    console.log(e);
}


//Iteration using for in loop
for(let e in details)
{
    console.log(details[e]);
}


//Iteration using forEach loop
var obj = details;
details.forEach(function(obj)
{
  console.log(obj)  
})
