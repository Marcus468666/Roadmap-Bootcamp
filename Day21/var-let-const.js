// variables or references
// variables are changeable
// variables are labels that points to memory location

// var x = 10;

// console.log(x);

// let x = 10;

// console.log(x);

// const x = 10;

// console.log(x);

// re-declaration
// let x=10;

// let x=3.14;

// console.log(x);

// re-assignment

// let x=10;

// x=3.14;

// console.log(x);

// hoisting is just a behaviour where the variable declarations or the function declarations moved to the top of the file.
// x = 10;
// y = 20;

// console.log(y);

// let x;

// console.log(x); cannot access 'x' before initialization

// var x;

// console.log(x);

// scoping
// global scope, function scope, block scope, local scope

let x = 10

if (x == 10){
    console.log('x equals', x);
}

console.log('x equals', x);

function func() {
    console.log('x equals', x);
}
func();
