//run: $ node 03_basics/02_arrow.js

//this keyword : refers to the current context. Works only in objects and not inside functions.
const user={
    username:"Tirt",
    age:21,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to the website`);
        console.log("This is the context under the user object: ",this);
    }
}

user.welcomeMessage()
user.username="Ghuchu"
user.welcomeMessage()

//----------------------------------------------------------------------------------------------------------------

//Arrow functions

const display=()=>{                 //Explicit return: User needs to type return.
    let username="Tirthankar"
    console.log(username);
}
display();

const addTwo=(num1,num2)=>(num1+num2) //Imlicit return: User doesnt need to type return.
console.log(addTwo(2,3));

const learnReturningObject=()=>({username:"Ani"})
console.log(learnReturningObject); //Returns the referrence to the object
console.log(learnReturningObject()); // Returns the content of the object