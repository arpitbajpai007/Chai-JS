// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimann", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4) // Automatically square brackets add ho jaate hain


// console.log(myArr[1]);
 
// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop() // removes last element of array

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // join had bound all the values and converted it into a string

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // splice takes out the given portion and original array gets manipulated
console.log("C ", myArr);
console.log(myn2);
