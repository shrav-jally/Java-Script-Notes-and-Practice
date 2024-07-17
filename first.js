//Javascript
//Variables and Data Types
//Operators and Conditional Statements
//Loops and Strings
//Arrays
//Functions
//Objects
//DOM & Events
//API Calls
/*-----------------------------------------------------------------------------------------------------------*/
 
/****Variables and Data Types****/


/* html files are connected directly to the browser, and when we connect js files to html files, they're indirectly connected to browser...
you can make relative connection if both files exist in same folder, otherwise absolute connection...
variables-containers for varying data, addresses of memory locations of data
rules- letters, numbers (can't lead), _, $ only, reserved words can't be variable names, case sensitive 
general convention is camel case
js is dymanically typed
= is the assignment operator
*/

console.log("Hello JS");
myname = 'Shravya';
age = 18;
price = 18.18;
x = null;
y = undefined;
t = true;
f = false;
console.log(myname, age, price, x, y, t, f);

/*so we've to specify var/let/const before variable names, it's a compulsion
var enables re-declaration and updation, it defines a global scope variable (outdated due to downsides)
var age = 18;
var age = 21;
var age = 25;
console.log(age);
>>25  //since it's the most recently declared "age"
here 3 different memory locations named age are defined and lots of confusion is created when used irl, previous
values still count but most recent is considered hence confusion 

let variables can't be re-declared but can be updated, block scope variables {}
let age = 18;
let age = 21;
console.log(age);
>>error cause you're trying to re-define lmao (but possible if re-defined in separate blocks)

let age = 18;
age = 21;
console.log(age);
>>21
here one memory location named age keeps getting updated, previous values don't count

let a;  //can be updated later, this is definition step
console.log(a);
>>undefined

const PI = 3.14;
these are block scope variables that can't be re-defined or updated, preferred to be all caps, 
usually preferred in code

const a;   //this sorta declaration isn't possible though
*/

/* data types- Number, String, Boolean, Undefined, Null, BigInt, Symbol (primitive)
               Objects(arrays and functions)(in the forn of key:value) (non-primitive)
to access/update/messw a value from object use <obj>.<key> or <obj>["<key>"] 
...okay but if we can't update const primitive data types, how can we update const non-primitive data types
const variable's values are unchangable, but const obj's key's values are changable
since an object is a collection, you've to change the whole collection to throw an error for const obj

typeof <variable name>
>> data type of variable

let x = null;
console.log(x);
typeof x
>> null
>> 'object'  //cause null basically means absence of an object 

let x = BigInt('123');
let y = Symbol("Hello!");  //these 2 datatypes are rarely used 
*/

const product = {
    title: "Pen", 
    price: 124.35,
    isDeal: true
};
console.log(product);

1 + 1
>> 2
'1' + 1
>> 11
'abc' + 123
>> abc123

//-------------------------------------------------------------------------------------------------------------

/****Operators and Conditional Statements****/


/*
comments
operators

arithmetic (+, -, *, /, %, **, ++, --)
pre and post concepts
a = 5;
b = 9;
console.log(a--);     /first displays original value, then reduces by 1, post operator
console.log(a);
console.log(++b);     //fist increases by 1, then displays, so even the next print statement has the same value
console.log(b);
>>5
>>4
>>10
>>10

assignment (=, +=, -=, *=, %=, **=)
comparison (==, ===, !=, !==, >, >=, <, <=)

sometimes you can compare a string and a number (diff data types), using == and !=, but if you don't want that, 
intituitively use ===, !==

== checks value, === checks data type too

logical (&&, ||, !) : (TT=T TF=F FF=F, TT=T TF=T FF=F, T=F)
bitwise (|)
ternary (condition ? true output : false output ;)(works on 3 operands)

----------------------------   //this shit's just a compact if-else statement 
let age = 25;
let result = age >= 18 ? "major" : "minor";
console.log(result);
--------------------------

Conditional Statements

if statement 
---------------------
let color;                     //declaring a variable
if (mode === "dark"){          //if (varying condition){ the required internal condition}
     color = "black";
}
 -------------------
let mode = "light";
let color;

if (mode = "dark"){
     color = "black";
}

if (mode = "light"){
     color = "white";
}

console.log(color);

>>white
--------------------

if-else statement
---------------------
let mode = "anything";
let color;

if (mode = "dark"){
     color = "black";
}else {
     color = "white";
}

console.log(color);

>>white
-------------------------

let number = 29;

if (number % 2 === 0){
    type = "even";
}else {
    type = "odd";
}

console.log(type);

>>odd 
--------------------------

else-if statements
----------------------------
let mode = "pink";
let color;

if (mode === "dark"){
     color = "black";
}else if (mode === "light"){
     color = "white";
}else {                                  //here mode is anything other than black and white
     color = "hehe you won't get that";
}

console.log(color);
----------------------------------------------

single line if statement

let mode = "dark";
if (mode = "dark") console.log(mode);

this isn't preferred over block structure

switch statement - evaluates an expression against a coupla predefined cases in 'case' clause and 'break' st
not used so like, lyt
*/

