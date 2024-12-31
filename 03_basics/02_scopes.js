// var c = 300


// Block and Global scope:
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
    // var c = 30
}



// console.log(a);
// console.log(b);
// console.log(c); // 30

// var ke sath scope issues hote hain isiliye ise use nahi karte hain.


// nested scope:

function one(){
    const username = "arpit"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error : website is not defined

    two()
}

// one()

if (true) {
    const username = "arpit"
    if(username === "arpit"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ****************** Interesting ******************

console.log(addone(5)); // does not give error, declaration se pahle use kar sakte hain.

function addone(num){
    return num + 1
}

console.log(addTwo(5)); // gives an error, declaration se pahle use nahi kar sakte.

const addTwo = function(num){
    return num + 2
}


