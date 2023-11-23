function Person(name, age) {
  let person = Object.create(Person.prototype);

  person.name = name;
  person.age = age;

  return person;
}

Person.prototype = {
  about() {
    return (`My name is ${this.name} and I am ${this.age} years old`)
  },
  isAdmin() {
    return this.age >= 18
  },

}

const p = new Person('John', 26);

console.dir(p.isAdmin());
