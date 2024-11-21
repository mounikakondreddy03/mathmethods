// math methods

console.log(Math.round(12.5))
console.log(Math.floor(15.24))
console.log(Math.floor(-15.24))
console.log(Math.ceil(12.54))
console.log(Math.trunc(4.9))
console.log(Math.pow(2, 3));
console.log(Math.sqrt(25));
console.log(Math.abs(-4.25));
console.log(Math.min(1, 3, -1, 5)); 
console.log(Math.max(1, 3, -1, 5));
console.log(Math.random()); // Output: Random number between 0 and 1
console.log(Math.random() * 10); // Output: Random number between 0 and 10

// es6 features

// 1. let and const

let x = 25;
x = 50
console.log(x)

const y = 20;
y = 30;
console.log(y)

// 2. Arrow Functions

const multiply = function(a, b) { return a * b; }; console.log(multiply(5,6));
const greet = () => "Hello!";
const add = (a, b) => a + b;
console.log(add(5, 5));

// 3. temporal literals

const age = 21;
const message = `You are ${age} years old.`;
console.log(message);  

const score = 95;
console.log(`Your score is ${score}!`);

// 4. default parameters

function a(user = "User") {
    return `Hello!, ${user}`
}
console.log(a());
