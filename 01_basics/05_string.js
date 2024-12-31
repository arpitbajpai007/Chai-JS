const name = "arpit" // 1st way of declaring string
const repoCount = 1

// console.log(name + repoCount + " value"); => outdated way

// Modern way (using backticks)
// backtics allow string interpolation which means we can inject variables 
// console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const gameName = new String('arpit-hc-com') // 2nd way of declaring string

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// string k methods
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-7, 4)
// console.log(anotherString);

const newStringOne = "     arpit   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://arpit.com/arpit%20bajpai"
// console.log(url.replace('%20', '-'))

console.log(url.includes('arpit'));

console.log(gameName.split('-'));

 






