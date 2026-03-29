// const user1 = {
//   name: "Armaan",
//   score: 99,
//   increment() {
//     this.score++;
//   },
// };

// const user2 = {
//     name : "ChaiCode" ,
//     score : 100 ,
//     increment() {
//         this.score++ ;
//     }
// }

/*
What's happening ->
 1. Dry
 2. Memory waste
 3. scalable❌ */

// const user2 = {
//   __proto__: user1,
// };
// // console.log(user2.name);
// // console.log(user2.increment());
// user2.name = "Angel Priya" ;
// console.log(user2.name);
// user2.__proto__.name = "Dogesh";
// console.log(user1.name);

// Better
// const user2 = Object.create(user1);
// console.log(user2.name);

function User(name, score) {
  this.name = name;
  this.score = score;
}

User.prototype.increment = function () {
  this.score++;
};

// user1.__proto__ === User.prototype;

const user1 = new User("Armaan", 99);
const user2 = new User("Catesh", 100);

console.log(user2.name);
console.log(user1.score);
console.log(user1.increment()); // -> undefined
console.log(user1 instanceof User);
