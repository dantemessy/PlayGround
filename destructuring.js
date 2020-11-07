'use strict';



// Destructuring For Objects;
let obj = { name: 'dante', age: '22', weapons: { sword: 'rebellion', gun: 'Ebony & Ivory' } };


let { name: myName, age: myAge, weapons: { sword: mySword, gun } } = obj;
console.log(myName);
console.log(myAge);
console.log(mySword, gun);

// if the variables already declared
let name = 'nero',
    age = 12;

({ name, age } = obj) // using parenthesis because js take the left side as block; 
console.log(name, age);



// Destructuring for Arrays
let arr = [1, 2, 3];
let [one, two, three] = arr;
console.log(one, two, three);

let testOne = 11, testTwo = 22, testThree = 33;

[testOne, testTwo, testThree] = arr;
console.log(testOne, testTwo, testThree);
