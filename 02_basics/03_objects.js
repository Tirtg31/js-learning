//run: $ node 02_basics/03_objects.js

//object literals

const mySym=Symbol("key1")

const jsUser={
    name:"Tirthankar",
    age:21,
    [mySym]:"mykey1", // To use symbols, use square brackets
    location:"Kolkata",
    email:"guptaghuchu3103@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser["name"]);

jsUser.location="Chennai" //To change values, use "=".
console.log("After changing user location:",jsUser);

//Object.freeze(jsUser) //After this, any change that will be made wont get reflected.
jsUser.location="Bangalore"
console.log("After freeze:",jsUser);

jsUser.greeting=function(){
    console.log(`Hello ${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());