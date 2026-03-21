const prithviraj = {
  name: "Prithviraj",
  generation: "grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};

const raj = Object.create(prithviraj); // Prototype inheritance
console.log(raj); // {} -> beacuse raj does not have it's own properties
console.log(raj.name);
console.log(raj.generation);
console.log(raj.cookTraditionalDish());

// Overriding the values

raj.name = "raj";
raj.generation = "father";
raj.runBuisness = function () {
  return `${this.name} runs the family buisness`;
};

console.log(raj);

const ranbir = Object.create(raj);
raj.name = "ranbir";
ranbir.generation = "son";
ranbir.makeFilm = function () {
  return `${this.name} directs blockbustur movies`;
};

console.log(ranbir.makeFilm());
console.log(ranbir.runBuisness());
console.log(ranbir.cookTraditionalDish());

Array.prototype.last = function () {
  return this[this.length - 1];
};

console.log([1, 2, 3].last());
console.log(["5", "6", "7"].last());

// Polyfill
Array.prototype.mapThree = function () {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * 3);
  }

  return result;
};

console.log([1, 2, 3].mapThree());

Array.prototype.reduceTwo = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

console.log([1, 2, 3].reduceTwo());

Array.prototype.myForEach = function () {
  for (let i = 0; i < this.length; i++) {
    console.log(this[i] , i);
  }
};

console.log([10, 20, 30].myForEach());
