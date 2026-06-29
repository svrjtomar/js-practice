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
numbers = [21, 43, 58, 53, 52, 14, 7, 9]

// function sorting(arr1) {

//     sortedArr = arr1.sort((a,b) => a-b );

//     return sortedArr;
    
// }

// console.log(sorting(numbers));

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

//# Part 6 — Advanced Objects + Real Logic (91–100)

// 1. Use `Object.keys()` on object.
let keys = Object.keys(student);
console.log(keys)
let values = Object.values(student)
console.log(values)
let entries = Object.entries(student)
console.log(entries)


//Loop through object using for...in.
for (let key in student) {
  console.log(key + ": " + student[key]);
}
// Freeze an object and test modification.
// Object.freeze(student);
// student.age = 35; //throwing error due to freeze
// console.log(student.age)
Object.seal(student)
student.age = 28;
console.log(student.age)
console.log(Object.isSealed(student))

//Create array of objects for users.
let users = [
    {fname: 'Shivraj', age: 38, city: 'Delhi'},
    {fname: 'Vijay', age: 28,   city: 'Mumbai'},
    {fname: 'Ajay',  age: 18,   city: 'Jaipur'}]

    //Find user with highest age.
let oldestUser = users.reduce((a, b) => (b.age> a.age? b : a));
console.log(oldestUser.fname, oldestUser.age, oldestUser.city)

//Build a mini TODO app using arrays + objects.

let todos = [
    {id:1, task: 'Solve Phase 2 ques', completed: true},
    {id:2, task: 'Solve Phase 3 ques', completed: false},
    {id:3, task: 'Solve Phase 4 ques', completed: false}
];

function addTask(task){
    let newId = todos.length +1;
    todos.push({id: newId, task: task, completed: false });
}
function completedTask(id){
    let todoUpdate = todos.find(t => t.id === id);
     if (todoUpdate) todoUpdate.completed = true;
}

function deleteTask(id){
    let index = todos.findIndex(a => a.id === id);
    todos.splice(index,1);
    todos = todos.map((t, index) => ({ ...t, id: index + 1 }));
    
}
function showAllTask(){
    todos.forEach(t => {
        console.log(`${t.id}. ${t.task} -${t.completed ? "Done" : "Pending"}`);
    });
}

deleteTask(2);
console.log(todos)
addTask('Phase 5 ques')
addTask('Phase 5 ques')
console.log(todos)
deleteTask(2);
completedTask(2)
completedTask(1)
console.log(todos)
showAllTask();


// cart system
let inventory = [
  { id: 1, name: "Apple", price: 30, quantity: 1 },
  { id: 2, name: "Milk", price: 50, quantity: 1 }
];
let cart=[]
let cartIndex = cart.findIndex(object => object.id == id)
function addItem(id, quantity=1){
    let position = inventory.findIndex(object => object.id ===id);
    let item = inventory[position];
    let itemName = item.name;
    let itemPrice = item.price

    let cartIndex = cart.findIndex(object => object.id == id)
    if(cartIndex !== -1){
        cart[cartIndex].quantity += quantity;
    } else {
    cart.push({id:id, name: itemName, quantity: quantity, price: itemPrice
    })
}
  
    console.log('Total Amount: '+calculateTotal())
   
}

function calculateTotal(){
        
       return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };

function removeItem(id){
let cartIndex = cart.findIndex(object => object.id == id)
    if(cartIndex !== -1) {
    cart.splice(cartIndex,1);
    }
    console.log('Total Amount: '+calculateTotal())

}
 
function updateItems(id, qty) {
let cartIndex = cart.findIndex(object => object.id == id)
    
    return cart[cartIndex].quantity += qty;
    
}

console.log(inventory)
addItem(1)
addItem(2)
removeItem(1)
updateItems(2, 9)
addItem(2)
console.log(cart)

//Create student management system.
let stud = [];

function addStud(sName, age, course){
    stud.push({id: stud.length+1, name: sName, age: age, course: course})
}

function remStud(id) {
  let  studIndex = stud.findIndex(obj => obj.id === id);
    if(stud[studIndex] !== -1){
        stud = stud.filter(obj => obj.id !== id)
    }
    
}


