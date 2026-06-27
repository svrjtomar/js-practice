"use strict";



console.log('Phase 2')


function greet (){
    console.log('phase 2')
    return "Hello World"
};
console.log(greet());


function add(a,b){
    return a+b;
};
console.log(add(2,5));



function sqr(a){

return a*a;
}
console.log(sqr(11));

function evenodd(a) {
    if(a%2===0){
        return 'even';
    }
    return 'odd';
}
console.log(evenodd(11));


function toFaren(c){

    return (9/5*c)+32;

}
console.log(toFaren(10));

let toFaren1 = (c) => (9/5*c)+32;

console.log(toFaren1(37));


// Write a function that returns the greater of two numbers.

function greater(a, b) {

    if(a>b) {
        return a;
    }else if (b>a){
        return b;
    }else {
        return 'both ae queal'
    }
}

console.log(greater(7, 73));

// Create a function with default parameter "Guest".?

function test1(uname="Guest") {
    return "Hello "+uname;"!";
}
console.log(test1("Shiv Raj"));

// Create a function to calculate area of rectangle.

function area(l,b){
    return l*b;
}

console.log(area(5,50));

// Write a function that returns "Adult" if age ≥ 18 else "Minor".

function adult(age){

    return age>=18? "Adult" : "Minor";
}

console.log(adult(50));


// Create a function to reverse a string.

function revSTR(str){
return str.split("").reverse().join("")
}

console.log(revSTR('ShivraJ'));

// Write a function expression for multiplication.

var multiplication = function(a,b){
    return a*b;

};

console.log(multiplication(15, 13));

function sumAll(...c){

    let total = 0;
    for (let a=0; a<c.length; a++){
        total += c[a];  
    }
    return total;
}

console.log(sumAll(4, 50, 50, 5,6 ,60 ));


// Write a function that counts vowels in a string.

function countVowels(str){

let strArray = str.split("");
let count=0;
    for(let a=0; a<strArray.length; a++){
       
        if(strArray[a].includes('a')){
            count++
        } else if(strArray[a].includes('e')){
            count++
        }else if(strArray[a].includes('i')){
            count++
        }else if(strArray[a].includes('o')){
            count++
        }else if(strArray[a].includes('u')){
            count++
        }

       }
    
    return "Vowel Count: "+count;
}
console.log(countVowels('Shiv Raj singh'));


// 2nd method

function countVowels1 (str){
    let vowels ="aeiouAEIOU";
    let count =0;
   for(let a=0; a<str.length; a++)
    { 
        if(vowels.includes(str[a])) {
            count++;
        }

    }
return count;
};

console.log(countVowels1('Shiv Raj'));


// Create a function that checks if a string is palindrome.

function palindrome(str){

   let str1= str.split("").reverse().join("")

    return (str==str1)? true: false;
}
console.log(palindrome('malayalam'));

// 2nd Method

function palindrome1(str){
let left=0, right= str.length-1;

while(left<right){
   if(str[left]===str[right])
   {
    left++;
    right--;
   } else {
    return false;
   }

}return true;

}
console.log(palindrome1('racecar'));

// Write a callback function example using setTimeout.





// Part 2 — Advanced Functions (21–35)

// Write a recursive function for factorial.
 function factorial(a){
       let fact =1;
    while(a>0){
        fact= fact*a;
        a--;
    }
 return fact;
 }

console.log(factorial(3));

// recursive function

function factorial1(n){
    if(n===0){
        return 1;
    }
    return n*factorial1(n-1);
}

console.log(factorial1(10));

// Write recursive Fibonacci function.


