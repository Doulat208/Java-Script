// Execution Context
// 1. Memory Phase - setup enviroment for variables
// 2. Code Phase - linne by line execution and thread of execution

// createCourse('DSA');
// console.log(a);

// function createCourse(courseName){
//     console.log(courseName);
// }

// var a =  10;
// console.log(a);
// createCourse('HTML')

console.log(a);
console.log(this.a);
console.log(window.a);

// Here in the execution context, if we take a as let then it cant access
// let a = 10;
// Thats why we use var
var a = 10;

console.log(a);
console.log(this.a);
console.log(window.a);

console.log(this);
console.log(window);

console.log(window == this);