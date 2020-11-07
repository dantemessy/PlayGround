'use strict';



// property value shorthand

let pro = "pro 1";
let obj = { pro };
console.log(obj);


// Method shorthand

let methObj = { myFun(test) { console.log(test); } }
console.log(methObj);


// computed object property name
let compObj = {
    test: 'test',
    [pro]: 'whatever'
}