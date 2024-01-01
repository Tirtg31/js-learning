//run: $ node 03_basics/01_functions.js

//Rest operator "..."
function calculatePrice(...num){
    return num
}
console.log(calculatePrice(100,200,300,400,500)); //Rest operator allows to pass multiple values and stores it in array.

// Note: Objects and arrays can also be passed as parameters to a function.