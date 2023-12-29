//run: $ node 01_basics/05_strings.js

let name="Tirthankar"
let age=21

console.log(`Hello, my name is ${name} and age is ${age}`); //Use this syntax.

//---------------------------------------------------------------------------------------------------

let myName=new String('Tirthankar') // Treats the name as an object. Example: [0:T, 1:i, 2:r,....]

let learnSubstring=myName.substring(0,4)
console.log(learnSubstring); //Input: Tirthankar, Output: Tirt

let learnSlice=myName.slice(-8,4)
console.log(learnSlice); // Input: Tirthankar, Output: rt

//---------------------------------------------------------------------------------------------------

let anotherName=new String('  Ghuchu   ')

let learnTrim=anotherName.trim();
console.log(learnTrim); //Removes the whitespaces

//---------------------------------------------------------------------------------------------------

let url="https://tirt%20gupta.com"

let learnReplace=url.replace('%20','-')
console.log(learnReplace);

//---------------------------------------------------------------------------------------------------

//Split: Creates array of strings based on your parameters
let sentence="I study in VIT vellore and currently in third year"

let learnSplit=sentence.split(" ") // splits the sentences based on whitespaces i.e., ["I","study","in",.....]
console.log(learnSplit);