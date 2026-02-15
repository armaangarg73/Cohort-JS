// let age = 45 ;
// age = 24 ;

// console.log(age);

// Function

function sayHello() {
  console.log("Bye!");
}
sayHello();

function greetUser(x, y) {
  console.log(`Hey ${x} and his future ${y}`);
}
greetUser("Armaan", "Someone");

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}
const r = add(2, 5);

for (let i = 0; i < r; i++) {
  console.log(`Value of i is ${i}`);
}

// function cartoon() {
//     function cartoonInsideCartoon() {
//         return 'Naruto🔥' ;
//     }
//     return cartoonInsideCartoon
// }

// const anime = cartoon();
// const a = anime()
// console.log(a)

//                      OR

function cartoon() {
  function cartoonInsideCartoon() {
    return "Naruto🔥";
  }
  return cartoonInsideCartoon();
}

const anime = cartoon();
console.log(anime);

// -------------------------------------------------------

// age = 45;
// console.log("Value of age is", age, "Is Allowed?", isAllowedToVote(age));

// var age = 12;

// function isAllowedToVote(age) {
//   return age >= 18;
// } output -> 45

// age = 45;
// console.log("Value of age is", age, "Is Allowed?", isAllowedToVote(age));

// var age = 12;

// var isAllowedToVote = function (age) {
//   return age >= 18;
// }; Output -> undefined

// age = 45;
// console.log("Value of age is", age, "Is Allowed?", isAllowedToVote(age));

// var age = 12;

// let isAllowedToVote = function (age) {
//   return age >= 18;
// } output -> Reference error a.k.a Temporal Dead Zone(TDZ)

const isAllowedToVote = (age) => age >= 18;

const isUserAllowedToOpenBankAccount = (age, minBalance) =>
  age >= 18 && minBalance >= 10000;

console.log(isUserAllowedToOpenBankAccount(22, 6000000));

// --------------------------------------------------------

// Data Structures

const fruits = ["apple", "cheeku", true, "aadu", 1, "orange"];
fruits.push("kiwi");
console.log(fruits.length);
console.log(fruits);
console.log(fruits.includes("aadu"));
const firstElement = fruits.shift();
console.log(fruits.length);
console.log(fruits);
console.log({ firstElement });
const rangeOfFruits = fruits.slice(2, 5);
console.log({ rangeOfFruits });
fruits.unshift("1", "2", "3");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf("cheeku"));

// -------------------------------------------------------

// High order function -> A function that takes another function as a parameter

function meraPyaraFunction(udharKaFunction) {
  return udharKaFunction() + 40;
}

function cartoon() {
  return 10;
}

console.log(meraPyaraFunction(cartoon)); // output -> 50

function printKrdo(element) {
  console.log(element);
}
fruits.forEach(printKrdo);

const nums = [1, 2, 3, 4, 5, 6];
// const result = nums.map((e) => e * 4);
const result = map((e) => e * 3);
console.log(result);

// khudka map

function map(fn) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const currentElement = nums[i] ;
    const num = fn(currentElement);
    result.push(num);
  }
  return result
}
