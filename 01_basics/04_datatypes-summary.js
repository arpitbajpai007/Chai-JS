// difference in datatypes is based on how they are stored in memory and how they are accessed.

// Primitive datatypes (call by value - changes are made in copy not in original value)
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt


// Non-Primitive or Reference type datatypes 
// Array, Objects, Functions

// Is javascript statically or dynamically typed language ???
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime rather than at compile time. You do not need to explicitly declare the type of a variable when you create it, and the type can change as the program executes.

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

// Symbol usage
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

const bigNumber = 233465768795645423n // bigint

// array
const heros = ["shaktiman", "naagraj", "doga"]; 

// object
let myObj = {
    name: "arpit",
    age: 22,
}// objects are in key-value pairs 

// function
// function can also be treated as a variable in JavaScript
const myFunction = function(){
    console.log("Hello World!!!");
}


// In JavaScript, the return type of non-primitive data types is typically an object.
// console.log(typeof bigNumber)
// console.log(typeof outsideTemp) // object
// console.log(typeof myFunction) // function(or we can say object-function)
// console.log(typeof anotherId) // symbol

// read returntype documentation of ecmascript.


// *********************************************************************

// There are two types of memory - Stack (Primitive) and Heap (Non-Primitive)

let myYoutubename = "hiteshChoudhary.com"
let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "arpit@google.com"

console.log(userOne.email);
console.log(userTwo.email);


