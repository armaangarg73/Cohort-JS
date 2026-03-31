class Cricketer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.matchesPlayed = 0;
    this.stamina = 100;
  }
  introduce() {
    return `${this.name} the ${this.role} | total matches: ${this.matchesPlayed} | stamina: ${this.stamina}`;
  }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Bumrah", "Bowler");

console.log(player1.introduce());
console.log(player1.hasOwnProperty("name")); // true
console.log(typeof Cricketer); // function
console.log(typeof player1); // Object

class Debutant {
  constructor(name) {
    this.name = name;
    this.walkout = () => `${this.name} walks out to bat for the first time`; // Detached function
  }
} 
const debutant1 = new Debutant("Shubman");
const debutant2 = new Debutant("Yashashvi")
const somethingFromLast = debutant1.walkout;
console.log(somethingFromLast());
console.log(debutant1 === debutant2);

