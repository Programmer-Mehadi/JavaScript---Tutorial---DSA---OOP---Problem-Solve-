class Node {
  constructor(data) {
    this.data = data; // Data of the node
    this.prev = null; // Reference to the previous node
    this.next = null; // Reference to the next node
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // The first node in the list
    this.tail = null; // The last node in the list
  }

  // Add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // Append the new node to the end of the list
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
  }

  // Print the elements of the list in forward direction
  printForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Print the elements of the list in reverse direction
  printBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

// Example usage
const myDoublyList = new DoublyLinkedList();
myDoublyList.append(1);
myDoublyList.append(2);
myDoublyList.append(3);

console.log("Forward:");
myDoublyList.printForward();

console.log("Backward:");
myDoublyList.printBackward();
