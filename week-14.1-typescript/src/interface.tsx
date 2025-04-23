interface User {
    name:string;
    age:number;
    address:{
        city:string;
        country:string;
        pincode:number;
    };
}

let user:User={
    name:"souradip",
    age:21,
    address:{
        city:"kolkata",
        country:"india",
        pincode:700081
    },
};

function isLegal(user:User):boolean{
    if(user.age>=18){
        return true;
    }
    else {
        return false;
    }
}
const ans=isLegal(user);
if(ans){
    console.log("i am legal");
    
}
else {
    console.log("i am illegal");
}

//implementing interface with classes
interface People{
    name:string;
    age:number;
    //greet:()=>string;
}

let person:People={ //creating interface with function
name:"souro",
age:22,
greet:()=>{
    return "hello"
}
}

// let greeting=person.greet();
// console.log(greeting);

//classes in typescript
class Manager implements People{
name:string;
age:number;

constructor(name:string,age:number){
this.name=name;
this.age=age;
}
}

let user=new Manager("raj",30);
console.log(user);