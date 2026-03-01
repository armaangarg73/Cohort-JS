"use strict";

// Hello World
// console.log("Hello World!");

/* Code Structure
-> Kebab file names */

/* Strict Mode
1. 2009 -> ES5 added new features which broke few things.
2. To keep old systems running -> new features are turned off by default.
3. "use strict" -> always use at top
4. There is nothing called "no use strict"
5. JS -> Class , Modules

So, strict mode was introduced to avoid breakage of things.
*/

/* Variables
Steps -> create , store , use and modify
*/

let myFavLang;
myFavLang = "Javascript";

console.log(myFavLang);

myFavLang = "TypeScript";
console.log("Now after learning TS , my most used language is ", myFavLang);

// Uppercase Constants

const VDAY = "14 Feb";

const days = "days from VDAY";

console.log(Math.PI);

/* Data Types
-> Primitive
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
7. bigInt

-> Non Primitive
7. object
*/

// 1. Numbers -> integers , float , double etc.
let myNum = 45.65;
// INFINITY , -INFINITY , NAN
console.log(1 / 0);
console.log(6 / "Not a Number");
console.log(NaN ** 0);

// 2. BigInt
// -2^53-1 to 2^53-1

let bigBalance = 985734975659383927429729n; // n -> add kro type bigInt bn jayega

// 3. String
let single = 'I am single 🥀'
let double = "I am double 😊"
let backTick = `string interpolation`;

// 4. Boolean (true , false)

let isPassed = true ;
let piyushIsSingle = false ;

// NULL (empty , unknown)
let partner = null ;

// undefined (value not assigned)
let bodyCount ;

// Symbol
// use to create unique identifiers for objects.

// Object
const person = {
    name : "AG" ,
    age: 20 ,
    mobile : 98765 ,
    isSingle : true ,
};

// typeof X return Data types
console.log(typeof 12.456)
console.log(typeof 12526578832289n)
console.log(typeof "armaan")
console.log(typeof undefined)
console.log(typeof false)
console.log(typeof Symbol("id"))
console.log(typeof Math)

// Quirky
console.log(typeof null)
console.log(typeof console.log)

// Type Conversion

let choice = false;
let strChoice = String(choice);

let strInput = "25"
let age = Number(strInput)

console.log(Boolean(0))

// Operators
// Arithmetic -> [+,-,/,*,%,**]

// String concatenation
console.log(6 + "not a number")
// rule -> if any of the operand is string then the other one is converted to string too

// Operator precedence
/*
Precedence	Associativity	Individual operators	Notes
18: grouping	n/a	Grouping
(x)	[1]
17: access and call	left-to-right	Member access
x.y	[2]
Optional chaining
x?.y
n/a	Computed member access
x[y]	[3]
new with argument list
new x(y)	[4]
Function call
x(y)
import(x)
16: new	n/a	new without argument list
new x
15: postfix operators	n/a	Postfix increment
x++	[5]
Postfix decrement
x--
14: prefix operators	n/a	Prefix increment
++x	[6]
Prefix decrement
--x
Logical NOT
!x
Bitwise NOT
~x
Unary plus
+x
Unary negation
-x
typeof x
void x
delete x	[7]
await x
13: exponentiation	right-to-left	Exponentiation
x ** y	[8]
12: multiplicative operators	left-to-right	Multiplication
x * y
Division
x / y
Remainder
x % y
11: additive operators	left-to-right	Addition
x + y
Subtraction
x - y
10: bitwise shift	left-to-right	Left shift
x << y
Right shift
x >> y
Unsigned right shift
x >>> y
9: relational operators	left-to-right	Less than
x < y
Less than or equal
x <= y
Greater than
x > y
Greater than or equal
x >= y
x in y
x instanceof y
8: equality operators	left-to-right	Equality
x == y
Inequality
x != y
Strict equality
x === y
Strict inequality
x !== y
7: bitwise AND	left-to-right	Bitwise AND
x & y
6: bitwise XOR	left-to-right	Bitwise XOR
x ^ y
5: bitwise OR	left-to-right	Bitwise OR
x | y
4: logical AND	left-to-right	Logical AND
x && y
3: logical OR, nullish coalescing	left-to-right	Logical OR
x || y
Nullish coalescing operator
x ?? y	[9]
2: assignment and miscellaneous	right-to-left	Assignment
x = y	[10]
Addition assignment
x += y
Subtraction assignment
x -= y
Exponentiation assignment
x **= y
Multiplication assignment
x *= y
Division assignment
x /= y
Remainder assignment
x %= y
Left shift assignment
x <<= y
Right shift assignment
x >>= y
Unsigned right shift assignment
x >>>= y
Bitwise AND assignment
x &= y
Bitwise XOR assignment
x ^= y
Bitwise OR assignment
x |= y
Logical AND assignment
x &&= y
Logical OR assignment
x ||= y
Nullish coalescing assignment
x ??= y
right-to-left	Conditional (ternary) operator
x ? y : z	[11]
right-to-left	Arrow
x => y	[12]
n/a	yield x
yield* x
Spread
...x	[13]
1: comma	left-to-right	Comma operator
x, y
*/ 

// Bitwise -> Visit MDN 
// AND , OR , XOR , NOT

// Strict , lose

console.log(2 =='2') // compares value
console.log(2 ==='2') // compare value + type

// for eg if we do null == undefined it will give true , but if we do strict comparison null === undefined we will get false