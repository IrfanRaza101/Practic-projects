// Q1 write a program print hello world

console.log('hello world');

// Q2 write a function to add 2 numbers 

function add(a, b) {
    return a + b ;
}
let res = add(2, 3);
console.log(res);

// Q3 write a function to return squre of a number

function sq(a) {
    return a * a;
}
let results = sq(2);
console.log(results);

// Q4 write a function check if number is bigger than 10

function check(a) {
    return a > 10;
}
let result = check(12);
console.log(result);

// Q5 write a function to get the last element of an array

function lastElement(arr) {
    return arr[arr.length - 1];
}

let arr = [1, 2, 3, 4, 5];
let last = lastElement(arr);
console.log(last);

// Q6 write a function to get convert 1 hour to seconds

function hoursToSec(hour) {
    return hour * 60;
}
let hour = hoursToSec(1);

console.log(hour);

// Q7 write a function to convert number to string

function numtoString(num) {
    return num.toString();
}
let num = numtoString(123);
console.log(num);

// Q8 if number comes then convert in string format and comes string then print string

function numtostring(num) {
    if (typeof num === 'number') {
        return num.toString();
    }
    return num;
}
let num1 = numtostring(456);
console.log(num1);

// Q9 write a function to check if string is empty or not

function checkEmpty(str) {
    return str === '';
}
let str = checkEmpty('');
console.log(str);

// Q10 write a function to duble the number in an array

function double(arr) {
    return arr.map((item) => item * 2);
}
let arr1 = [1, 2, 3, 4, 5];
let doubleArr = double(arr1);
console.log(doubleArr);