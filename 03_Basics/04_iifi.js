// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ;-> very important


( () => {
    console.log(`DB CONNECTED TWO `);
} )();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('sandeep')