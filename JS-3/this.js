console.log(this);

function ranveerOnGlobalStage() {
  return typeof this;
}

console.log(ranveerOnGlobalStage());

// function ranveerWithNoScript() {
//     "use strict";
//     return this ;
// }

console.log(ranveerWithNoScript());
function ranveerWithNoScript() {
  return this;
}
console.log(ranveerWithNoScript());

const bollywoodFilm = {
  name: "Bajirow Mastani",
  lead: "Ranveer",

  introduce() {
    return `${this.lead} performs in ${this.name}`;
  },
};

console.log(bollywoodFilm.introduce());

const filmDirector = {
  name: "Sanjay Leela Bhansali",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduces ${actor}`);
    });
  },
};

filmDirector.announceCast();

const filmSet = {
  crew: "Spot boys",
  prepareProps() {
    console.log(`Outer this.crew: ${this.crew}`);

    function arrangeChairs() {
      console.log(`Inner this.crew: ${this.crew}`);
    }
    arrangeChairs();
    const arrangeLights = () => {
      console.log(`Arrow this.crew : ${this.crew}`);
    };
    arrangeLights(); // Arrow function inside a function -> Detached method -> Inme this ka access hota hai
  },
};

filmSet.prepareProps();

// Detached method

const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
};
const detachedBow = actor.bow ;
console.log(detachedBow());

