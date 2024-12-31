const user = {
    userName: "arpit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.userName}`);
        console.log(this);
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this); //{}


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}


// 1. -> new  keyword use karne par sabse pahle ek empty object create hota hai jisko instance bola jaata hai. 2 -> uske baad ek constructor function call hota hai new keyword ke kaaran. 3 -> This keyword ke andar jo bhi aapne arguments wagairah likhe hain sab inject ho jaate hain. 4 -> aapko mil jaate hain function ke andar.


const userOne = new User("arpit", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);



// JavaScript has prototypal behaviour 
// Protypal behaviour ki wjh se hi new and this keyword are working aur classes bhi isi ki hi wjh se mili hain aur protypal inheritance or inheritance bhi isi ki wjh se mila hai.
// Javascript me har cheej at the end of day object hai aur har property object ki unke paas hain. They might be usable or not.
// function object hai ya function function hi hai???? Ans-> function function bhi hai aur object bhi hai.
// (Array, String, etc.) => (Object) => (Null)