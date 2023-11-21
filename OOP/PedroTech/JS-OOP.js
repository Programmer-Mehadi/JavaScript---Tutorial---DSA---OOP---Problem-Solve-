class Course {
  constructor(name, price, personList) {
    this.name = name
    this.price = price
    this.personList = personList
  }
  getName() {
    return this.name
  }
  getPrice() {
    return this.price
  }
  getPersonList() {
    return this.personList
  }
}


class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
}


const p1 = new Person('Pedro', 20)
const p2 = new Person('Maria', 25)

const c1 = new Course('JavaScript', 100, [p1, p2])

console.log(c1.personList[0].name);
console.log(c1.personList[0].age);


// other parts follow Learn with Sumit tutorials