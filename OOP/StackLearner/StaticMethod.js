class Person {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }
  static checkAge(age) {
    return age > 18
  }
  getDetails() {
    return `${this.name} ${this.age} ${this.email}`;
  }
}
let p = null;
if (Person.checkAge(95)) {
  p = new Person("Muhammad Mehadi", 26, "mehadi@gamil.com")
  console.log(p);
  console.log(p.getDetails())
}
else {
  console.log('Age is not greater than 18')
}
