// let myName = "arpit     "
// let myChannel = "chai     "

// console.log(myName.trueLength);

// console.log(myName.trim().length); // low IQ wala tareeka 

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.arpit = function(){
    console.log(`arpit is present in all objects`);
}

Array.prototype.heyArpit = function(){
    console.log(`Arpit says hello`);
}

// heroPower.arpit()
// myHeros.arpit()
// myHeros.heyArpit()
// heroPower.heyArpit()

// Inheritance 

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}
 
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User 

// modern syntax:
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"arpit".trueLength()
"iceTea".trueLength()
