"use strict;"
// treat all JS code as newer version. Code will be treated according to new standards in whole file by engine. Ab to automatic strict mode me chalta hai sabkuch but its a good syntax of writing.
 
// alert( 3 + 3 )
// gives error because we are talking about everything in node here but if we bind the file in html or we go into developer console, then it will give 6. We can use alert in node but it has different syntax. We are using nodejs, not browser.

console.log(3+3); // code readability should be high. React,Node me jyadatar files me hum semicolon (;) avoid hi karte hain.
console.log("Arpit")


let name = "Arpit" // string datatype
let age = 22 // number datatype
let isLoggedIn = true // boolean datatype
let state = null // undefined nahi khali hai 
 
// ****************** Datatypes(primitive) ******************
// number => 2 to the power 53 (range)
// bigint => to store bigger numbers
// string => can be used in both single and double quotes but prefer using double quotes
// boolean => true/false
// null => it is a datatype as well as a stand alone value in Javascript
// undefined => when variable is declared but not initialised and null is a representation of an empty value.undefined means value is not assigned.
// symbol => uniqueness k liye use hoga 

// non-primitive
// object => (very important)will be discussed later thoroughly

console.log(typeof "Arpit"); // string
console.log(typeof age); // number
console.log(typeof null); // null is an object
console.log(typeof undefined); // undefined is a type of datatype