
// ****** Let inside the loop *********

for (let i = 0; i < 3; i++) {       // i is accessible only inside the loop
    console.log(i);                 // output-> 0,1,2
}
    // console.log(i);     // reference error

// let is block scoped so it is only accessible inside the loop, and outside the loop it gives refernce error


//practice question

for (let i = 0; i < 3; i++) {      
    console.log(i); //output -> 0,1,2
}

//practice question
 for (let i = 0; i <= 4; i++) {  //this loop will execite because let is block scoped and accessible inside the loop
    console.log(i);
 }
     console.log(i);        //refernce error

    //  What is the output?

let b = 10;

b= 25;      //reassignment

console.log(b); // Reassignment updates the existing let variable to 25.

// What happens when this code runs?

let scoree = 10;

// let scoree = 20;

console.log(scoree);  //syntax error 
// let does not allow redeclaration of the same name in the same scope.


// What is the output?

let a = 5;

if (true) {

let a = 15;

console.log(a);

}

console.log(a);
//output is 15 then 5
// The block has its own a, while the outer a remains 5.

// What happens when this code runs?

{
// tdz start
console.log(x);
let x = 20;
//tdz ends

}
//output --> reference error
// The access happens before the let declaration initializes x, so it is in the TDZ.







// What is printed?

for (let i = 1; i <= 3; i++) {

console.log(i);

}

// The loop starts at 1 and continues while i is less than or equal to 3.