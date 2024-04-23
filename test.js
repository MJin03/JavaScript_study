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

let person ={
    name: "Alice",
    age: 25,
    greet: function() {
        console.log("Hello," + this.name);
    }
};

console.log(person.name);
person.greet();

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
numbers.push(6);
console.log(numbers);

function add(a,b) {
    return a+b;
}
console.log(add(2,3));

let multiply = function(a,b) {
    return a*b;
}
console.log(multiply(2,3));

let divide = (a,b) => a/b;
console.log(divide(6,3));

let now = new Date();
console.log(now);

let specificDate = new Date('2024-01-01');
console.log(specificData);

let regex = /ab+c/;
console.log(regex.test('abc'));
console.log(regex.test('ac'));

let map = new Map();
map.set('key', 'value');