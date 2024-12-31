const userEmail = "a@arpit.ai"

if (userEmail) {
    console.log("Got user email");      
} else {
    console.log("Don't have user email");
}

// Falsy values  :-
// false, 0, -0, BigInt 0n, "", null, undefined , NaN
// Truthy values :-
// all except falsy values are truthy values 
// "0", 'false', " ", [], {}, function(){}, 

// how to check if array or object is empty

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null, undefined 

let val1;
// val1 = 5 ?? 10 
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Ternary Operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");
