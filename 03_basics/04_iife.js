// Immediately Invoked Function Expression (IIFE)
// global scope se pollution se bachne k liye and 
// for immediate execution 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// ()() => (function ki definition)(function ka execution)

( (name) => {
    // unnamed IFFE
    console.log(`DB CONNECTED TWO ${name}`);
})('arpit')
