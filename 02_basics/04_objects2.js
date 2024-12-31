// const tinderUser = new Object() // singleton
const tinderUser = {} // non-singleton

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// object ke andar object : 
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "arpit",
            lastname: "bajpai"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2} // gives similar problem as array. Object k andar object ho jaata hai.
// const obj3 = Object.assign(obj1, obj2, obj4)

//const obj3 = Object.assign({}, obj1, obj2, obj4) // curly braces acts as target and obj1, obj2 and obj4 act as a source.

const obj3 = {...obj1, ...obj2} // syntax using spread operator will be used most same as array.
// console.log(obj3); 


const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring Array aur Objects dono ki hoti hai par abhi hum sirf Objects ki dekhenge.
const course  = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

// Ye react se related hai itna portion:
// const navbar = ({company}) => {

// }

// navbar(company = "arpit")

// API in object format:
// JSON (JS object notation) 
// {
//     "name": "arpit", // keys and values are both string in Json
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API can also be in format of array other than object:
[
    {}, // objects
    {},
    {}
]

// Study RandomUser API

             