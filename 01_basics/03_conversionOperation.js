let score = "arpit"

console.log(typeof score); // string
console.log(typeof (score)); // Second way is writing it as a method (in parenthesis)

let valueInNumber = Number(score); // jitne bhi datatypes hain majorly unka ek capital format bhi hota hai jo ki class-based kuch hota hai. For ex- Number, String etc.
console.log(valueInNumber); // ye number me convert ho gaya hai
// "33" => (33) gives number
// "33abc" => (NaN) also gives a number. While NaN stands for not a number but the typeof gives result that it is a number. 33abc gets converted to number in JavaScript but value will be NaN. So, check if whether it is NaN or not. So, don't rely on numbers.
// null => (0) gives zero
// undefined => (NaN) gives Not a Number
// true => 1 and false => 0
// "arpit"(string) => NaN

let isLoggedIn = "arpit"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); 
// 1 => true; 0 => false
// "" => false
// "arpit" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string


// ****************** Operations ******************

let value = 3
let negValue = -value
// console.log(negValue); 

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 raise to the power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Arpit"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12 
// console.log(1 + "2"); // 12 
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1
// console.log(true+); // throws an error
console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
// console.log(num1);


let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101
// prefix & postfix js mdn

// link to study :
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-abstract-operations











