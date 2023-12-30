//run: $ node 02_basics/02_arrays.js

let countries=["India","USA","UK"]
let states=["West bengal","Tamilnadu"]

countries.push(states) //Arrays take any type of data as entry. Here it has taken another array "states" as an entry.
console.log("Push reuslt:",countries);

let cities=["Kolkata","Chennai","Bangalore"]
let towns=["Sodepur","Agarpara"]
let all_cities_towns=cities.concat(towns)
console.log("Concat result:",all_cities_towns); //Merges the 2 arrays

//Spread operator (...) works in the same way as concat does
let school_friends=["Soubarno","Soumajit","Saikat"]
let uni_friends=["Joydip","Soham"]
let online_friends=["Jess","Holly"]
let friends=[...school_friends,...uni_friends,...online_friends]
console.log("Spread result:",friends); 

console.log("Convert anything to array result:", Array.from("Ghuchu")); //"from" : Converts to array

let s1=100
let s2=500
let s3=600
console.log("Of result:",Array.of(s1,s2,s3));