//run: $ node 05_iterations/one.js

//for loop
//for (let i = 0; i < 10; i++) {
//    const element = i;
//    console.log(element);
//}

//----------------------------------------------------------------------------------------------------------

//for of
const arr=[1,2,3,4,5]
console.log("For of result are as follows:");
for (const i of arr) {
    console.log(i);
}

//----------------------------------------------------------------------------------------------------------

//Maps
//Entry format: map.set(-keys-  , -values-)
//Maps dont contain duplicates.
const map=new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('USA',"United States of America")
console.log(map);

console.log("Printing the map but in form of different arrays:-");
for (const key of map) {
    console.log(key);
}

console.log("Printing the map in form of keys and values");
for (const [key,value] of map) {
    console.log(key," :- ",value)
}

//For Objects: Use "for in" loop.
//For maps: Use "for of" loop.

//----------------------------------------------------------------------------------------------------------

//Higher order function
const coding=["js","c++","c","java","python"]

console.log("Print using Higher order function (Parameter: Callback function)");
coding.forEach(   (val)=>{                //forEach takes a callback function
    console.log(val);
}  )

console.log("Print using Higher order function (Parameter: Another function)");
const display=(val)=>{
    console.log(val);
}
coding.forEach(display) //Pass the "REFERRENCE" of the function and not the entire function.


const myCoding=[
    {
        name:"Javascript",
        file:"js"
    },
    {
        name:"c++",
        file:"cpp"
    },
    {
        name:"Java",
        file:"java"
    }
]
console.log("Print object: ");
myCoding.forEach(   (item)=>{
    console.log(item);
}    )