// class MathUtils {
//     static add(a , b) {
//         return a+b ;
//     }
// }

// console.log(MathUtils.add);

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    if (val.length < 2) {
      console.log("Name too short");
    }
    this._name = val;
  }
}

const u = new User("Armaan");
console.log(u.name); // getter
u.name = "A"; // triggered setter

// class Bank {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   balance() {
//     return this.#balance;
//   }
// }

// const hdfc = new Bank();
// // console.log(hdfc.balance()); // 0 -> kyuki balance initialize hua tha
// hdfc.deposit(1000000000);
// console.log(hdfc.balance()); // 1000000000
// console.log(hdfc.#balance); // Syntax error -> private field -> cannot access

// Encapsulation

class Bank {
  #balance = 0;

  get balance() {
    return this.#balance;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Invalid amount");
      return;
    }
    this.#balance += amount;
  }
}

const hdfc = new Bank();
hdfc.balance = 1000000000;
console.log(hdfc.balance);

// Abstraction

class CofeeMachine {
  #heat() {}
  #brew() {}

  start() {
    this.#heat();
    this.#brew();
  }
}

// Polymorphism

class Animal {
    speak() {
        console.log("Sound");   
    }
}

class Dog extends Animal {
    speak() {
        console.log("Bark...")
    }
}

class Cat extends Animal{
    speak() {
        console.log("Magga ladle gok gok gok meow");
        
    }
}
