//run: $ node 02_basics/01_arrays.js

//Declaration
let ar1=[0,1,2,3,4,5]
let ar2=new Array(0,1,2,3,4,5)

console.log(ar1);
console.log(ar2);

//-------------------------------------------------------------------------------------------------------

//Methods
ar1.push(6)
console.log("After push: ", ar1);

ar1.pop()
console.log("After pop: ",ar1);

let doesExist=ar1.includes(9)
console.log("Does this number exist? Answer:",doesExist);

let findPosition=ar1.indexOf(4)
console.log("Position of your number is:",findPosition);

let arrayToString=ar1.join() //Adds all the elements of an array into a string, separated by the specified separator string.
console.log("After converting to string, the array is:",arrayToString);

let array1=[0,1,2,3,4,5]
let learnSlice=array1.slice(1,4) //includes 1, excludes 4
console.log("Before slice:",array1);
console.log("Slice result:",learnSlice);

let learnSplice=array1.splice(1,4)
console.log("Before splice", array1); //Note that splice operation changes the original array
console.log("After splice:",learnSplice);