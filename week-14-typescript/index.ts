// let x:number | string  =1; //defining types in typescript(type inferencing)

// x="souradip";
// console.log(x);


//Write a function that greets a user given their first name. 
function Greet(firstName:string) {
    console.log("hello" + firstName);

}
Greet('Souradip');


//Write a function that calculates the sum of two functions
function TwoSum(a:number,b:number):number {
return a+b;
}
console.log(TwoSum(5,7));
