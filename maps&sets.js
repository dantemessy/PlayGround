'use strict';



// Map
// we can use any data type as key.


let myMap= new Map();

myMap.set('string', 'any string');
myMap.set(99, 'integer');
myMap.set([1,2,3], 'array');
myMap.set(function name(params) {}, 'function');
myMap.set({a:1, b:2}, 'object');


console.log(myMap);