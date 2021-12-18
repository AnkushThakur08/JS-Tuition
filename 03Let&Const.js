// console.log(a);
// console.log(b); // Hosting
// Var is hosited
//TODO: Let & const are hoisted?
//TODO: Let & Const are in a Temporal Dead Zone

var a = 10;

// console.log(b); Referecen- Not present in the block scope
// console.log(x);

let b = 20;

let c = "ghjghjg";
console.log(a);

const z = 100;
z = 10;

// ReferenceError, TyperError, Syntax Error

{
  let x = 100000;
}

console.log(x);
