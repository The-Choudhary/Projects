// variable to store random number
let random = Math.random()
console.log (random)

// geting input first number from user
let a = prompt("Enter your first number");
// geting input operator from user
let b = prompt("Enter your Operater");
// geting input second number from user
let c = prompt("Enter your second number");

let obj = {
    "+": "-",
    "-": "/",
    "*": "+",
    "/": "**",

}
// condition for 10% chance of wrong calculation
if (random > 0.1) {
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
// else 90% coreecect calculation
else {
    c = obj[c]
}