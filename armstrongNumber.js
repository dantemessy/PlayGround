'use strict';


let res, isValidArmNumber = num => (res = num.toString().split("").reduce((acc, val) => acc += Math.pow(parseInt(val),3) , 0),res == num);




console.log(isValidArmNumber(278));
console.log(isValidArmNumber(153));
