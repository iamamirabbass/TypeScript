"use strict";
// *********************************************************** QNO1 ***********************************************************
function createUser(user) {
    return user;
}
const newUser = createUser({
    id: 123,
    name: 'amir',
    email: 'amirabbass334@gmail.com',
    active: true
});
console.log(newUser);
function processInput(input) {
    if (typeof input === "number") {
        return `Number: ${input.toString()}`;
    }
    else {
        return `String: ${input}`;
    }
}
console.log(processInput(42));
console.log(processInput("Hello"));
// *********************************************************** QNO3 ***********************************************************
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }
    getInfo() {
        return `${super.getInfo()}, Doors: ${this.doors}`;
    }
}
class Motorcycle extends Vehicle {
    constructor(make, model, year, hasSidecar) {
        super(make, model, year);
        this.hasSidecar = hasSidecar;
    }
    getInfo() {
        return `${super.getInfo()}, Sidecar: ${this.hasSidecar ? "Yes" : "No"}`;
    }
}
// *********************************************************** QNO4 ***********************************************************
class bank_account {
    constructor(balance, acc_no) {
        this.balance = balance;
        this.acc_no = acc_no;
    }
    getBalance() {
        return this.balance;
    }
    getAccountnumber() {
        return this.acc_no;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Amount Sucessfully Deposite");
    }
    withdraw(amount) {
        if (amount > balance) {
            console.log("Insuficient Balance");
        }
        this.balance -= amount;
        console.log("Amount Sucessfully Withdraw");
    }
}
let myAccount = new Bankaccount("2267457", 500);
console.log(getBalance());
console.log(getAccountnumber());
myAccount.deposit(200);
myAccount.withdraw(100);
    **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  * Q5 **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  *
    abstract;
shape;
{
    color: string;
    constructor(color, string);
    {
        this.color = color;
    }
    abstract;
    calculateArea();
    number;
    {
        return number;
    }
    getColor();
    String;
    {
        return this.color;
    }
    class circle extends shape {
        constructor(color, radius) {
            super(color);
            this.radius = radius;
        }
    }
    class Rectangle extends shape {
        constructor(color, width, height) {
            super(color);
            this.width = width;
            this.height = height;
        }
    }
    implements;
    circle();
    {
    }
}
    **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  * Q6 **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  *
    interface;
Product;
{
    id: number;
    name: string;
    price: number,
        category;
    string;
}
function CreateProduct(Product) {
    return Product;
}
let newProduct = CreateProduct({ id: 78214, name: "Mobile", price: 1200, category: "Tech" });
console.log(newProduct);
    **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  * Q9 **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  **  *
    type;
Response;
{
    success: true, data;
    string;
}
 || { success: false, error: string };
function handleResponse(response) {
    if (response.success) {
        console.log(response.data);
    }
    else {
        console.log(response.error);
    }
}
//# sourceMappingURL=app.js.map