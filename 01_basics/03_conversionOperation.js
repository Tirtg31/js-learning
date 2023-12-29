//run: $ node 01_basics/03_conversionOperation.js

let score="a"
let converted=Number(score)
console.log(typeof(score));
console.log(converted); //NaN can be converted in js. NaN generally means that "a" cannot be converted to a number.
console.log(typeof(converted));

// "33" => 33
// "33abc" =>NaN
// true => 1
// false => 0