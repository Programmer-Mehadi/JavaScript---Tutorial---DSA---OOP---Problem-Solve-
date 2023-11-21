class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.size() === 0) {
      return 'Stack is empty';
    }
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  peek() {
    let s = this.size();
    if (s === 0) {
      return 'Stack is empty';
    }
    return this.items[s - 1];
  }
  print() {
    console.log(this.items.join(', '))
  }
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.print();

console.log(stack.size());
console.log(stack.peek());
console.log(stack.pop());

stack.print();




