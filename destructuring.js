'use strict';



// Destructuring For Objects;
let obj = { name: 'dante', age: '22', weapons: { sword: 'rebellion', gun: 'Ebony & Ivory' } };


let { name: myName, age:myAge, weapons: { sword:mySword, gun } } = obj;
console.log(myName);
console.log(myAge);
console.log(mySword, gun);

// if the variables already declared
let name = 'nero', 
    age = 12;

({name , age } = obj) // using parenthesis because js take the left side as block; 
console.log(name, age);