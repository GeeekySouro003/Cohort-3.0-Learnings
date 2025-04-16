let firstName:string ="souradip"
let age:number=22

interface UserType {
    firstName:string,
    lastName:string,
    age:number
}

function random(user:UserType) {

}

function isLegal(user:UserType) {
    if(user.age>18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isLegal({
    firstName:"souradip",
    lastName:"dasgupta",
    age:22
}))

let user:UserType = {
    firstName:"souradip",
    lastName:"dasgupta",
    age:22
}