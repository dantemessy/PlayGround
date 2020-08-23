'use strict';


// variable and function (( declarations )) are put into memory during the compile phase.
// the value is not hoisted with the declaration.

var foo = 1;


var foobar = function() {
  console.log(foo)
  var foo = 2;
}

foobar() // undefined



// using let lead us to temporal dead zone;
// console.log(hoist)
// var hoist = "value" // undefined
// let hoist = "value" // expected undefined but it throws as error
