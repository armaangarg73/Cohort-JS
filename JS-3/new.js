function TataCar(chaisisNumber, modelName) {
  this.chaisisNumber = chaisisNumber;
  this.modelName = modelName;
  this.fuelLevel = 100;
}

TataCar.prototype.status = function () {
  return `${this.modelName} #${this.chaisisNumber} | Fuel : ${this.fuelLevel}`;
};

const car1 = new TataCar("MH-101", "Defender");
const car2 = new TataCar("MH-103", "Bentley");
const car3 = new TataCar("MH-107", "Rolls Royce");

console.log(car1.status());
console.log(car2.status());
console.log(car3.status());

// Gotchas -> factory function

function createAutoRickshaw(id, route) {
  return {
    id,
    route,
    run() {
      return `Auto ${this.id} running on ${this.route}`;
    },
  };
}

const auto1 = createAutoRickshaw("UP-1", "Lucknow-Kanpur");
const auto2 = createAutoRickshaw("UP-2", "Agra-Mathura");

console.log(auto1.run());
console.log(auto2.run());
