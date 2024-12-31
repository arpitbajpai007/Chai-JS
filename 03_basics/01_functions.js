function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
}

// sayMyName() //sayMyName is reference of function and () does the execution of function

// function addTwoNumbers(number1, number2){ //number1,number2 are parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){ 
    // let result = number1 + number2
    // return result // return ke baad kuch bhi execute nahi hota hai.  
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //3,5 are arguments 

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    // if(username === undefined)
    if(!username) // both of these lines are equivalent.   
    {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("arpit")); // arpit just logged in
// console.log(loginUserMessage("")); // just logged in
// console.log(loginUserMessage()); // sam just logged in


// ... is rest as well as spread operator depending on its use case.
// function calculateCartPrice(...num1){ 
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));
// output => [ 200, 400, 500, 2000 ]

function calculateCartPrice(val1, val2, ...num1){ 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000)); 
// output => [ 500, 2000 ]

const user = {
    username: "arpit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// direct object can be entered also.
handleObject({
    username: "sam",
    price: 399
})

//array can be passed too
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));

// direct array can be entered also
console.log(returnSecondValue([200, 400, 500, 1000]));
