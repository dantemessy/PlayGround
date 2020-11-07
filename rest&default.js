'use strict';

// default value
let fun = (input) => console.log(input);

fun(); // undefined;
fun("test"); // test;

let defaultFun = (input= 'default value') => console.log(input);

defaultFun(); // default value;
defaultFun("test"); // test;

// rest parameters
let funWithRest = (a, b, ...rest) => {console.log(a, b, rest);}
funWithRest();
funWithRest(1);
funWithRest(1,2);
funWithRest(1,2,3,4,5,6);