'use strict';


const arr = [1,2,3,4,5,6];


let filter = arr.filter(val => val > 4);
console.log("filter", filter)


let map = arr.map(val => val > 4);
console.log("map", map)