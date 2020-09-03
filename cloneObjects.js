'use strict';


// clone an object in JavaScript ...
const obj = { a: 1, b: 2, c: { one: 1, two: 2 } };
console.log("obj", obj)


// 1. spread Operator 
// prototypes are ignored, In addition, nested objects are not cloned, but rather their references get copied.
// const spreadClone = {... obj};
// console.log("spreadClone", spreadClone);
// obj.c.one = 99; // change the main obj.
// console.log("spreadClone", spreadClone); // change will appears here.


// 2. JSON methods
// it is CPU-intensive and only accepts valid JSON.
// const jsonClone = JSON.parse(JSON.stringify(obj));
// console.log("jsonClone", jsonClone);


// 3. Object.assign
// nested objects are not cloned, but rather their references get copied

// - Object.assign is another alternative
// const assignClone = Object.assign({}, obj);
// console.log("assignClone", assignClone);


// - Object.keys is another more verbose alternative that shows the concept in greater depth
// const keysClone = Object.keys(obj).reduce((acc, key) =>  (acc[key] = obj[key], acc), {});
// console.log("keysClone", keysClone)





