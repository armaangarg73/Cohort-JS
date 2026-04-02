// console.log("Armaan");
// Promise.resolve("resolved value").then((v) => {
//   console.log("Microtask", v);
// });
// console.log("Garg")

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("Paani ubalte hai ji");
    if (typeof ms !== "number" || ms < 0) {
      rej(new Error("ms must be in number and greater than zero"));
    }
    setTimeout(() => {
      res("Paani ubal gya");
    }, ms);
  });
}

boilWater(200)
  .then((msg) => console.log("Resolved", msg))
  .catch((err) => console.log("Rejected", err.message));

function grindLeaves() {
  return Promise.resolve("Leaves grounded");
}

function steepTea(ms) {
  return new Promise((res) => {
    setTimeout(() => res("Steeped tea"));
  }, ms);
}

function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}

// steepTea(200)
//   .then((msg) => console.log("Resolved", msg))
//   .catch((err) => console.log("Rejected", err.message));

  