//const is also used to declare variables just like var and let

const age = 25;
// console.log(age);

//const can not be reassigned 
const age1 = 25;
// age1=26
// console.log(age1); //TypeError: Assignment to constant variable.
//because const can not be reassigned

const price  =1000;
// price =2000;
// console.log(price);  //typeerror --> assignment --> not allowed

//Kya const variable ko declare karte waqt value dena compulsory hai?

// const name; //error -> because declaration is compulsory
// name = "qamar";

// const declaration + initialization ek sath hoti hai

// Practice 2

const age2 = 25
if (true) {
    const age2 = 30;
    console.log(age2);      //const is also blocked scoped just like let
    
}
console.log(age2);

//Practice 3
const y = 10;
if (true) {
    y=20;  //type error

    //const y = 10 outer scope mein declare hua hai. if block ke andar koi naya y declare nahi hua. Isliye JavaScript outer y ko update karne ki koshish karega, lekin const reassign nahi ho sakta.
    // Remember: Block scope ka matlab yeh nahi ki outer variable ko change nahi kar sakte. const ki wajah se reassignment prohibited hai.

}
console.log(y);

// practice question
// const username = "Qamar"
// const username = "shabir"  //syntax error
console.log(username);      //error because redeclaration is not allowed in const

