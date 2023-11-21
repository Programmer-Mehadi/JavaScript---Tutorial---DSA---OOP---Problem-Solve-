class Person {

  #name;
  #birthDay;
  #monthlySalary;
  #noOfMonths;

  constructor(name, birthDay, monthlySalary, noOfMonths) {
    this.#name = name;
    this.#birthDay = birthDay;
    this.#monthlySalary = monthlySalary;
    this.#noOfMonths = noOfMonths;
  }

  calculateAge() {
    const diff_ms = Date.now() - new Date(this.#birthDay).getTime();
    const age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }

}


const sakib = new Person("sakib", "1990-01-01", 10000, 12);

console.log(sakib.calculateAge()); // 33
console.log(sakib.getSalary()); // 120,000

console.log(sakib.birthDay) // undefined