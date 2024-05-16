// 변수, 상수
var x = 10;
let y = 20;
const z = 30;

z=25;

console.log(x);
console.log(y);
console.log(z);

let intNum = 42;
let floatNum = 3.14
let notANumber = NaN;
let positiveInfinity = Infinity;
let negativeInfinity = Infinity;

let bigIntNum = 123456789012345678901234567890n;

let singleQuoteString = 'Hello';
let doubleQuoteString = "World";
let templateLiteral = "Hello, World";

let person = {
    name: "Alice",
    age: function() {
        console.log("Hello, " + this.name);
    }
};

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
numbers.push(6);
console.log(numbers);

function add(a,b) {
    return a+b;
}