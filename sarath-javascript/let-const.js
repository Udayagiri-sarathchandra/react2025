// Temporal Dead Zone ( Let and Const Declartions)

console.log(b); // undefined (hoisting)

// "a is in a Temporal Dead Zone"
//console.log(a); // Cannot access 'a' before initialization ( Uncaught ReferenceError)

let a = 10;
var b =100;

var b =20; // var can be delared again 
//let a = 20; // can't be declared again (syntax error)
 
let c; 
c=30; // redeclaration is allowed 
c=40;
console.log(c)

//Uncaught SyntaxError: Missing initializer in const declaration
//const e; // redeclaration is not allowed.
const d =1000;
 // d=2000; // TypeError: Assignment to constant variable.



