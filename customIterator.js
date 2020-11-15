'use strict';




let myObj = {
    a: 1, 
    b: 2, 
    c: 3,

    [Symbol.iterator](){
        let i = 0;
        let keys= Object.keys(this);
        return {next(){
            return {
                value:myObj[keys[i]],
                done: i++ === keys.length
            }}
        }
    },

    myFun(){

    }
};



for (let val of myObj) {
    console.log(val);
}