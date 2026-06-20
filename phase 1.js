// // Console & Basics
// console.log('Hello JavaScript');
// console.log('Shiv, 23, Delhi');
// console.warn('Warning message');
// console.table([1,2 ,3,4,5]);

// // Variables
// var  studentName = "Shiv Raj Singh";
// var age = '27';
// console.log(age, studentName);

// // Create two variables and swap their values.
// var x = 'x';
// var y = 'y';
// var z=x;
// x=y;
// y=z;
// console.log(x, y)

// const PI = 3.14;
// console.log(PI)

// var score = 10;
// score +=10;
// score = score+10;
// console.log(score)

// var firstName, LastName, fullName;
// firstName = "Shiv";
// LastName =  'Raj';
// fullName = "Shiv Raj";
// console.log(firstName, LastName, fullName)

// var phrase = 'Shivraj';
// var num = 10;
// var bool = true;
// var null1 = null;
// var und1;

// console.log(typeof(phrase))
// console.log(typeof(num))
// console.log(typeof(bool))
// console.log(typeof(null1))
// console.log(typeof(und1))

// // Type Conversion & Coercion

// let num1 = "50";
//     num1 = Number (num1)
//     console.log(typeof(num1))
//     console.log(num1)

// let num2 = 100;
//     num2 = String(num2)
//     console.log(typeof(num2));
//     console.log(num2)

// let myBool = "true";
//  myBool =  Boolean(myBool)
//     console.log(typeof(myBool))
// console.log(myBool)

// console.log("5" + 2); //52
// console.log("5" - 2); //3
// console.log(true + 1); //52

// let a = '123abc';
//     a= Number(a);
//     console.log(a);

// let ab = '500px';
// console.log(parseInt(ab));

// // Operators

// let one = 25, two =4;
// console.log(one+two);

// console.log(one/two);

// console.log(one ** 2);

// one++;
// console.log(one);

// one--;
// console.log(one);

// one += 20;
// console.log(one);

// console.log(one>two);
// console.log(one<two);
// console.log(one<=two);
// console.log(one>=two);

// console.log(one===two);

// console.log(10=="10");
// console.log(10==="10");

// Strings

let para = "Hi This is Shiv Raj";
let hello = "Hello World!";
let para2 = "This is apple tree";

console.log(para.length);
console.log(para.toUpperCase());
console.log(para.toLowerCase());
console.log(para.includes());
console.log(hello.slice(6, 11));
console.log(para2.replace("apple", "mango"));
console.log("HTML,CSS,JS".split(","));
console.log("   HTML,CSS,JS  ".trim());
console.log("Hi ".repeat(5));
console.log("Hi".charAt(0));
console.log(`My name is Aman and I am 20 years old`);

// Numbers & Math

// console.log(Math.round(4.7));
// console.log(Math.sqrt(81));
// console.log(Math.max(10, 20, 5, 99));

// let min = 1,
//   max = 100;
// let rand = Math.floor(Math.random() * (max - min + 1) + min);
// console.log(rand);

console.log(parseInt("99.99"));

console.log(Number.isInteger(99.99));

let n = 3.141592;
console.log(n.toFixed());

// Conditionals

if (-5 > 0) {
  console.log(`Number is Positive`);
} else {
  console.log(`Number is Negative`);
}

let num = 0;
if (num % 2 === 0) {
  console.log(`Number is Even`);
} else {
  console.log(`Number is odd`);
}

let age = 15;

if (age >= 18) {
  console.log(`You are eligible to Vote`);
} else {
  console.log(`You are not eligible to vote`);
}

// Find the largest among two numbers.
let x = 50,
  y = 50,
  z = 50;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else if (x === y) {
  console.log(`Both are equal`);
} else {
  console.log(`${y} is greater than ${x}`);
}

// Find the largest among two numbers.

if (x > y && x > z) {
  console.log(`x is greater`);
} else if (y > x && y > z) {
  console.log(`y is greater`);
} else if (x === y && y === z) {
  console.log(`All are equal`);
} else {
  console.log(`Z is greater`);
}

