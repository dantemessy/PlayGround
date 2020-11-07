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
let [one, two, three, four='does not exist'] = arr;
console.log(one, two, three, four);

let testOne = 11, testTwo = 22, testThree = 33;

// to skip element
[testOne, , testThree] = arr;
console.log(testOne, testTwo, testThree);

// array of arrays
let newArr = ['a', 'b', ['c', 'd'], 'e', 'f', 'g'];

let [ a, b, [c, d], ...others] = newArr;
console.log(a, b ,c ,d, others);

// variable swap
let t1 = 't1',
    t2 = 't2';
console.log(t1 , t2);

[t1, t2] = [t2, t1];
console.log(t1 , t2);
