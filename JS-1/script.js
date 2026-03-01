var fname = "Armaan";
var lname = "Garg";

// JS is a loosely typed language -> Anything I write it is accepting.

console.log("Value of fname is", fname);

fname = "Hardik";

console.log("Value of fname is", fname);

fname = 32;

console.log("Value of fname is", fname);

function addNumbers(num1, num2) {
  var result = num1 + num2;
  console.log("Result is", result);
}

addNumbers(4, 6);
addNumbers(11, 57);

// Condition -> Ya to hoga ya nhi hoga
// Condition -> True or False

// var age = 22;
// var condition = age >= 18;
// // var reverseOfCondition = age < 18;

// if (condition) {
//   console.log("Vote is allowed");
// }

// else{
//     console.log("You are not allowed to vote");
// }

// if(reverseOfCondition){
// console.log("You are not allowed to vote");
// }

var age = 87;

var childCondition = age <= 12;
var teenCondition = age <= 19;
var adultCondition = age <= 40;
var snrCondition = age > 40;

if(childCondition) {
    console.log("You are a child");
}

else if(teenCondition) {
    console.log("You are a teen");
}

else if(adultCondition) {
    console.log("You are an adult");
}

else {
    console.log("You are a senior citizen");
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Loops

// 1. For = when you know exactly know ki kitni baar code ko ghumana hai

for (var i = 1; i <= 10; i++) {
  console.log("Meri i ki value", i);
}

// 2. While = code ko tabtak ghumao jb tk kaam pura na hojaye i.e I only know the condition , but don't know how many iterations

var fileSize = 1024 ;
var currentFileDownload = 3000 ;

while(currentFileDownload < fileSize) {
    console.log("Keep downloading the file");
    currentFileDownload+=getRandomInt(20,40);
}

// 3. do while 

do {
  console.log("Keep downloading the file");
  currentFileDownload += getRandomInt(20, 40);
} while (
    currentFileDownload < fileSize
);