// Check whether a year is a leap year./

let year = 2026;

if (year % 4 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}

// Check whether a number is divisible by both 3 and 5.

let num3 = 27;
if (num3 % 3 === 0 && num3 % 5 === 0) {
  console.log(`${num3} is divisible by both 3 and 5`);
} else if (num3 % 3 === 0 && num3 % 5 != 0) {
  console.log(`${num3} is only divisible by 3`);
} else if (num3 % 5 === 0 && num3 % 3 != 0) {
  console.log(`${num3} is only divisible by 5`);
} else {
  console.log(`${num3} is not divisible by both 3 and 5`);
}

// alternative

if (num3 % 15 === 0) {
  console.log(`${num3} is divisible by both 3 and 5`);
} else if (num3 % 3 === 0) {
  console.log(`${num3} is only divisible by 3`);
} else if (num3 % 5 === 0) {
  console.log(`${num3} is only divisible by 5`);
} else {
  console.log(`${num3} is not divisible by 3 or 5`);
}

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

let marks = 90;

switch (true) {
  case marks >= 90:
    console.log("A");
    break;
  case marks >= 75:
    console.log("B");
    break;
  case marks >= 50:
    console.log("C");
    break;
  default:
    console.log("Fail");
}

if (marks >= 90) {
  console.log(`Grade: A`);
} else if (marks >= 75) {
  console.log(`Grade: B`);
} else if (marks >= 50) {
  console.log(`Grade: c`);
} else {
  console.log(`Fail`);
}

// Check whether a character is a vowel or consonant.
let input = "a";
let char = input.toLowerCase();

if (input.length != 1 || !/[a-z]/.test(input)) {
  console.log(`More than 1 Characters were entered`);
} else if ("aeiou".includes(char)) {
  console.log(`vowel`);
} else {
  console.log(`Consonant`);
}

// Create a calculator using switch statement.

let op = "*";
let num1 = 20,
  num2 = 40;

switch (op) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log(`Unknown Operater`);
}

// Print the day name based on a number (1–7).

let day = 6;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log(`Enter valid number`);
}

// Check whether a username is "admin" and password is "1234".

let uName = "admin";
let password = "1234";

if (uName === "admin" && password === "1234") {
  console.log(`Welcome ${uName}!`);
} else {
  console.log(`Username or Password does not match`);
}

let str = [];

if (str) {
  console.log("truthy value");
} else {
  console.log("falsy vlue");
}

// Create a variable and print "Valid" if it has a value otherwise print "Invalid"./

let valid = "";

if (valid) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

// ## Ternary Operator
// 1. Check whether a number is even or odd using ternary operator.

let num4 = 101;

num4 % 2 === 0 ? console.log("EVEN") : console.log("Odd");

// Check whether age is above 18 using ternary operator...

age = 10;

age >= 18 ? console.log("above 18") : console.log("below 18");

// Find the greater number between two values using ternary operator.

let a = 40,
  b = 5;

a >= b
  ? console.log(`${a} is greater number`)
  : console.log(`${b} is greater number`);

// Create a mini biodata program using variables and template literals.

let name = "Shiv Raj";
age = 28;
let gender = "Male";
let qualificatin = "Graduate";
let skills = "HTML, CSS, JavaScript";
let hobby = "Reading, Watching movies";

let biodata = `
----Mini BioData-----
Name   : ${name}
Age    : ${age}
Gender : ${gender}
Skills : ${skills}
Name   : ${hobby}
Name   : ${qualificatin}`;

console.log(biodata);

// Calculate the area of a rectangle.

let length = 10,
  width = 20,
  area;

area = length * width;

console.log(`Area is ${area}`);

// Calculate the simple interest.

let p = 10000,
  r = 10,
  t = 1,
  i;

i = (p * r * t) / 100;

console.log(`Simple Interest is ${i}`);

// Convert temperature from Celsius to Fahrenheit.

// c*9/5 =f-32

let c = 37,
  f;

f = (c * 9) / 5 + 32;

