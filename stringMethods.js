'use strict';

// The padStart() method 
// pads the current string with another string until the resulting string reaches the given length. 
// The padding is applied from the start of the current string.
let name = "dante";


console.log(name.padStart(6));
console.log(name.padStart(name.length * 2,"#"));


// Create a function that masks a string of characters with # except for the last four (4) characters.

let mask = (str, maskChar= "#") => str.slice(-4).padStart(str.length, maskChar);

console.log(mask("123456"));
console.log(mask("123456", "@"));