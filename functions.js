// Functions 
// Here they are know as first class citizen 

// Here we can log means display a function
function add(a, b){
    return a+b;
}

// here the memory allocated for the function

console.log(add);   // This will log the function means display the code of the function
console.log(add(5,10));     // this will log the output of the function

// Not only that
//  here we can assign a function to a variable
let sum = function (a,b){
    return a+b;
}

// here the memory allocaated for thr variable 

console.log(sum);   // we can log it via variable 
console.log(typeof(sum)); // Its a function type
console.log(sum(2,3));

// Not only that we can pass functions as arguuments

function diff(a,b){
    return a-b;
}

// here we pass multiple function inside a function
function operate(operatefun, a, b){
    return operatefun(a,b);
}

console.log(typeof(operate));   // it is also a function
console.log(operate(sum, 2,4));     // it will do the sum function operation
console.log(operate(diff, 2,4));    // it will do the diff function operation