console.log(`${c} degree celcius is ${f.toFixed(1)} Fahrenheit`);


// Convert kilometers into meters.

let meters, kilometers=100;

meters =kilometers*1000;

console.log(meters+` meters`)

// Calculate total marks and percentage of 5 subjects.

let Hin =39, Eng = 48, Mathe= 48, Geo = 48, Sci= 84;
let sum = Hin+Eng+Mathe+Geo+Sci;
let percentage = (sum/5);

console.log(`The sum of 5 subject is ${sum} and percentage is ${percentage}%`)


// Calculate electricity bill based on units consumed.

let unit= 180, rate =7;

let electricityBill = unit*rate;

console.log(`Total bill is ${electricityBill}`)

// Count the total characters in a sentence excluding spaces.

let sentence = "My name is Shiv Raj Singh"

let count = sentence.length;
let countSpace = sentence.match(/ /g).length

console.log(count-countSpace)

// Create a username generator using first name and birth year.

let firstName = 'Shiv', birthYear = 1998;

let userName = firstName.slice(0, 4) + String(birthYear).slice(2,4);
console.log(userName)

// Logical Thinking Questions
// Check whether a number lies between 10 and 50.

num = 21;
(num>=10 && num<=50)? console.log(`Number lies between 10 to 50`) :console.log(`Number does not lie between 10 to 50`)

password= 'shivra22j';

(password.length>8)? console.log(`more than 8 `) :console.log(` Not more than 8 `) 


let hasLicence = true;
age= 19;

(age>=18 && hasLicence)? console.log(`Can Drive `) : console.log(`Cannot Drive `)


// Check whether a number is divisible by 2, 3, or both.

if(num%6===0) {
  console.log(`Divisible by both`)
}else if(num%2===0) {
  console.log(`Divisible by 2 only `)
}else if(num%3===0){
  console.log(`Divisible by 3 only `)
}else {
  console.log(`Divisible by neither 2 nor 3`)
}

// Print "Good Morning", "Good Afternoon", or "Good Evening" based on time.

let basPrice =100, gstRate=18;

finalAmount =basPrice*(1+gstRate/100)
console.log(finalAmount)


// Challenge Questions for Beginners

// Generate a random OTP of 4 digits.
let maximum =9999, minimum=1000;
let otp = Math.floor(Math.random()*(maximum-minimum+1)+minimum);

console.log(otp)

// Reverse a 3-letter string manually.

let phrase1 = 'CAT';

revStr = phrase1[2]+phrase1[1]+phrase1[0];

// 2nd way
revStr2 = phrase1.split("").reverse().join("");

console.log(revStr)
console.log(revStr2)

// Find the last character of a string.

lastChar = phrase1[phrase1.length-1]
console.log(lastChar)

// Convert a full name into uppercase initials.

let fullName = 'Shiv raj';

 initials = fullName.split(" ")[0].slice(0,1).toUpperCase()+"."+fullName.split(" ")[1].slice(0,1).toUpperCase()+'.';

 console.log(initials)

//  Check whether two strings are equal ignoring case sensitivity.

{
let phrase1 = 'this is a ca';
let phrase2 = 'This is a car';

if(phrase1.toLowerCase()===phrase2.toLowerCase()) 
{
  console.log( `equal`)
}else {
  console.log(`not equal`)
}


}


// Create a mini ATM balance checker.

// {
// let validCardNumber=1234, validPin=1234, balance=150;

// let cardNumber = prompt('Enter your Card Number :')
// let pin = prompt('Enter your Pin Number :')
// if(cardNumber==validCardNumber && pin==validPin){
//   alert(`Your balance is : ${balance}`) 
// }else {
//   alert(`Incorrect card number or pin`)
// }

// }


const arr = [32,98,67,350,20,12];

arr[0]=99;
arr.push(100)
console.log(arr)




{

let number = [2, 4, 6];
let multipliedNumber =[];

for (let i = 0; i < array.length; i++) {
 multipliedNumber[i]= number[i]*2;
  
}

}