'use strict';



// Destructuring For Objects;
let obj = { name: 'dante', age: '22', weapons: { sword: 'rebellion', gun: 'Ebony & Ivory' } };


let { name: myName, age, weapons: { sword:mySword, gun } } = obj;

console.log(myName);
console.log(age);
console.log(mySword, gun);