'use strict';

const typeOffAnd = val => val && typeof val;
const typeOffOr = val => val || typeof val;

// &&
// return first if false.
// return second if true.

console.log(typeOffAnd(false));
console.log(typeOffOr("aha"));
