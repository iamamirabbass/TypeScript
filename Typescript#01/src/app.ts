// *********************************************************** QNO1 ***********************************************************

interface User{
    id:number;
    name:string;
    email:string;
    active:boolean;
}

function createUser(user:User):User{

    return user;
    }
const newUser=createUser(
    {
        id:123,
        name:'amir', 
        email:'amirabbass334@gmail.com', 
        active:true
    })
console.log(newUser);


// *********************************************************** QNO2 ***********************************************************

type Input = number | string;

function processInput(input: Input): string {
    if (typeof input === "number") {
        return `Number: ${input.toString()}`;
    } else {
        return `String: ${input}`;
    }
}
console.log(processInput(42));       
console.log(processInput("Hello"));  
