//run: $ node 02_basics/04_objects.js

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"g",8:"h",9:"i"}

const resObj={obj1,obj2}
console.log(resObj);

const resObj2={...obj1,...obj2,...obj3}
console.log(resObj2);

//Array of objects 
const users=[
    {
        id:1,
        email:"abc@google.com"
    },

    {
        id:2,
        email:"def@microsoft.com"
    },

    {
        id:3,
        email:"ghi@amazon.com"
    }
]
console.log(users[2].email); //ghi@amazon.com

console.log(Object.keys(obj1)); //returns the keys of the object u mentioned in form of ARRAYS
console.log(Object.values(obj1)); //returns the values of the object u mentioned in form of ARRAYS

//---------------------------------------------------------------------------------------------------------
 
//Destructuring
const course={
    name:"Javascript",
    price:"999",
    instructor:"Tirt"
}
const {instructor}=course   //instead of using "course.instructor".
console.log("Course instructor is",instructor);