'use strict';

Promise.resolve(1)
    .then((x) => x+1) // return 2
    .then((x)=> {throw new Error("my error")}) // return error
    .catch(()=> 1) // return 1
    .then((x) => x+1) // return 2
    .then((x) => console.log(x)) // x = 2
    .catch(console.error)



    // result that x = 2 ;