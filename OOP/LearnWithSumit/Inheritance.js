class Player {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name
    this.#age = age
  }
  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`;
  }
}

class Cricketer extends Player {
  #centuries;
  constructor(name, age, centuries) {
    super(name, age)
    this.#centuries = centuries
  }
}

class Footballer extends Player {
  #goals;
  constructor(name, age, goals) {
    super(name, age)
    this.#goals = goals
  }
}


const sakib = new Cricketer("sakib", 34, 15);
const ronaldo = new Footballer("ronaldo", 35, 100);
console.log(sakib.getPlayerDetails())
console.log(ronaldo.getPlayerDetails())