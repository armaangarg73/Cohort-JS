const aadhar_of_mayur = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");

console.log(typeof aadhar_of_mayur);
console.log(aadhar_of_mayur === aadhar_of_piyush);
console.log(aadhar_of_mayur.toString());
console.log(aadhar_of_mayur.description);

const nonIndian = Symbol();
console.log(nonIndian.description); // undefined

const bioMetricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const citizensRecord = {
  name: "Ved Pandey",
  age: 21,
  [bioMetricHash]: "asjgvsjzvjdcnkbn",
  [bloodGroup]: "O+",
  // Agr symbol as a key pass kr rhe ho voh visible nhi hoti
};

console.log(Object.keys(citizensRecord)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(citizensRecord)); // [ Symbol(biometricHash), Symbol(bloodGroup) ]

const rtiQueryBook = {
  queries: ["Infra budget", "Ration Card", "Education Budget", "Startup laws"],
  [Symbol.iterator]() {
    let index = 0;
    const queries = this.queries;
    return {
      next() {
        if (index < queries.length) {
          return { value: queries[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (const query of rtiQueryBook) {
  console.log(`Filing RTI:${query}`);
}

const governmentScheme = {
  name: "PM Kisan Yojna",
  people: 54 ,
  [Symbol.toPrimitive](hint) {
    if(hint === "string") return this.name ;
    if(hint === "number") return this.name ;
  }
};

console.log(+governmentScheme) // Convert to number
console.log(`${governmentScheme}`); // Convert to string

// Bhut jyada hogya symbol chodo ab

