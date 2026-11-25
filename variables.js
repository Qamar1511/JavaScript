// What is a Variable :- A variable is a named identifier used to store values in javascript.

let name ="Qamar"   // Name is a variable stores the value Qamar
let age = 20;      // Age is a variable stores the value 25
let IsDeveloper = true;  // IsDeveloper is the variable storing true.

// Basic Syntax:
let VariableName = "value";

// let          --> variable declare karne ka keyword
//Variablename  --> variable ka naam.
// Value        --> Jo data store karna hai
// =            --> Assignment operator

// ****  Important: Declaration vs Initialization

let city;           // Declaration
city = "Jammu"     //  Initialization / assignment
console.log(city);  // Jammu

/* Declaration means Variable create karna . Initialization means variable ko initial value dena */

//Pratice question 1 : Without looking at my example, write JavaScript code to:

/*  write JavaScript code to:
1. Create a variable called myName.
2. Store your name in it.
3. Create another variable called myAge.
4. Store your age in it.
5. Print both using console.log().*/

let myName = "Qamar";
let myAge = 25
console.log(myName)
console.log(myAge)

//Pratice question 2
let a =10;
let b= "10";
console.log(a+5);  //10 +5 = 15
console.log(b+5);  // 10+5=105 because of string values  --> string + Number = concatenation

//Pratice question 3
let x = "20";
let y = 10;
console.log(x-y);  // "20"-10 = 10  because in case of substraction javascript automatically convert string into numbers, it is called type coercion(automatic type conversion)

"20" + 10  // 2010 (string)
"20" - 10  // 10 (number)
"20" * 10 // 200 (number)
"20" / 10 // 2 (number)

//Pratice question 4
let c = "hello";
let d = 10;

console.log(c - d); // prints NaN because javascript tries to convert Hello into number but hello is not a valid number so it is Nan => Nan - 5 = NaN (Not a number)

//Pratice question 5

console.log(Number("hello")); // Prints Nan
console.log(typeof NaN);        // Prints Number => Although its name is not-a-number , javascript consider the type of NaN is to be number
console.log(Number.isNaN(NaN));  //True

//Pratice question 6

console.log("50"-20);   //30
console.log("50"+20);   //5020
console.log("hello"*2); //NaN

//Pratice question 6
 let price = "100"
  console.log(typeof price);            //String -> because original value is string
  console.log(typeof Number(price));    //Number -> converts "100" into the number 100
  