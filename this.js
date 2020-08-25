'strict mode';

/* --------------------------> this in JS <-------------------------- */


// function test(){
//     'use strict'; // will return undefined in strict mode.
//     console.log(this) // return global object for node or windows object for browser.
// }


// let jeff = {
//     one :function(){console.log(this)} , // refer to jeff object
//     two : ()=> console.log(this) // refer to global
// }


/* --------------------------> call and apply <-------------------------- */
// same functionality but:
// call --> take arguments with Comma;
// apply --> take arguments as an Array;
// bind --> returns a bound function that, when executed later

// const obj = { name: "ali", age: 25 };

// function print(arg) {
//     console.log(this.name);
//     console.log(arg);
//     return "Done!";
// }

// console.log(print.apply(obj, ["apply"]));
// console.log(print.call(obj, "call"));

// const bind = print.bind(obj);
// console.log(bind("This is Binding"));


