// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Sat Sep 21 2024 08:17:29 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Sat Sep 21 2024
// console.log(myDate.toISOString()); // 2024-09-21T02:50:16.902Z
// console.log(myDate.toJSON()); // 2024-09-21T02:50:49.547Z
// console.log(myDate.toLocaleDateString()); // 21/9/2024
// console.log(myDate.toLocaleString()); // 21/9/2024, 8:21:40 am
// console.log(myDate.toLocaleTimeString()); // 8:22:01 am

// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2024, 8, 21)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2024, 8, 21, 8, 32)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2024-09-21")
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("09-21-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());

// console.log(`The day is ${newDate.getDay()}`)

newDate.toLocaleString('default', {
    weekday: "long",
})

// Date and Time are on a bit tougher side in JavaScript.
