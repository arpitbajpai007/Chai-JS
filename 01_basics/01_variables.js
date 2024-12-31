const accountId = 144553 // const values can't be changed.
let accountEmail = "arpit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //bina variable ke aage kuch likhe ek variable ke liye memory reserve kar sakte hain javascript me but it is not a good practice.
let accountState;//if you declare a variable in javascript and don't initialise it then it is considered as undefined.

//constants can only be declared using const keyword but variables can be declared in two ways using let and var. var is no more used in javascript because it has scope problems and that's why only let is used as it has no scope probelms.

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212221"
accountCity = "Delhi"

// First Method for printing
// console.log(accountId);
// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

//second Method (generates a table)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])