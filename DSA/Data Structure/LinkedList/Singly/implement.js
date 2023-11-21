// Node class represents a single element in the linked list
class Node {
  constructor(data) {
    this.data = data; // Data of the node
    this.next = null; // Reference to the next node
  }
}

// LinkedList class represents the linked list
class LinkedList {
  constructor() {
    this.head = null; // The first node in the list
  }

  // Add a new node to the end of the list
  append(data) {
    const newNode = new Node(data);

    // If the list is empty, make the new node the head
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // Traverse the list to find the last node and append the new node
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // Print the elements of the list
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Example usage
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

myList.print();
