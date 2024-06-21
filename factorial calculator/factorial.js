
var a = prompt("Enter a number");
let arr =[];
    for (let i = 1; i <= a; i++) {
        arr.push(i);}
console.log(arr);

const red =(a,b)=>{
    return a*b
};
console.log(arr.reduce(red));
alert("Your factorial is : "+arr.reduce(red));