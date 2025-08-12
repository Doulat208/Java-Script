// Referense Type - Objects, Arrays, Functions

// Objects
let course ={
    title: "Hello",
    description:"Its Simple",
    rating:4.5
};

console.log(course);
console.log(typeof(course));

console.log(course.title);
console.log(course['title']); // Its also gives access to the title
console.log(course.description);
console.log(course['description']); // Its also gives access to the title
console.log(course.rating);

// Value type VS Referense type
let x = "Hello";
let y = x;

x = "HYYYYYY"

console.log(x); 
console.log(y);     // Here the value of X is copied into the Y so there is no changes in Y if we make changes in X

let p ={name: "Doulat"};
let q = p;

p.name = "Bikash";

console.log(p);
console.log(q);     // Here the Referense of P is copied , so mmake chnges in one reflect in another as they refer to same object

// Arrays
// In JS we can store values of multiple data type in one array
let sub = ['math', 'phy', 12, true];
console.log(sub[0]);
console.log(sub[1]);
console.log(sub[2]);
console.log(sub[3]);

console.log(sub);
console.log(typeof(sub)); // Here the type is Object

// Functions
function createSub(subName){
    console.log('Ceating ' + subName )
}

createSub('Phy');
createSub('Math');
createSub(12);