function fibonacci(n) {
if (n <= 1) {
return n; // Base case
}
return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

function printFibonacciSeries(count) {
for (let i = 0; i < count; i++) {
console.log(fibonacci(i));
}
}

printFibonacciSeries(5);

// Create an IIFE that prints "Executed".

(function() {
console.log("Executed")
})();

//Reverse an array.


let numbers = [21, 43, 58, 53, 52, 14];
let revNumbers =[];
function reverse(num) {
     
    for(let i=0; i< numbers.length; i++){
      
       revNumbers[i] = numbers[numbers.length-1-i];
        console.log(revNumbers)
    }
    return revNumbers;
}


console.log(reverse(revNumbers));


//Sort numbers ascending.
numbers = [21, 43, 58, 53, 52, 14, 7, 9];

function sorting(arr) {

    sortedArr = arr.sort((a,b) => a-b );

    return sortedArr;
    
}

console.log(sorting(numbers));

///

numbers = [21, 43, 58, 53, 52, 14, 7, 9];

numbers.splice(2,3);
console.log(numbers)
numbers.splice(2,0,48, 84, 56)
console.log(numbers)
numbers.sort((a,b) => a-b);
console.log(numbers)
let newArray = numbers.slice(3, 7)
console.log(newArray)
console.log(numbers.indexOf(48))
console.log(numbers.includes(48))
let Fullname = ['Shiv', 'Raj', 'Singh'];
console.log(Fullname.join('.'));

const num = [21, 43, 58];
const items = [48, 84, 56];
const name = ['Shiv', 'Raj'];
const rest = ['Singh'];
let newArray1 = [...num, ...items, ...name, ...rest];
console.log(newArray1);
let newNum = [...num];
console.log(newNum);

let maxNumber = Math.max(...numbers)
console.log(maxNumber);


//Use find to get first even number.
let array1 = [21, 23, 43, 52, 23, -41, 41, 51];

let output = array1.find(a => a%2===0);
console.log(output)
//Use findIndex to locate number > 50.
output = array1.findIndex(a => a>50);
console.log(output)
//Use some to check if any number is negative.
output= array1.some(a=> a<0);
console.log(output)
//Use every to check if all numbers are positive.
output = array1.every(a=> a>0);
console.log(output)

//Create array of names and convert all to uppercase.
let names = ['Shiv', 'Raj', 'Singh', 'Tomar']
output = names.map(a=> a.toUpperCase())
console.log(output)

//Filter all students with marks > 80.
let marks = [40, 12, 12, 90, 94, 84, 38];
output = marks.filter(a=> a>=80);
console.log(output);
//Calculate average using reduce.
output = Math.floor(marks.reduce((a,b) => (a+b))/marks.length)
console.log(output);

//Count occurrences of numbers in array.
output = marks.reduce((a,b) => {
    a[b]= (a[b] || 0) +1;
    return a;
}, {})
console.log(output);
//Remove duplicates using Set.
output = [...new Set(marks)]
console.log(output);

//# Part 5 — Objects Basics (76–90)
// 1. Create object for a student.
let student = {
  name: "Shiv Raj",
  age: 20,
  course: "Computer Science",
  grade: "A"
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
//Add new property dynamically.
student.email = 'test@test.com';
student['city'] = 'Delhi';
console.log(student);
//Delete a property.
delete student.city;
delete student.name;
console.log(student);

//Create object method.
student = {
  fname: "Shiv Raj",
  age: 20,
  course: "Computer Science",
  grade: "A",

  // Object Method
  introduce: function() {
    return `Hi, my name is ${this.fname}. I study ${this.course}.`;
  },

  // Nested object
   address: {
    street: "123 Main Road",
    city: "New Delhi",
    zip: "110001"
  }
};

console.log(student.introduce());
console.log(student.address.city);

//Destructure object properties.
// Destructuring syntax
let { fname, age=18, course, grade } = student;
console.log(fname)
console.log(age)
//Rename variables while destructuring.
//let { fname:fullName, age:age1, course:course1, grade } = student;

//Copy object using spread operator.
let student1 = {...student}
console.log(student)
console.log(student1)
//Merge two objects.
let mergedStudent = {...student, ...student1}
console.log(mergedStudent)









//Use forEach to print all numbers doubled.

let num1 = [3, 5, 3, 14, 18];

let num2 = num1.forEach(element => {
  let doubleNum = element*2;
    
});
console.log(num2)

num1.map(element => {
 let sqrNum = element*element;
    console.log(sqrNum)
})

function double(x){
    return x*2;
}
let doubleNum = num1.map(double);
    console.log(doubleNum)


    //Use filter to get even numbers.
let evenNumbers = num1.filter(x => { return (x%2 === 0)
})
console.log(evenNumbers)

"use strict";
test1 = x => x%2 === 0;
console.log(test1()) //false


//Use reduce to calculate sum.


console.log(num1.reduce((a,b) => a+b, 10))

//Use reduce to find maximum number.
num1 = [3, 5, 300, 114, 18];
let maxNum = num1.reduce((a,b) => {
    if(a>b) {
     return  a;
    }else {
        return b;
    }
})

console.log(maxNum)
