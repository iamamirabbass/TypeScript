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