/* MDN docs
more information about everything related to a programming language
*/

//Q get user to input a number using prompt, check if it's a 5 multiple

/*
remember 'alert'?
alert("hello!"); //one time popup

similarly 'prompt'.

let variable = prompt("Enter a number: ");
console.log(variable);  //this is the number user inputs

if (variable % 5 === 0){
    console.log("it's a 5 multiple");
}else {
    console.log("this isn't a 5 multiple");
}
*/ 

//Q code which can give grades to students according to scores

/*
let score = some score;
let grade; 

if (score >= 90 && score <= 100){
    grade = "A";
}...coupla more else ifs and skipping an else statement would do.

console.log(grade);
*/
/*---------------------------------------------------------------------------------------------------------------*/

/****Loops and Strings****/

//initializaiton statement, stopping statement, updation statement
for (let i = 1; i <=5; i++){
     console.log('printing again');
}

//sum of 1 to 5 numbers
sum =  0;
for (let i = 1; i <= 5; i++){
     sum = sum + i;
}
console.log(sum);

/*the let variable initiated in for statement is only block scoped, it's useless outside the for block
if defined using var inside for statement it can also be used outside*/

//infinite loops (we should never use it in a program), stopping condition never false

//everything possible w for loop is also possible w while loop (no guarantee of atleast one iteration as below)
sum = 0;
let i = 1;
while (i <= 5){
     sum = sum + i;
     i++;
}
console.log(sum);

// do-while loop (condition checked after execution so atleast one iteration is always present)
// i = 20;
do {
  console.log("printing");
  i++;
} while (i<=10); 

//printing 1 to 5 numbers
//let i = 1;
do {
     console.log(i);
     i++;
} while (i <= 5);

//for-of loop, or for-in loop (help iterate on some special data types)(initialization, updation, stopping= auto)
let str = "printing";
for (let val of str){
     console.log(val);
}

//for-of for strings and arrays, for-in for objects
let student = {
     name: "Shravya Jallepally",
     age: 18,
     cgpa: 9.4,
     isPass: true,
};
for (let key in student){
     console.log(key);
     console.log(student[key]);
}
//keys aur values return karne ke liye syntax

//print all even numbers from 0 to 100
for (let i = 0; i <= 100; i++){
     let j = i;
     while (j%2===0){
         console.log(j);
         j++;
     }
}

//or

for (let num = 0; num <= 100; num++){
     if(num %2 === 0){
          console.log(num);
     }
}

//game where you start w random no., ask user to enter number until entry matches random no.
let rand = Math.floor(Math.random() * 6);  //generates random integer from 1 to 5
let gues = prompt("Enter your prediction: ");
while (gues != rand){
     gues = prompt("Enter your prediction again lmao: ");
}
console.log("you guessed it! it was: ", rand);

//ponder, why can't you use !== here, and only !=...


//s t r i n g s, immutable

/*
creation of strings
str.length
string indices: str[0], str[1]
 
template literals:
let obj = {
   item: 'pen', 
   price: 100
};
console.log("the name of the item is: ", obj.item, "it's price is: ", obj.price, "rupees");

let specialString = `This is a template literal`;
console.log(typeof specialString);  //string only brother,  but why backticks?
to combine all the shit in console.log() like 

let output = `the cost of ${obj.item} is ${obj.price}`;  //$ method, aka string interpolation
                                                                stores expressions and variables
console.log(output);
  
*numbers are usually highlighted in outputs, in template literals all numbers are strings, no highlights

ecape characters: \n, \t (length of escapt characters in a string is '1'- trick question)

str.toUpperCase()
str.toLowerCase()
str.trim()    //removes whitespaces at beginning and ending, not the ones in between
str.slice(start, end?)    
str1.concat(str2)    
str.replace(searchVal, newVal)
str.replaceAll(searchVal, newVal)
str.charAt(idx)     //almost like accessing through indexing 

string methods don't change the original string
*/

/*------------------------------------------------------------------------------------------------------------*/

/****Array****/

let marks = [23, 25, 21, 19]; //w same or diff data types
marks.length

//property-gives a value, method-does some work
//data type of array(index:value) is object(key:value)
//array indices, arrays are mutable

