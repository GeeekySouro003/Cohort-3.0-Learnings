"use strict";
// let x:number | string  =1; //defining types in typescript(type inferencing)
// x="souradip";
// console.log(x);
//Write a function that greets a user given their first name. 
function Greet(firstName) {
    console.log("hello" + firstName);
}
Greet('Souradip');
//Write a function that calculates the sum of two functions
function TwoSum(a, b) {
    return a + b;
}
console.log(TwoSum(5, 7));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(21));
