// Syntax :-

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// Best shortcut for copying -> Shift + Alt + downward arrow key

// key match hone ke baad ka saara code execute ho jata hai except default isiliye break ka use kiya jaata hai to avoid that.

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    
    default:
        console.log("default case match");
        break;
}