//looping over array
for (let idx = 0; idx < arr.length; idx++){

}

for (let item of arr){

}

//Q for a given [85, 97, 44, 37, 76, 60] marks, find average

let arr = [85, 97, 44, 37, 76, 60];
sum = 0;
for (let i = 0; i < arr.length; i++){
      sum = sum + arr[1]
}
let avg = sum/arr.length;
console.log(avg);

//or

for (val of arr){
     sum += val;
}

//Q given [250, 645, 300, 900, 50] prices, they got 10% off, print final prices

arr = [250, 645, 300, 900, 50];
let new_arr = [];
for (i = 0; i < arr.length; i++){
     let new_price = arr[i]*0.9;
     new_arr.push(new_price);
}
console.log(new_arr);

//or, without using push 

let j = 0;
for (val of arr){
     let offer = val/10;
     items[j] = items[j]-offer;
     console.log(items[j]);
     j++;
}

// in for loop we get to access elements using indices, thus iterations are numbers
// in for of loop, we get directly consecutive values of the object
// so as per requirement we can mould and use

arr.push()  //add to end
arr.pop()  //take from end
arr.toString()
arr1.concat(arr2, arr3, )
arr.unshift()  //add to start
arr.shift()  //take from start and returns the deleted value
arr.slice(start, end)
arr.splice(add, remove, replace) //starting from index, no of elements to delete, all elements you want to add
//can act like slice when given 1 argument =, understand the arguments' functions

/*-----------------------------------------------------------------------------------------------------------*/

/****Functions****/    //reduce redundancy 

//definition
function func_name(parameters){
     //work
}

//calling, invocation
func_name();

//don't write shit after return statement, shit's invisible
//parameters act as local variables (block scope)

//arrow functions, part of modern javascript
const arrowSum = (a,b) => {                 //right side part is the actual arrow function
    console.log(a+b);                       //that shit's stored in a constant/let/var explicitly
};                                          //works without parameters too

arrowSum
>>//returns whole function definition, like when called a variable returns it's value

arrowSum(3, 4)
>>7

//we can remove flower braces
const printing = () => console.log("hello!");
printing()
//>>hello!

//Q take string as an argument and return number of vowels
let count = 0;
function vowels(string){
     for( i = 0; i <= string.length; i++){
          if (string[i]==='a'){                // you can also do string[i]==='a' || string[i]==='e', so on...
               count += 1
          }else if (string[i]==='e'){
               count += 1
          }else if (string[i]==='i'){
               count += 1
          }else if (string[i]==='o'){
               count += 1
          }else if (string[i]==='u'){
               count += 1
          }
     }
     return count;
}
vowels("onomatopoeia");
//>>8

//Q arrow function to perform same task
vowels = (string) => {                         //we gon just copy the same logic and change the syntax
     count = 0;
     for( i = 0; i <= string.length; i++){
          if (string[i]==='a'){                // you can also do string[i]==='a' || string[i]==='e', so on...
               count += 1
          }else if (string[i]==='e'){        
               count += 1
          }else if (string[i]==='i'){
               count += 1
          }else if (string[i]==='o'){
               count += 1
          }else if (string[i]==='u'){
               count += 1
          }
     }
     return count;  
};

vowels("abcde");

//forEach loop in arrays, it's a method (a function associated with an object becomes a method)
arr.forEach(callBackFunction)
//callBackFunction is an externally defined function used to execute for each element in an array
//JS is special because, functions can be passed as arguments in another function sometimes, aka callback

arr.forEach(function printVal(val){
     console.log(val);
});

//or

arr.forEach((val) => {
     console.log(val);
});

//callback functions have 3 parameters (value/ item, position/idx, array)

//higher order functions/methods?  take other functions as paremeters, or return functions

let calSq = (num) => {
     console.log(num*num);
};
nums.forEach(calSq);       //nums is the array

//more array methods

arr.map(callBackFunction(value, index, array))

let newArr = arr.map((val) => {
     //work 
})

newArr = arr.filter((val) => {
     //condition satisfied by selected values from arr
})                                                    //creates a new array w elements satisfying a condition

//reduces array to single value
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
console.log(sumWithInitial);

//Q printing the largest number in an array
arr = [110, 343, 23, 58, 3024];

const output = arr.reduce((prev, curr) => {
     return prev > curr ? prev : curr;
});
console.log(output);

//Q input n, create an array from 1 to n, calculate sum using reduce method

/*let no = prompt("enter a number: ");
arr = [];
for(i=1;i<=n,i++){
    arr.push(i);
}
sum = 0;
sum = arr.reduce((prev, curr) => { 
     return prev + curr;
})
console.log(sum);*/





