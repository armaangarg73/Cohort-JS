// class User {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }

//   increment() {
//     this.score++;
//   }
// }

// const user1 = new User("Armaan", 100);
// user1.increment();
// console.log(user1.score);

// console.log(typeof User); // function

class User {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  login() {
    console.log("Logged In");
  }
}

class Admin extends User {
  constructor(name, score, isAdmin) {
    super(name, score);
    this.isAdmin = isAdmin;
  }
  deleteUser() {
    console.log("Deleted");
  }
}

const admin = new Admin("Armaan" , 100 , true);
console.log(admin.name);
console.log(admin.score);
console.log(admin.isAdmin);


