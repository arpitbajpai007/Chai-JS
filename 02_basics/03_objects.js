// objects can be declared in two ways - 1) as a literal. 2) as a constructor(singleton).
// literal se singleton nahi banega aur constructor se singleton banega.

// singleton
// Object.create // Constructor method

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Arpit",
    "full name": "Arpit Bajpai", // is value ko dot se access nahi kiya ja sakta hai isliye dusra method bhi aana chahiye.
    [mySym]: "myKey1", // bina square braces ke ye symbol ki tarah nahi use hota hai for example here it gives string datatype. Symbol ki tarah use karne ke liye ye syntax jaroori hai.
    age: 22,
    location: "lucknow",
    email: "arpit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // accessing way
// console.log(JsUser["email"]) // another accessing way
// console.log(JsUser["full name"]) // can be accessed only via second method 
// console.log(JsUser[mySym])

JsUser.email = "arpit@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "arpit@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}


// console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo());