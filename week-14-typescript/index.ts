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

//Return true or false based on if a user is 18+
function isLegal(age:number):boolean { //boolean is the return type of the function
    if(age>18) {
        return true;
    }
    else {
        return false;
    
    }
}
console.log(isLegal(21));


function Another(fn:()=>void ) {
    setTimeout(fn,1000);

}
Another(function() {
    console.log("heyyyy bhiduu")
})