addStud('Shivraj', 28, 'BCA');
addStud('Vijay', 38, 'BCA');
addStud('Raj', 38, 'BCA');
remStud(2)
console.log(stud)

//phase 2 sheet 2

//Create an array of 5 favorite movies and print all values.
// **Hint:** Use indexing
let movies = ["Inception", "The Dark Knight", "Interstellar", "Avengers: Endgame", "RRR"];

for(let i=0; i < movies.length; i++){
    console.log(movies[i]);
}

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// **Hint:** Mixed data types + nested indexing

let boxOffice = ['Movies', 2026, ['SRK', 'Actor', 56], true ]
//1st method
for(let i=0; i < boxOffice.length; i++){
    if(typeof boxOffice[i] === "object") {
        console.log(boxOffice[i])
    }
}
// 2nd method
for(let i=0; i < boxOffice.length; i++){
    if(Array.isArray(boxOffice[i])) {
        console.log(boxOffice[i])
    }
}


// swap using temp variable
numbers = [1, 2, 3, 4 , 5, 6, 7, 8, 9];

let temp = numbers[1];
    numbers[1] = numbers[numbers.length-2];
    numbers[numbers.length-2] = temp;
    console.log(numbers)


//Create a 2D array and print all first elements of inner arrays.
let pairs = [[2,4], [5, 2], [9, 4], [11, 23]];

//using for loop
    for (let i=0; i<pairs.length; i++) {
        
        console.log(pairs[i][0])
    }
//using for of
     for (let inArray of pairs) {
        
        console.log(inArray[0])
    }
//using forEach
    pairs.forEach(element => {

        console.log(element[0])
        
    });


//Find the sum of all diagonal elements in a 3x3 matrix.

let matrix = [
    [1, 4, 5], 
    [2, 5, 4], 
    [5, 6, 4]]
let sum =0;
for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
}

for(let i = 0; i < matrix.length; i++){
    sum += matrix[i][matrix.length-1-i];
}

if (matrix.length % 2 !== 0) {
  sum -= matrix[Math.floor(matrix.length / 2)][Math.floor(matrix.length / 2)];
}
console.log(sum)

//Keep removing elements until array becomes empty.

num1 = [3, 5, 3, 14, 18, 8];
while(num1.length > 0){
    num1.pop();
    console.log(num1)
}

num1.unshift(1, 2, 4, 5)
num1.unshift(1, 2, 3, 5)
    console.log(num1)

num1.splice(Math.floor((num1.length-1)/2), 3, 5, 6, 7)
    console.log(num1)

num1.reverse()
    console.log(num1)

//full array manual reverse --loop for only half of length - full length will swap again an array will be unchanged

    
 for (let i = 0; i < num1.length/2 ; i++) {
        
        let temp = num1[i];
            num1[i] = num1[num1.length-1-i];
           num1[num1.length-1-i] = temp;
    }
    console.log(num1)

    // 1st half reverse
let n = Math.floor((num1.length)/2)
    for (let i = 0; i < n/2 ; i++) {
        
        let temp = num1[i];
            num1[i] = num1[n-1-i];
            num1[n-1-i] = temp;
    }
    console.log(num1)

// sort array -using compare function 

num1.sort((a,b) => a-b);
    console.log(num1)
num1.sort((a,b) => b-a );
    console.log(num1)

num1.sort((a,b) => {
    if((a%2) !== (b%2)) {
       return (a%2) - (b%2)
    }
    else {
      return  a-b
    }

});
    console.log(num1)

// Create a copy excluding first and last element.
num2 = num1.slice(1, num1.length-1)
    console.log(num2)
let num3 = num1.concat(num2)
console.log(num3);
let mergedSet = [...new Set(num3)]
console.log(mergedSet);

let fruits = ['apple', 'mango', 'guava']
console.log(fruits.includes('apple'))

let basket = ['apple', 'mango', 'guava', 'melon', 'plum'];
let allExist = true;
for(let i =0; i< fruits.length; i++){

    if(!basket.includes(fruits[i])){
        allExist = false;
        break;
    }
}
console.log(allExist)

//
console.log(fruits.indexOf('apple'))

//Find all positions of repeated number 5.
numbers = [3, 5, 6, 6, 3, 5, 8, 5, 3, 5];
let position = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if(element === 5){
        position.push(i)
    }
}
console.log(position)
//
console.log(fruits.join(','))

