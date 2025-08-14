// there are 3 way to declare a variable
// const,   let,    var

// const - whereever we want constant value
const a = 10
console.log(a);
// a = 200;    // it gives error as we cant chnage its value
console.log(a);

// let - the basic way to declare a varibale
let b = 20;
console.log(b);
b = 30;
console.log(b);

// both let and const are strict in caparision to var
// as we cant use them without declaration
// let
// here we can use it without declaretion
console.log(c);
var c = 10;

// But it recommended that to not use var
// In memory phase all them are got memory 
// But var get in the "global" variable with initiaalisation - undifined with it
// while let and const dont initialise any value in a separate space "script"

// Hosting - Allocating memory before inisialisation and able to access but only var not let ad const
// Dead Zone -Its means we cant access let and const variables befor inisialisation we get error, but in var its ok

// let & const - Blocked Scoped
{
    let d = 20;
    const e = 10;
    var f = 30;
    console.log(d);
    console.log(e);
    console.log(f);
} 

// The below 2 lines gives error as we are trying to access it out of there scope
// console.log(d);
// console.log(e);

// But we can access var f 
console.log(f);


// Lexical Scope - If a function cant find a variable inside its local scope 
// Its search in the outer scope
// But it is noe vice versa

function hello(){
    let h = 100;  // here it print 100 , but if we comment it, then search in outer loop
    // And find h = 50 and print it
    console.log(h);
}

let h = 50;
hello();