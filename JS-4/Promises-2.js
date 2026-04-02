/*
// pending , done(fulfil , ressolve) , nope(not , reject , nako)

// const promise = new Promise()
// console.log(promise); // TypeError: Promise resolver undefined is not a function

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Chaicode");
    rej(new Error("Chaicode"));
  }, 2000);
});
console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

promise
  .then((value) => console.log(value))
  .then(console.log)
  .catch((error) => console.log(error));

// promise.then(console.log) // Chaicode -> why ? -> because console.log is also a function  , the role of then is to bring data to this function

promise
  .then((value) => {
    newValue = value.toUpperCase();
    return newValue;
  })
  .then((value) => {
    return value + ".com";
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return "Chai";
  })
  .then(console.log);
  */

const turant = Promise.resolve("Turant");
console.log(turant);

const allPromises = Promise.allSettled([
  Promise.resolve("Chai"),
  Promise.resolve("Code"),
  Promise.reject("Error"),
]);

// allPromises.then(console.log);

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Masterji");
    rej(new Error("Masterji"));
  }, 3000);
});

async function nice() {
  try {
    const result = await hPromise;
    console.log(result);
  } catch (error) {
    console.log("Error aa gya re" , error.message)
  }
}
nice();