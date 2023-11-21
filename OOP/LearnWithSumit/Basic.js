// class - 1 (basic)
// define class
class Player {
  constructor(name, age, skill) {
    this.name = name;
    this.age = age;
    this.skill = skill;
  }
  sayHello() {
    return `Hello from ${this.name}, i am ${this.age} years old and I am a ${this.skill}`
  }
}

//  object / instance representing a player
const mehadiObj = new Player("Muhammad Mehadi", 26, "Full Stack Developer");

console.log(mehadiObj.name) // Muhammad Mehadi
console.log(mehadiObj.age) // 26
console.log(mehadiObj.skill) // Full Stack Developer
console.log(mehadiObj.sayHello()) // Hello from Muhammad Mehadi, I am 26 years old and I am a Full Stack Developer



// class - 2 (inheritance)
class Human {
  constructor(name) {
    this.name = name;
    this.arms = 2;
    this.legs = 2;
  }
}


class Baby extends Human {
  constructor(name, cute) {
    super(name);
    this.cute = cute;
  }
  cry() {
    return 'Waa waa!';
  }
}


class Teenager extends Human {
  constructor(name, emotional) {
    super(name);
    this.emotional = emotional;
  }
  crush() {
    return 'I have a crush on ***';
  }
}

