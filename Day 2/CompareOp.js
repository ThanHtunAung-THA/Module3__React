/* Comparison operators */
// == vs ===

let num = 5; 
num == '5' // output true
num === '5' // output false

!= vs !==
let num = 5; 
num != '5' // output false
num !== '5' // output true

// > (greater than) and < (less than)
let num1 = 2;
let num2 = 3;
num1 > num2; // output false
num1 < num2 ; // output true

// >= (greater than or equal) and <= (less than or equal)
let num1 = 2;
let num2 = 3;
num1 >= num2; // output false
num1 <= num2; // output true

/* Logical operator */

let num1  = 5;
let num2  = 10;

// && (and logical operator) &=ampersand

num1 > 3 && num2 < 10 ; //false
num1 < 7 && num2 >5;  // true

// || ( or logical operator)

num1 > 3 && num2 < 10 ; //true
num 1 < 7 && num2 >5;  // false
num >=5 || num2 <= 10 // true

//! (not logical operator)
!(num1 === num2) // true
!(num1 < num 2) // false

