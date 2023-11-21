class BetterArray {
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(deletedValue) {
    this.#items = this.#items.filter((item) => item !== deletedValue);
  }
  clear() {
    this.#items = [];
  }
  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);
    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}


const array = new BetterArray();

console.log(array.getItems());

array.addItem(1);
array.addItem(20);
array.addItem(3);
array.addItem(4);

console.log(array.getItems());

array.removeItem(20);

console.log(array.getItems());