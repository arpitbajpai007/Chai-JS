const user = {
    username: "arpit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
         
    }
}

// user.welcomeMessage() // yha tak context same tha 
// user.username = "hitesh" // yha par context change kar diya
// user.welcomeMessage() // it is possible kyunki value humne hardcore nahi ki thi.

// console.log(this); // current context is empty{} because we are in node environment so this refers to an empty object as there is no context in global

// this refers to current context

// function chai(){
//     let username = "arpit"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "arpit"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "arpit"
//     console.log(this);
// }

// chai()

// arrow function syntax:
// () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4));

// arrow function (implicit return)
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(3, 4));

// curly braces me return likhna padega but parenthesis me nahi.
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => ({username: "arpit"})
// console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(function () {})
// myArray.forEach(() => {})
// myArray.forEach(() => ())

