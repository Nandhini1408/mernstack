let user={
    name:"Nivetha",
    age:19,
    "is Singer":true,
}
console.log(user);
for(let key in user){
    console.log(key+" : "+user[key]);
}
const array=[1,2,3,4,5]
for(let value of array){
    console.log(value);
}

//ternary operator
let n=11
let a= (n%2===0)?"Even":"Odd"
console.log(a)
let m=70;
let grade=(m>=90)?"A":(m>=80)?"B":(m>=70)?"C":"F";
console.log(grade)

let data=42;
let dataCopy=data;
dataCopy=49;
console.log(data)

//spread operator
let arr=[2,4,5,6,7,8,9]
let arr1=[11,12,13,14,15]
let arrCopy=[...arr,1,3]
console.log(arr)
console.log(arrCopy)

const obj={data:42}
const objCopy=obj
objCopy.data=65
console.log(obj.data)

//create two object and merge
const us={uname:"user1",age:"18"}
const add={city:"trichy",pin:"620007"}
const address={...us,...add}
console.log(address)