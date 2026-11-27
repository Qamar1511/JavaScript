// we can declare variable using let just like var

let age = 20;
console.log(age) //20

// let can be reassigned

let age1 = 20;      // declaration
age1=26;            // reassignment--> the value of existing variable is changed
console.log(age1);

// practice question 1

let price = 100;
price = 200;
console.log(price); //200 because let can be reassigned

// practice question 2

let x = 10;
// let x = 20;
console.log(x); // error because let can not be redeclared in same scope

// let + reassignment = allowed
// let + redeclaradion in the same scope = error

// practice question 3

let price1 = 10;
price1 = 20;
price1 = 30;
console.log(price1); // 30 because let can be reassigned

// let has block scope --> it can be declared in the block and can be accessible in the block

// example
let y = 10;
if(true){
    let y = 20;
    console.log(y);  // 20 because let follow block scope
 // the variable inside the block scope can not be accessible outside the block scope   
}
console.log(y);     //10 

// practice question 4

let a = 5;      // outer variable
if (true) {
    let a = 10; //inside the block scope and not accessible outside
     a= 15;
}
console.log(a); //accessible from outer variable prints 5


// ***  TEMPORAL DEAD ZONE (TDZ)
 
//in  javascript we can not access let variable before its declaration

// example

console.log(c)  // access

let c = 20;  //declare

   //ReferenceError: Cannot access 'c' before initialization
// JavaScript ko pata hota hai ki age variable is scope mein declared hai, lekin declaration execute hone se pehle usse access nahi kar sakte

// declaration se phele ka time temporal dead zone kehalata hai

//practice question

console.log(d)  //access before its declaration-> reference error
let d = 20;     
console.log(d)      // execute nhi hoga

{
    // TDZ starts

    let name = "Qamar";

    // TDZ ends

    console.log(name); // Qamar
}


{
    // TDZ START

    console.log(x); // ReferenceError

    let x = 20; // TDZ END

    console.log(x); // 20
}