//
for (const element of fruits) {
    console.log(element)
    
}
//Count vowels from array of characters.
let chars = ['a', 'b', 'c', 'd', 'e', 'i', 'o', 'u', 'e', 'a'];
 let count= 0;
 let vowels = 'aeiou';
for (const element of chars) {
    if(vowels.includes(element)){
        count++;
    }
}
console.log(count)

//19. Reference Behaviour of Array
//Assign one array to another variable and modify second one.
let copyBasket = basket;
let shallowCopyBasket = [...basket];
console.log(basket);
basket.push('banana');
console.log(copyBasket);
console.log(basket);
console.log(shallowCopyBasket);

//
//Merge arrays and add extra values in between.
shallowCopyBasket = [...basket, 'apple', 'orange', ...fruits];
console.log(shallowCopyBasket);

//Questions (Phase -2 ) Sheet - 3
//forEach

let prices = [100, 250, 399, 499];
prices.forEach(element => {
    console.log(`₹${element}`)
});

let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];

students.forEach(element => { 
    if(element.marks > 50)
    {
        console.log(`${element.name} - Pass`)
    }
    else {
                console.log(`${element.name} - Fail`)

    }
    
});


//map()

names = ["anubhav", "rahul", "aman"];
let uNames = names.map(a => a.toUpperCase())
console.log(uNames);

let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

let discountedProducts = products.map(a => 
    ({ name: a.name, price: a.price, discountPrice: a.price*0.9 })
)
console.log(discountedProducts)

//filter()
let nums = [1,2,3,4,5,6,7,8];
console.log(nums.filter(a=> a%2===0));

users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];

let activeUsers = users.filter(a => a.active)
console.log(activeUsers)
// if want only names need to chain map()
activeUsers = users.filter(a => a.active).map(a => a.name)
console.log(activeUsers)

//reduce()
nums = [100, 2, 3, 4];
let total = nums.reduce((a, b) => {
    a += b
    return a;
}, 0)

console.log(total)

fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let freq = {};
for (let item of fruits) {
   
    if(freq[item]){
        freq[item]++;
    }else {
        freq[item] = 1;
    }
}
console.log(freq)

//now using reduce()
let freq1 = fruits.reduce((acc, item) => {
    if(acc[item]) {
        acc[item]++;
    }else {
        acc[item] =1;
    }
    return acc;
}, {})
  
console.log(freq1)

//find()
nums = [20, 35, 60, 80];
console.log(nums.find(a=> a>50))

users = [
  { username: "rahul" , name: 'Rahul' },
  { username: "admin", name: 'shiv'},
  { username: "aman", name: 'Aman' }
];

console.log(users.find(a => a.username==='rahul'))

//findIndex()
console.log(nums.findIndex(a => a==60))

students = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];

console.log(students.findIndex(a => a.marks < 40))

//some() returns true if at least one condition matches.
nums = [10, 20, -5, 40];
console.log(nums.some(a => a<0))


products = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
console.log(products.some(a => a.stock===0))

//every() - checks all elements.
console.log(nums.every(a => a>0))

students = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];

console.log(students.every(a => a.marks > 40))


// Phase 2 - sheet 4 
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}

console.log(car.brand, car.model)
car.model = 'M5'
console.log(car["brand"], car["model"])

let user = {
  name: "Anubhav",
  age: 20
}

user.isAdmin = true;
console.log(user)
delete user.isAdmin;
console.log(user)

//6. Count Properties
//Write a function that returns how many properties an object has.

function countProperties(obj){
  return  Object.keys(obj).length
}

console.log(countProperties(car));

//
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}

for (const key in person) {
    if (!Object.hasOwn(person, key)) continue;
       
    console.log(`${key} : ${person[key]}`)
}


user = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
};

// Check if "email" exists in object --(using in)
if ("email" in user) {
  console.log("Email exists");
} else {
  console.log("Email does not exist");
}

//Merge these two objects into one.
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }

let obj3 = {...obj1, ...obj2}
console.log(obj3)

//Convert this object into an array of key-value pairs.
console.log(Object.entries(user))

//Find the student with highest marks.
marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}

let maxValue = Object.keys(marks).reduce((a, b) => marks[a] > marks[b]? a : b)
console.log(maxValue)

