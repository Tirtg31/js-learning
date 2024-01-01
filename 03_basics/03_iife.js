//run: $ node 03_basics/03_iife.js
 
/*

IIFE: Immediately Invoked Function Expression.
Used to call a function immediately
Used to prevent pollution from global variables/scope.

*/

//-------------------------------------------------------------------------------------------------------

// function connect(){
//     console.log("DB connected");
// }
// connect();

(function connect(){
    console.log("IIFE function call: ","DB Connected");
})(); //";" is needed


//IIFE with arrow function
((name)=>{
    console.log("IIFE with arrow function: ",`${name}, DB Connected (Arrow)`);
})("Tirt");