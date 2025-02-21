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


// *********************************************************** QNO3 ***********************************************************

class Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  doors: number;

  constructor(make: string, model: string, year: number, doors: number) {
    super(make, model, year);
    this.doors = doors;
  }

  getInfo(): string {
    return `${super.getInfo()}, Doors: ${this.doors}`;
  }
}

class Motorcycle extends Vehicle {
  hasSidecar: boolean;

  constructor(make: string, model: string, year: number, hasSidecar: boolean) {
    super(make, model, year);
    this.hasSidecar = hasSidecar;
  }

  getInfo(): string {
    return `${super.getInfo()}, Sidecar: ${this.hasSidecar ? "Yes" : "No"}`;
  }
}

// *********************************************************** QNO4 ***********************************************************
class bank_account {
    private balance:number;
    private acc_no:string;
    constructor(balance:number, acc_no:string) {
        this.balance=balance;
        this.acc_no=acc_no;
    }
    getBalance():number{
        return this.balance;
        
    }
    getAccountnumber():string{
        return this.acc_no;
    }
    
    deposit(amount:number):void{
        this.balance+=amount;
        console.log("Amount Sucessfully Deposite")
    }

    withdraw(amount:number):void{
        if(amount>balance){
        console.log("Insuficient Balance")    
        }
        this.balance-=amount;
        console.log("Amount Sucessfully Withdraw")
    }
    
}

let myAccount=new Bankaccount("2267457",500);
console.log(getBalance());
console.log(getAccountnumber());
myAccount.deposit(200);
myAccount.withdraw(100);

***********************************************************Q5***********************************************************


abstract shape{
    protected color:string;
   
    constructor(color: string) {
    this.color = color;
  }
    abstract calculateArea():number{
        return number
    }
    getColor():String{
        return this.color;
    }
    
    class circle extends shape{
     private radius:number;
        constructor(color:string, radius:number) {
            super(color);
            this.radius=radius;
            
        }

    class Rectangle extends shape {
    private width:number;
    private height:number;
    
        constructor(color:string,width:number,height:number) {
            super(color);
            this.width=width;
            this.height=height;
        }
    calculateArea implements circle(){
        
    }
    
    }
    }
}


***********************************************************Q6***********************************************************

interface Product{
    id:number;
    name:string;
    price:number,
    category:string;
    }
function CreateProduct(Product:Product):Product {
    return Product;
}

let newProduct=CreateProduct({id:78214, name:"Mobile",price:1200,category:"Tech"});
console.log(newProduct);


***********************************************************Q9***********************************************************
type Response { success: true, data: string }|| {success: false, error: string };
    
function handleResponse(response: Response): void {
  if (response.success) {
    console.log(response.data);
  } else {
    console.log( response.error);
  }
}