//run: $ node 05_iterations/two.js

//Filter : Filter takes call back function as a parameter.
const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNums.filter(   (num)=>{
    return num>4
}     )
//Note: Always write "return" when you declare the scope under arrow functions.
console.log(newNums);

//============================================================================================================

//reduce : Takes call back function.

const num=[1,2,3]

const total=num.reduce(  (acc,curr)=>{
    console.log(`accumulator: ${acc}, current value: ${curr}`);
    return acc+curr
},0   ) // 0 is the initial value of the accumulator.

console.log(total);