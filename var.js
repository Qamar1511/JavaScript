// all Three are used to declare variables in javascript var , let and const...
// Var is the oldest way of declaring variables in javascript-- it was used before ES6 (2015)

var age = 20; 
console.log(age)  //20

// Can we change its value?
// Yes! This is called reassignment.

var age = 25;
age = 30;
console.log(age); //30  we did not write var again we simply changed the existing variable value

// can we redeclare it again?
// yes var allows redeclaration within the same scope

var age =25;
var age =30;
console.log(age); // 30

// reassignment -> Changing the value of existing variables
// redeclaration -> declaring the same variable again

// practice question 1

// var x = 10;        assign and declare
x =20;          // reassign
 var x = 30;    // redeclare
 console.log(x); // 30  because var can be reassigned and redeclared

 // practice question 2
 
 var a = 10;

 if(true){
    var a = 20; //the same variable a is redeclared and its value become 20
 }
 console.log(a); // 20 because var does not follow block scope if follow functional scope
 
 // practice question 3

 var x = 100;
  if(true){
    var x = 200;
    if(true){
        var x = 300;
    }
  }
 console.log(x); //300 because var does not follow block scope
 
  // practice question 4

  var x = 10;
  function test(){   // the var is functional scope that's why the x inside the function test works differently
    var x = 100;
  }
  test();
  console.log(x); // 10 because var follow functional scope
  
  // practice question 4
 var x = 15;
 function demo(){
    var x = 100;
    console.log(x);
    
 }
 demo();   
      //100 because var follow functional scope soo the x outside the function is different and x inside the function is different and it is not consider as redeclared

 console.log(x);  // 15 
 