class Player {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name
    this.#age = age
  }
  getName() {
    return this.#name
  }
  getAge() {
    return this.#age
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

  getPlayerDetails() {
    return `${this.getName()} is ${this.getAge()} years old and has scored ${this.#goals} goals`;
  }
}


const sakib = new Cricketer("Sakib", 34, 15);
const ronaldo = new Footballer("Ronaldo", 35, 200);


console.log(sakib.getPlayerDetails())
console.log(ronaldo.getPlayerDetails())